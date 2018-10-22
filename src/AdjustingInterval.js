/**
* Self-adjusting interval to account for drifting
*
* @param {function} workFunc  Callback containing the work to be done
*                             for each interval
* @param {int}      interval  Interval speed (in milliseconds) - This
* @param {function} errorFunc (Optional) Callback to run if the drift
*                             exceeds interval
*/
function AdjustingInterval (workFunc, interval, skipAmount) {
  var that = this;
  var expected;
  var timeout;
  var amountToSkip = skipAmount || 0;
  this.interval = interval;
  var lastTimeout;
  var shouldRun = true;
  let stopCallback = () => { console.log('stopped loop'); };

  this.start = function () {
    workFunc();
    expected = Date.now() + this.interval;
    timeout = setTimeout(step, this.interval);
  };

  this.stop = function (callback) {
    shouldRun = false;
    if (callback) {
      stopCallback = callback;
    }
  };

  function step () {
    let drift = Date.now() - expected;
    if (drift > amountToSkip) {
      console.log(`drifted ${drift}`);
    } else {
      workFunc();
    }
    expected += that.interval;
    if (lastTimeout) {
      clearTimeout(lastTimeout);
      lastTimeout = timeout;
    }
    if (shouldRun) {
      timeout = setTimeout(step, Math.max(0, that.interval - drift));
    } else {
      clearTimeout(timeout);
      stopCallback();
    }
  }
}

module.exports = AdjustingInterval;
