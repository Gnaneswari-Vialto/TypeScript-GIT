"use strict";
class WordProduct {
    constructor(words) {
        this.words = words;
    }
    // Method to check if two words contain any common letter
    haveCommonLetters(word1, word2) {
        for (let char of word1) {
            if (word2.includes(char)) {
                return true;
            }
        }
        return false;
    }
    // Method to get the maximum product of the lengths of two words with no common letters
    maxProduct() {
        let max = 0;
        const n = this.words.length;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (!this.haveCommonLetters(this.words[i], this.words[j])) {
                    const product = this.words[i].length * this.words[j].length;
                    if (product > max) {
                        max = product;
                    }
                }
            }
        }
        return max;
    }
}
// Replace this array with any words you want to test
const words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
const wp = new WordProduct(words);
console.log(wp.maxProduct());
