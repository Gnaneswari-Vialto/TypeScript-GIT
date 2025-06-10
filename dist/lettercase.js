"use strict";
class LetterCasePermutation {
    constructor(s) {
        this.s = s;
        this.result = [];
    }
    generatePermutations() {
        this.backtrack(0, '');
        return this.result;
    }
    backtrack(index, path) {
        if (index === this.s.length) {
            this.result.push(path);
            return;
        }
        const char = this.s[index];
        if (/[a-zA-Z]/.test(char)) {
            // Add lowercase version
            this.backtrack(index + 1, path + char.toLowerCase());
            // Add uppercase version
            this.backtrack(index + 1, path + char.toUpperCase());
        }
        else {
            // Just add the digit or non-letter
            this.backtrack(index + 1, path + char);
        }
    }
}
const input = "a1b2";
const permutations = new LetterCasePermutation(input).generatePermutations();
console.log(permutations);
