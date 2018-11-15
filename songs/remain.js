const clickIn = [
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0],
  [0], [0], [0], [0]
];

const beat = [
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 1],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 1],

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const chorus = [
  [6], [6], [6], [0],
  [6], [6], [6], [0],
  [6], [6], [6], [0],
  [6], [6], [6], [0],
];

const lit = [
  [1], [1], [1], [1],
  [1], [1], [1], [1],
  [1], [1], [1], [1],
  [1], [1], [1], [1]
];

const song = {
  title: 'Remain',
  notes: 2,
  bpm: 190,
  pattern: [].concat(
    clickIn,

    beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,

    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,

    chorus, chorus, chorus, chorus,
    chorus, chorus, chorus, chorus,
    chorus, chorus, chorus, chorus,

    lit, lit, lit, lit,

    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat, beat, beat,
    beat, beat,

    chorus, chorus, chorus, chorus,
    chorus, chorus, chorus, chorus,
    chorus, chorus, chorus, chorus,
    chorus, chorus, chorus, chorus,

    lit, lit, lit, lit,
    lit, lit, lit, lit,
    lit, lit, lit, lit,
    lit, lit, lit, lit,
    lit, lit, lit, lit,
    lit, lit, lit, lit
  )
};

module.exports = song;
