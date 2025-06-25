"use strict";
class StringGenerator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    generate() {
        let result = '';
        let a = this.a;
        let b = this.b;
        while (a > 0 || b > 0) {
            const n = result.length;
            // Check last two characters
            const lastTwo = result.slice(-2);
            if ((lastTwo === 'aa' && b > 0)) {
                result += 'b';
                b--;
            }
            else if ((lastTwo === 'bb' && a > 0)) {
                result += 'a';
                a--;
            }
            else if (a >= b && a > 0) {
                result += 'a';
                a--;
            }
            else if (b > 0) {
                result += 'b';
                b--;
            }
        }
        return result;
    }
}
// ✅ Example usage:
const example4 = new StringGenerator(1, 2);
console.log(example4.generate());
