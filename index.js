const bpm = require('./src/bpm.js');
const Tessel = require('tessel-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new Tessel()
});

// patterns
const test1 = require('./patterns/test1.js');
const test2 = require('./patterns/test2.js');

const setList = [ test1, test2 ];

board.on('ready', () => {
  const button = new five.Button('a7');
  // To get dimming, these need to be connected to PWM outputs:
  const leds = new five.Leds(['a5', 'a6', 'b5', 'b6']);

  let isRunning = false;
  let songIndex = 0;
  let setIndex = 0;

  let end = () => {};

  function stopRunning () {
    isRunning = false;
    songIndex = 0;
    // stop any animations
    leds.stop().off();
    end();
  }

  button.on('press', () => {
    const song = setList[setIndex];
    const pattern = song.pattern;
    const tempo = bpm(song.bpm);
    console.log(`TEMPO: ${tempo.bpm} bpm`);

    // set sampling interval to least needed;
    this.samplingInterval = tempo.b32 / 2;

    if (!isRunning) {
      console.log(`-- Starting song "${song.title}", ${setIndex + 1} of ${setList.length} --`);
      isRunning = true;
      board.loop(tempo.b8, (endLoop) => {
        end = endLoop;
        const thisBeat = pattern[songIndex];
        console.log(`${songIndex + 1}/${pattern.length}`);

        thisBeat.forEach((led, i) => {
          // Pulse and Strobe looks best if just left running
          if (pattern[songIndex > 0]) {
            const prevLed = pattern[songIndex - 1][i];
            if (led === prevLed && (led === 5 || led === 2 || led === 1)) {
              return;
            }
          }

          if (led === 5) {
            leds[i].pulse(tempo.b8);
          } else if (led === 4) {
            leds[i].fadeOut(tempo.b8);
          } else if (led === 3) {
            leds[i].fadeIn(tempo.b8);
          } else if (led === 2) {
            leds[i].strobe(tempo.b32 / 2);
          } else if (led) {
            leds[i].on();
          } else {
            leds[i].stop().off();
          }
        });

        if (songIndex < pattern.length - 1) {
          songIndex++;
        } else {
          if (setIndex !== setList.length - 1) {
            setIndex++;
          } else {
            setIndex = 0;
          }
          console.log(`-- Ending "${song.title}" --`);
          stopRunning();
        }
      });
    } else {
      stopRunning();
    }
  });

  board.on('exit', () => {
    stopRunning();
  });
});
