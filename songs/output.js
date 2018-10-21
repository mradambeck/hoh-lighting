const pulse = [
  [4], [4], [4], [4],
  [4], [4], [4], [4],
  [4], [4], [4], [4],
  [4], [4], [4], [4]
];

const kickSnr = [
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 0]
];

const ch = [
  // 1
  [5, 1, 0, 5],
  [0, 1, 0, 5],
  [5, 0, 1, 5],
  [0, 0, 1, 5],

  [5, 1, 0, 5],
  [0, 1, 0, 5],
  [5, 0, 1, 5],
  [0, 0, 1, 5],

  // 2
  [0, 1, 0, 5],
  [0, 1, 0, 5],
  [0, 0, 1, 5],
  [0, 0, 1, 5],

  [0, 1, 0, 5],
  [0, 1, 0, 5],
  [0, 0, 1, 5],
  [0, 0, 1, 5],

  // 3
  [0, 1, 0, 5],
  [0, 1, 0, 5],
  [0, 0, 1, 5],
  [0, 0, 1, 5],

  [5, 1, 0, 5],
  [0, 1, 0, 5],
  [5, 0, 1, 5],
  [0, 0, 1, 5],

  // 4
  [0, 1, 0, 5],
  [0, 1, 0, 5],
  [0, 0, 1, 5],
  [0, 0, 1, 5],

  [5, 1, 0, 5],
  [0, 1, 0, 5],
  [5, 0, 1, 5],
  [0, 0, 1, 5]
];

const pause = [
  [4, 0, 0, 0],
  [4, 0, 0, 0],
  [4, 0, 0, 0],
  [4, 0, 0, 0],

  [0, 4, 0, 0],
  [0, 4, 0, 0],
  [0, 4, 0, 0],
  [0, 4, 0, 0]
];

const off = [
  [0]
];

const song = {
  title: 'Output',
  notes: 2,
  bpm: 120,
  pattern: [].concat(
    pulse, pulse, pulse, pulse,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    ch, ch, ch, ch,
    pause,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    off
  )
};

module.exports = song;
