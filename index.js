const bpm = require('./bpm/index.js');
const Tessel = require('tessel-io');
const five = require('johnny-five');

// patterns
const test1 = require('./patterns/test1.js');

const board = new five.Board({
  io: new Tessel()
});

board.on('ready', () => {
  const pattern = test1;
  const button = new five.Button('a7');
  const leds = new five.Leds(['a2', 'a3', 'a4', 'a5']);
  let index = 0;
  const step = 1;

  const tempo = bpm(120);

  button.on('press', () => {
    board.loop(tempo.b8, (endLoop) => {
      const thisBeat = pattern[index];

      thisBeat.forEach((led, i) => {
        if (led) {
          leds[i].on();
        } else {
          leds[i].off();
        }
      });

      index += step;
      if (index === pattern.length) {
        // index = 0;
        endLoop();
        index = 0;
      }
    });
  });
});
