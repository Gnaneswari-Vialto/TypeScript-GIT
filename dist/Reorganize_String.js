"use strict";
class RearrangeString {
    constructor(input) {
        this.input = input;
    }
    rearrange() {
        // Step 1: Count frequency of each character
        const freqMap = {};
        for (let char of this.input) {
            freqMap[char] = (freqMap[char] || 0) + 1;
        }
        let result = '';
        let prevChar = '';
        // Step 2: Repeat until the result is complete
        while (result.length < this.input.length) {
            let found = false;
            for (let char in freqMap) {
                if (freqMap[char] > 0 && char !== prevChar) {
                    result += char;
                    freqMap[char]--;
                    prevChar = char;
                    found = true;
                    break;
                }
            }
            if (!found) {
                return "";
            }
        }
        return result;
    }
}
const test1 = new RearrangeString("aab");
console.log(test1.rearrange()); // Output: "aba"
const test2 = new RearrangeString("aaab");
console.log(test2.rearrange()); // Output: ""
