"use strict";
class SimplePrinter {
    constructor(s) {
        this.s = s;
    }
    countUniqueTurns() {
        const seen = new Set();
        let prevChar = null;
        for (let i = 0; i < this.s.length; i++) {
            const currentChar = this.s[i];
            if (currentChar !== prevChar) {
                seen.add(currentChar);
                prevChar = currentChar;
            }
        }
        return seen.size;
    }
}
const input2 = "aaabbb";
const input3 = "aba";
const printer1 = new SimplePrinter(input2);
const printer2 = new SimplePrinter(input3);
console.log(printer1.countUniqueTurns());
console.log(printer2.countUniqueTurns());
