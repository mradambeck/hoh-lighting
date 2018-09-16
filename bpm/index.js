function getBpm (bpm) {
  const quarter = 60000 / bpm;
  const eighth = quarter / 2;
  const sixteenth = eighth / 2;
  const thirtysecondth = sixteenth / 2;
  const half = quarter * 2;
  const measure = quarter * 4;
  const triplet = measure / 3;

  return {
    b1: measure,
    b2: half,
    b3: triplet,
    b4: quarter,
    b8: eighth,
    b16: sixteenth,
    b32: thirtysecondth
  };
}

module.exports = getBpm;
