"use strict";
class PatternMatch {
    wordPattern(pattern, str) {
        const chars = pattern.split('');
        const words = str.split(' ');
        if (chars.length !== words.length) {
            return false;
        }
        const patternMap = {};
        const wordMap = {};
        const keys = [];
        for (let i = 0; i < chars.length; i++) {
            const ch = chars[i];
            const word = words[i];
            if ((patternMap[ch] && patternMap[ch] !== word) ||
                (wordMap[word] && wordMap[word] !== ch)) {
                return false;
            }
            if (!patternMap[ch]) {
                patternMap[ch] = word;
                keys.push(ch);
            }
            wordMap[word] = ch;
        }
        console.log("Pattern to word mapping:");
        for (const ch of keys) {
            console.log(`${ch} → ${patternMap[ch]}`);
        }
        return true;
    }
}
const patterns = "abba";
const str1 = "dog cat cat dog";
const matcher1 = new PatternMatch();
const result1 = matcher1.wordPattern(patterns, str1);
console.log("Result:", result1);
