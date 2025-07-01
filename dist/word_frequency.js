"use strict";
class WordFrequency {
    constructor(words, k) {
        this.words = words;
        this.k = k;
    }
    topKFrequent() {
        const wordCount = {};
        this.words.forEach(word => {
            wordCount[word] = (wordCount[word] || 0) + 1;
        });
        const sortedWords = Object.keys(wordCount).sort((a, b) => {
            if (wordCount[b] !== wordCount[a]) {
                return wordCount[b] - wordCount[a];
            }
            return a.localeCompare(b);
        });
        return sortedWords.slice(0, this.k);
    }
}
const words12 = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"];
const k = 4;
const wf = new WordFrequency(words12, k);
console.log(wf.topKFrequent());
