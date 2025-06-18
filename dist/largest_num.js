"use strict";
class LargestNum {
    constructor(nums) {
        this.num = nums;
    }
    tofind() {
        const numsStr = this.num.map(String);
        for (let i = 0; i < numsStr.length; i++) {
            for (let j = 0; j < numsStr.length - 1 - i; j++) {
                const combo1 = numsStr[j] + numsStr[j + 1];
                const combo2 = numsStr[j + 1] + numsStr[j];
                if (combo1 < combo2) {
                    [numsStr[j], numsStr[j + 1]] = [numsStr[j + 1], numsStr[j]];
                }
            }
        }
        if (numsStr[0] === '0') {
            return '0';
        }
        return numsStr.join('');
    }
}
const out = new LargestNum([25, 98, 10, 3, 54]);
console.log(out.tofind());
