const beatFade = [
  [1, 1, 1, 1],
  [4, 4, 4, 4],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [1, 1, 1, 1],
  [4, 4, 4, 4],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const strobe = [
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2],

  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2]
];

const song = {
  title: 'test 2',
  bpm: 180,
  pattern: beatFade.concat(beatFade, beatFade, beatFade, beatFade, strobe, strobe, strobe, strobe)
};

module.exports = song;
