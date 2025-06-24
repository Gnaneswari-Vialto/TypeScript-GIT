"use strict";
class ParenthesesScorer {
    constructor(parenthesesString) {
        this.parenthesesString = parenthesesString;
    }
    calculateScore() {
        let totalScore = 0;
        let currentDepth = 0;
        for (let i = 0; i < this.parenthesesString.length; i++) {
            if (this.parenthesesString[i] === '(') {
                currentDepth++;
            }
            else {
                currentDepth--;
                // if previous char was '(', we found a "()", so add score
                if (this.parenthesesString[i - 1] === '(') {
                    totalScore += 1 << currentDepth;
                }
            }
        }
        return totalScore;
    }
}
const examples = ["()", "(())", "()()"];
for (const example of examples) {
    const scorer = new ParenthesesScorer(example);
    console.log(`Input: "${example}" → Score: ${scorer.calculateScore()}`);
}
