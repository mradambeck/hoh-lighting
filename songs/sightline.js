const clickIn = [
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0]
];

const pause = [
  [0, 5, 5, 0],
  [0, 5, 5, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 5, 5, 0],
  [0, 5, 5, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const burst = [
  [0, 5, 5, 6],
  [0, 5, 5, 6],
  [0, 0, 0, 6],
  [0, 0, 0, 6],

  [0, 0, 0, 6],
  [0, 0, 0, 6],
  [0, 0, 0, 6],
  [0, 0, 0, 6]
];

const blast = [
  [5, 5, 5, 5],
  [5, 5, 5, 5],
  [0, 0, 0, 0],
  [5, 5, 5, 5],

  [5, 5, 5, 5],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const strobe = [
  [5], [5], [5], [5],
  [5], [5], [5], [5]
];

const blink = [
  [6], [6], [6], [6],
  [6], [6], [6], [6]
];

const on = [
  [1], [1], [1], [1],
  [1], [1], [1], [1]
];

const swirl = [
  [5, 0, 0, 0],
  [0, 5, 0, 0],
  [0, 0, 5, 0],
  [0, 0, 0, 5],

  [5, 0, 0, 0],
  [0, 5, 0, 0],
  [0, 0, 5, 0],
  [0, 0, 0, 5]
];

const song = {
  title: 'Sightline',
  notes: 2,
  divisor: 3,
  bpm: 180,
  pattern: [].concat(
    clickIn,

    pause, pause, pause, pause,
    burst, burst, burst, burst,
    blast, blast, blast, blast,
    blast, blast, blast, blast,

    blink, blink, blink, blink,
    blink, blink, blink, blink,

    blast, blast, blast, blast,
    blast, blast, blast, blast,

    blink, blink, blink, blink,

    pause, pause, pause, pause,
    pause, pause, pause, pause,

    swirl, swirl, swirl, swirl,
    swirl, swirl, swirl, swirl,
    swirl, swirl, swirl, swirl,
    swirl, swirl, swirl, swirl,

    // pause, pause, pause, pause,

    on, on, on, on,
    on, on, on, on,

    strobe, strobe, strobe, strobe,
    strobe, strobe, strobe, strobe,
    strobe, strobe, strobe, strobe,
    strobe, strobe, strobe, strobe,

    strobe, strobe, strobe, strobe,
    strobe, strobe, strobe, strobe
  )
};

module.exports = song;
