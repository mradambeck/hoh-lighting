const dude = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
];
const off = [
  [0]
];

const song = {
  title: 'Test',
  notes: 1,
  bpm: 135,
  pattern: [].concat(
    dude,
    dude,
    off
  )
};

module.exports = song;
