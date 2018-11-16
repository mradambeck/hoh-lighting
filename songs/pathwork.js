const clickIn = [
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0]
];

const swirl = [
  [6, 0, 0, 0],
  [0, 6, 0, 0],
  [0, 0, 6, 0],
  [0, 0, 0, 6],

  [6, 0, 0, 0],
  [0, 6, 0, 0],
  [0, 0, 6, 0],
  [0, 0, 0, 6],

  [6, 0, 0, 0],
  [0, 6, 0, 0],
  [0, 0, 6, 0],
  [0, 0, 0, 6],

  [6, 0, 0, 0],
  [0, 6, 0, 0],
  [0, 0, 6, 0],
  [0, 0, 0, 6]
];

const pause = [
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0]
];

const noise = [
  [1], [1], [1], [1],
  [1], [1], [1], [1],
  [1], [1], [1], [1],
  [1], [1], [1], [1]
];

const thump = [
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],

  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],

  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],

  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0]
];

const end = [
  [5, 5, 1, 1],
  [5, 5, 1, 1],
  [5, 5, 1, 1],
  [5, 5, 1, 1],

  [5, 5, 1, 1],
  [5, 5, 1, 1],
  [5, 5, 1, 1],
  [5, 5, 1, 1],

  [5, 5, 1, 1],
  [5, 5, 1, 1],
  [5, 5, 1, 1],
  [5, 5, 1, 1],

  [5, 5, 1, 1],
  [5, 5, 1, 1],
  [5, 5, 1, 1],
  [5, 5, 1, 1],

  [1, 1, 5, 5],
  [1, 1, 5, 5],
  [1, 1, 5, 5],
  [1, 1, 5, 5],

  [1, 1, 5, 5],
  [1, 1, 5, 5],
  [1, 1, 5, 5],
  [1, 1, 5, 5],

  [1, 1, 5, 5],
  [1, 1, 5, 5],
  [1, 1, 5, 5],
  [1, 1, 5, 5],

  [1, 1, 5, 5],
  [1, 1, 5, 5],
  [1, 1, 5, 5],
  [1, 1, 5, 5]
];

const instro = [
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],

  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],

  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],

  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0]
];

const song = {
  title: 'Pathwork',
  notes: 2,
  bpm: 104,
  pattern: [].concat(
    clickIn,
    swirl, swirl, swirl, swirl,
    swirl, swirl, swirl, swirl,
    swirl, swirl, swirl, swirl,
    swirl, swirl, swirl, swirl,

    pause,

    noise, noise, noise, noise,

    swirl, swirl, swirl, swirl,
    swirl, swirl, swirl, swirl,

    thump, thump, thump, thump,

    instro, instro,

    end, end, end, end,
    end, end
  )
};

module.exports = song;
