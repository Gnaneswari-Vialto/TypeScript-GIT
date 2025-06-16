"use strict";
class ABCValidator {
    isValid(s) {
        const stack = [];
        for (const char of s) {
            stack.push(char);
            const n = stack.length;
            if (n >= 3 &&
                stack[n - 3] === 'a' &&
                stack[n - 2] === 'b' &&
                stack[n - 1] === 'c') {
                // Remove last 3 characters ("abc")
                stack.pop();
                stack.pop();
                stack.pop();
            }
        }
        return stack.length === 0;
    }
}
const validator = new ABCValidator();
console.log(validator.isValid("aabcbc"));              // true
console.log(validator.isValid("abcabcababcc"));        // true
console.log(validator.isValid("abccba"));              // false
