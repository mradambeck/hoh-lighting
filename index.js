const Tessel = require('tessel-io');
const five = require('johnny-five');
const Song = require('./src/Song.js');
const SetList = require('./src/Setlist.js');

// const test = require('./songs/bullcrap.js');
const output = require('./songs/output.js');
const channeling = require('./songs/channeling.js');
let songs = [channeling];

const board = new five.Board({
  io: new Tessel()
});

let turnOffLights;

board.on('ready', function () {
  // To get dimming, these need to be connected to PWM outputs:
  const leds = new five.Leds(['a5', 'a6', 'b5', 'b6']);
  const button = new five.Button('a7');
  songs = songs.map(song => {
    return new Song(song, leds);
  });
  const set = new SetList(songs);

  button.on('press', () => {
    set.handleClick();
  });

  turnOffLights = () => {
    leds.stop().off();
  };
});

board.on('exit', () => {
  console.log('exiting');
  turnOffLights();
});

board.on('warn', (e) => {
  console.log("%s sent a 'warn' message: %s", e.class, e.message);
});

board.on('fail', (e) => {
  console.log("%s sent a 'warn' message: %s", e.class, e.message);
  turnOffLights();
});
