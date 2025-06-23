"use strict";
class ParenthesesValidator {
    constructor(s) {
        this.s = s;
    }
    minInsertionsToMakeValid() {
        let openNeeded = 0;
        let closeNeeded = 0;
        for (const char of this.s) {
            if (char === '(') {
                closeNeeded++;
            }
            else if (char === ')') {
                if (closeNeeded > 0) {
                    closeNeeded--;
                }
                else {
                    openNeeded++;
                }
            }
        }
        return openNeeded + closeNeeded;
    }
}
const example = new ParenthesesValidator("())");
console.log(example.minInsertionsToMakeValid());
