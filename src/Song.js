const Interval = require('./AdjustingInterval');

class Song {
  constructor (song, leds, callback) {
    this.song = song;
    this.title = song.title;
    this.tempo = this.setLoopIntervals(song.bpm, song.notes);
    this.pattern = song.pattern;
    this.leds = leds;
    this.player = () => {};
    this.divisor = song.divisor || 4;
    this.callback = callback || function () {};
    // bind methods
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.loop = this.loop.bind(this);
    this.reset = this.reset.bind(this);
  }

  loop (action) {
    let bpm = this.tempo;

    this.player = new Interval(() => {
      console.log(`${this.count} of ${this.pattern.length - 1}`);
      if (this.count === this.pattern.length - 1) {
        this.player.stop(this.reset);
        this.callback();
      } else {
        action(this.count);
        this.count += 1;
      }
    }, bpm, 500);

    this.player.start();
  }

  setLoopIntervals (bpm, division) {
    const msInMinute = 60000;
    const measure = msInMinute / bpm;
    return measure / division;
  }

  start (callback) {
    console.log(`Starting ${this.title}`);
    this.count = 0;
    if (callback) { this.callback = callback; }
    const pattern = this.pattern;
    const tempo = this.tempo;

    this.loop((index) => {
      const thisBeat = pattern[index];
      thisBeat.forEach((led, i) => {
        // Everything but fades looks best if just left running
        if (index > 0) {
          const prevLed = pattern[index - 1][i];
          if (led === prevLed && (led !== 2 && led !== 3)) {
            return;
          }
        }

        // if it's just one item in the array, lets apply to the whole row:
        const light = pattern[index].length === 1 ? this.leds : this.leds[i];
        light.stop().off();

        if (led === 6) {
          const blinkTempo = tempo / this.divisor;
          light.blink(blinkTempo);
        } else if (led === 5) {
          // strobe
          light.blink(40);
        } else if (led === 4) {
          // BUG: pulse and anything with fade seems to cause a memory leak
          light.pulse(tempo);
        } else if (led === 3) {
          light.fadeIn(tempo);
        } else if (led === 2) {
          light.fadeOut(tempo);
        } else if (led) {
          light.on();
        }
      });
    });
  }

  reset () {
    this.leds.stop().off();
    console.log('reset song');
  }

  stop () {
    console.log(`Ending ${this.title} in stop`);
    this.player.stop(this.reset);
  }
}

module.exports = Song;
