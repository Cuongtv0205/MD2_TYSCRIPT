class StopWatch {
    startTime;
    endTime;

    constructor(startTime, endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    start() {
        this.startTime = Date.now()
    }

    end() {
        this.endTime = Date.now()
    }

    getElapsedTime() {
        return this.endTime - this.startTime
    }

}
let stopwatch = new StopWatch()
stopwatch.start()
console.log(stopwatch.startTime);
stopwatch.end()
console.log(stopwatch.endTime)
stopwatch.getElapsedTime()
console.log(stopwatch.getElapsedTime())