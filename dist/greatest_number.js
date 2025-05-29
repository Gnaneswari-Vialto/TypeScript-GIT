"use strict";
class NextGreaterNumber {
    constructor(n) {
        this.n = n;
    }
    findNext() {
        const digits = this.n.toString().split('').map(Number);
        // Step 1: Find the first decreasing digit from the end
        let i = digits.length - 2;
        while (i >= 0 && digits[i] >= digits[i + 1]) {
            i--;
        }
        if (i < 0)
            return -1; // No greater number possible
        // Step 2: Find the next bigger digit on the right of i
        let j = digits.length - 1;
        while (digits[j] <= digits[i]) {
            j--;
        }
        // Step 3: Swap
        [digits[i], digits[j]] = [digits[j], digits[i]];
        // Step 4: Reverse the right part
        let left = i + 1;
        let right = digits.length - 1;
        while (left < right) {
            [digits[left], digits[right]] = [digits[right], digits[left]];
            left++;
            right--;
        }
        const result = parseInt(digits.join(''), 10);
        // Step 5: Check 32-bit integer constraint
        return result <= 0x7FFFFFFF ? result : -1;
    }
}
// Example usage
const example1 = new NextGreaterNumber(12);
console.log(example1.findNext()); // Output: 21
const example2 = new NextGreaterNumber(21);
console.log(example2.findNext()); // Output: -1
