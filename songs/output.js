const pulse = [
  [0, 5, 5, 0], [0, 0, 0, 0], [0, 5, 5, 0], [0, 0, 0, 0],
  [0, 5, 5, 0], [0, 0, 0, 0], [0, 5, 5, 0], [0, 0, 0, 0],
  [0, 5, 5, 0], [0, 0, 0, 0], [0, 5, 5, 0], [0, 0, 0, 0],
  [0, 5, 5, 0], [0, 0, 0, 0], [0, 5, 5, 0], [0, 0, 0, 0]
];

const kickSnr = [
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 0]
];

const kick = [
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 1, 0],
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
  [5, 1, 0, 5],
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
  [1],
  [1],
  [1],
  [1],

  [1],
  [1],
  [1],
  [1]
];

const off = [
  [0]
];

const strobe = [
  [5], [5], [5], [5],
  [5], [5], [5], [5],
  [5], [5], [5], [5],
  [5], [5], [5], [5]
];

const hold = [
  [5, 0, 0, 0],
  [0, 5, 0, 0],
  [0, 0, 5, 0],
  [0, 0, 0, 5],

  [5, 0, 0, 0],
  [0, 5, 0, 0],
  [0, 0, 5, 0],
  [0, 0, 0, 5],

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
  title: 'Output',
  notes: 2,
  bpm: 122,
  pattern: [].concat(
    pulse, pulse, pulse, pulse,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    ch, ch, ch, ch,
    pause, pause,
    kick, kick, kick, kick, kick, kick, kick, kick,
    kick, kick, kick, kick, kick, kick, kick, kick,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr, kickSnr,
    ch, ch, ch, ch,
    hold, hold, hold, hold,
    strobe, strobe, strobe, strobe,
    strobe, strobe, strobe, strobe,
    strobe, strobe, strobe, strobe
  )
};

module.exports = song;
