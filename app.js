class Stopwatch {
  startTime = 0;
  startTimeIsSet = false;

  stopTime = 0;
  stopTimeIsSet = false;

  totalDuration = 0;
  stopped = false;

  start() {
    this.startTime = new Date();
    this.startTimeIsSet = true;
    console.log(this.startTime);
  }
  stop() {
    this.stopTime = new Date();
    this.stopTimeIsSet = true;
    console.log(this.stopTime);
  }
  reset() {
    this.startTime = 0;
    this.stopTime = 0;
    this.stopped = false;
    this.duration = 0;
    console.log("Sw was reset...");
  }
  duration() {
    if (this.startTimeIsSet === true || this.stopTimeIsSet === true){
        this.totalDuration = (this.stopTime.getTime() - this.startTime.getTime()) / 1000;
    }
    console.log("Duration is: " + this.totalDuration);
  }
}



