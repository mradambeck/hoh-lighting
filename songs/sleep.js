const clickIn = [
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0]
];

const toms = [
  [0, 0, 0, 6],
  [0, 0, 6, 0],
  [0, 6, 0, 0],
  [1, 0, 0, 0],

  [0], [0], [0], [0],

  [6, 0, 0, 0],
  [0, 6, 0, 0],
  [0, 0, 6, 0],
  [0, 0, 0, 1],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0]
];

const toms2 = [
  [0, 0, 0, 6],
  [0, 0, 6, 0],
  [0, 6, 0, 0],
  [1, 0, 0, 0],

  [0], [0], [0], [0],

  [6, 0, 0, 0],
  [0, 6, 0, 0],
  [0, 0, 6, 0],
  [0, 0, 0, 1],

  [0], [0], [0], [0]
];

const pause = [
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0]
];

const litUp = [
  [1], [1], [1], [1],
  [1], [1], [1], [1],
  [1], [1], [1], [1],
  [1], [1], [1], [1]
];

const bridge = [
  [0, 6, 6, 0],
  [0, 6, 6, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 6, 6, 0],
  [0, 6, 6, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 6, 6, 0],
  [0, 6, 6, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  // --
  [0, 6, 6, 0],
  [0, 6, 6, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 6, 6, 0],
  [0, 6, 6, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  // --
  [0, 6, 6, 0],
  [0, 6, 6, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 6, 6, 0],
  [0, 6, 6, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  // --
  [0, 6, 6, 0],
  [0, 6, 6, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 6, 6, 0],
  [0, 6, 6, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 6, 6, 0],
  [0, 6, 6, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const song = {
  title: 'Sleep',
  notes: 2,
  bpm: 128,
  // bpm: 126,
  pattern: [].concat(
    clickIn,
    toms, toms, toms, toms,
    toms, toms, toms, toms,
    toms, toms, toms, toms,
    pause,
    litUp, litUp, litUp, litUp,
    litUp, litUp, litUp, litUp,
    pause, pause, pause, pause,
    toms2, toms2, toms2, toms2,
    pause,
    litUp, litUp, litUp, litUp,
    litUp, litUp, litUp, litUp,
    pause, pause, pause, pause,
    bridge,
    litUp, litUp, litUp, litUp,
    litUp, litUp, litUp, litUp,
    litUp, litUp, litUp, litUp,
    litUp, litUp, litUp, litUp
  )
};

module.exports = song;
