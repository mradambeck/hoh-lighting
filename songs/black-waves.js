const clickIn = [
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0]
];

const beat = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 0],

  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 0]
];

const snare = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [5, 5, 5, 5],
  [5, 5, 5, 5],

  [0, 0, 0, 0],
  [5, 5, 5, 5],
  [5, 5, 5, 5],
  [0, 0, 0, 0]
];

const end = [
  [6, 0, 0, 0],
  [0, 6, 0, 0],
  [0, 0, 6, 0],
  [0, 0, 0, 6],

  [0, 0, 6, 0],
  [0, 6, 0, 0],
  [6, 0, 0, 0],
  [0, 0, 0, 0]
];

const song = {
  title: 'Black Waves',
  notes: 2,
  bpm: 140,
  pattern: [].concat(
    clickIn,

    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,

    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,

    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,

    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,

    beat, beat, beat, beat,
    beat, beat, beat, beat,

    snare, snare, snare, snare,

    end, end, end, end,
    end, end, end, end,
    end, end, end, end,
    end, end, end, end,

    end, end, end, end,
    end, end, end, end,
    end, end, end, end,
    end, end, end, end,

    end, end, end, end
  )
};

module.exports = song;
