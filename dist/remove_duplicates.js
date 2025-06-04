"use strict";
class DuplicateNumber {
    remove(str2) {
        let result = "";
        let letters = str2.split('');
        for (let i = 0; i < 26; i++) {
            let ch = String.fromCharCode(97 + i);
            let found = false;
            for (let j = 0; j < letters.length; j++) {
                if (letters[j] === ch) {
                    found = true;
                    break;
                }
            }
            if (found) {
                result += ch;
            }
        }
        return result;
    }
}
const inputString = "abbab";
const obj = new DuplicateNumber();
const outcome = obj.remove(inputString);
console.log("Output:", outcome);
