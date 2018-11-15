const clickIn = [
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0]
];

const intro = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const keyLine = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],

  [1, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 0, 0],

  [1, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [0, 0, 1, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const toms = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 1, 0],

  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const toms2 = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const clap = [
  [1, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 0],
  [1, 0, 0, 0],

  [0, 0, 0, 1],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 0],

  [0, 0, 0, 1],
  [1, 0, 0, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 0]
];

const lightUp = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],

  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],

  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],

  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

const song = {
  title: 'Din',
  notes: 2,
  bpm: 150,
  pattern: [].concat(
    clickIn,

    intro, intro, intro, intro,
    intro, intro, intro, intro,

    keyLine, keyLine, keyLine, keyLine,
    toms, toms, toms, toms2,

    clap, clap, clap, clap,

    keyLine, keyLine, keyLine, keyLine,
    keyLine, keyLine, keyLine, keyLine,

    toms, toms, toms, toms2,
    toms, toms, toms, toms2,

    intro, intro, intro, intro,

    keyLine, keyLine, keyLine, keyLine,
    keyLine, keyLine, keyLine, keyLine,

    toms, toms, toms, toms2,
    toms, toms, toms, toms2,

    lightUp, lightUp, lightUp, lightUp,
    lightUp, lightUp, lightUp, lightUp,

    intro, intro, intro, intro
  )
};

module.exports = song;
