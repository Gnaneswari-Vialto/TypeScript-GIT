"use strict";
class TimeDifference {
    constructor(times) {
        this.times = times;
    }
    toMinutes(time) {
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    }
    findMinDifference() {
        const minutes = this.times.map(t => this.toMinutes(t));
        minutes.sort((a, b) => a - b);
        let min = Infinity;
        for (let i = 1; i < minutes.length; i++) {
            const diff = minutes[i] - minutes[i - 1];
            if (diff < min) {
                min = diff;
            }
        }
        const endToStart = (minutes[0] + 1440) - minutes[minutes.length - 1];
        if (endToStart < min) {
            min = endToStart;
        }
        return min;
    }
}
const times = ["23:59", "00:00"];
const diff = new TimeDifference(times);
console.log(diff.findMinDifference());
