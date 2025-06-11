"use strict";
class SubsequenceChecker {
    constructor(s, words) {
        this.s = s;
        this.words = words;
    }
    // Helper method to check if a word is a subsequence of s
    isSubsequence(word) {
        let i = 0; // pointer for word
        let j = 0; // pointer for this.s
        while (i < word.length && j < this.s.length) {
            if (word[i] === this.s[j]) {
                i++;
            }
            j++;
        }
        return i === word.length;
    }
    countSubsequences() {
        let count = 0;
        for (const word of this.words) {
            if (this.isSubsequence(word)) {
                count++;
            }
        }
        return count;
    }
}
const s = "abcde";
const words1 = ["a", "bb", "acd", "ace"];
const checker = new SubsequenceChecker(s, words1);
console.log(checker.countSubsequences()); // Output: 3
