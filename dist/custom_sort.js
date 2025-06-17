"use strict";
class CustomSorter {
    customSortString(order, s) {
        // Create a frequency map of characters in s
        const freqMap = new Map();
        for (const char of s) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }
        // Building the result string based on the order
        let result = '';
        for (const char of order) {
            if (freqMap.has(char)) {
                result += char.repeat(freqMap.get(char)); // Non-null assertion since we checked has()
                freqMap.delete(char);
            }
        }
        // Appending the remaining characters not in order
        for (const [char, count] of freqMap.entries()) {
            result += char.repeat(count);
        }
        return result;
    }
}
const sorter = new CustomSorter();
console.log(sorter.customSortString("cba", "abcd")); // Output: "cbad" or similar
console.log(sorter.customSortString("bcafg", "abcd")); // Output: "bcad" or similar
