"use strict";
class LongestRepeatedSubstring {
    getMaxRepeatedSubstringLength(text) {
        const freq = {};
        for (let ch of text) {
            freq[ch] = (freq[ch] || 0) + 1;
        }
        let max = 0;
        let i = 0;
        while (i < text.length) {
            let j = i;
            while (j < text.length && text[j] === text[i])
                j++;
            let len = j - i;
            if (freq[text[i]] > len)
                len++;
            max = Math.max(max, len);
            if (j + 1 < text.length && text[i] === text[j + 1]) {
                let k = j + 1;
                while (k < text.length && text[k] === text[i])
                    k++;
                let total = (k - (j + 1)) + (j - i);
                if (freq[text[i]] > total)
                    total++;
                max = Math.max(max, total);
            }
            i = j;
        }
        return max;
    }
}
const solver = new LongestRepeatedSubstring();
console.log(solver.getMaxRepeatedSubstringLength("ababa"));
console.log(solver.getMaxRepeatedSubstringLength("aaabaaa"));
console.log(solver.getMaxRepeatedSubstringLength("aaaaa"));
