class Stopwatch {
  startTime = 0;
  startTimeIsSet = false;

  stopTime = 0;
  stopTimeIsSet = false;

  totalDuration = 0;
  stopped = false;

  start() {
    if (!this.startTimeIsSet) {
      this.startTime = new Date();
      this.startTimeIsSet = true;
      console.log(this.startTime);
    }
  }
  stop() {
    this.stopTime = new Date();
    this.stopTimeIsSet = true;
    console.log(this.stopTime);
    this.stopped = true;
  }
  reset() {
    this.startTime = 0;
    this.stopTime = 0;
    this.stopped = false;
    this.totalDuration = 0;
    this.startTimeIsSet = false;
    this.stopTimeIsSet = false;
    console.log("Stop watch is reset.");
  }
  duration() {
    if (this.startTimeIsSet === true && this.stopTimeIsSet === true) {
      this.totalDuration =
        (this.stopTime.getTime() - this.startTime.getTime()) / 1000;
    }
    console.log("Duration is: " + this.totalDuration);
  }
}
let sw = new Stopwatch();

// Testig section
setTimeout(() => {
  sw.start();
}, 0);
setTimeout(() => {
  sw.stop();
}, 2000);
setTimeout(() => {
  sw.duration();
}, 3000);
setTimeout(() => {
  sw.stop();
}, 6000);
setTimeout(() => {
  sw.duration();
}, 7000);
