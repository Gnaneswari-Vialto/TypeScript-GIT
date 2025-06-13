"use strict";
function getGroups(str) {
    const groups = [];
    let i = 0;
    while (i < str.length) {
        const char = str[i];
        let count = 0;
        while (i < str.length && str[i] === char) {
            i++;
            count++;
        }
        groups.push([char, count]);
    }
    return groups;
}
function isStretchy(s, word) {
    const sGroups = getGroups(s);
    const wGroups = getGroups(word);
    if (sGroups.length !== wGroups.length)
        return false;
    for (let i = 0; i < sGroups.length; i++) {
        const [sc, sn] = sGroups[i];
        const [wc, wn] = wGroups[i];
        if (sc !== wc)
            return false;
        if (sn < 3 && sn !== wn)
            return false;
        if (sn >= 3 && wn > sn)
            return false;
    }
    return true;
}
function expressiveWords(s, words) {
    let count = 0;
    for (const word of words) {
        if (isStretchy(s, word))
            count++;
    }
    return count;
}
// Example usage
const str = "heeellooo";
const word1 = ["hello", "hi", "helo"];
console.log(expressiveWords(str, word1)); // Output: 1
