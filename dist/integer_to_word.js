"use strict";
class NumberToWords {
    constructor(num) {
        this.num = num;
    }
    convert() {
        const below20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
        const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        const thousand = ["", "Thousand", "Million", "Billion"];
        if (this.num === 0)
            return "Zero";
        let result = '';
        if (this.num >= 1000) {
            result += below20[Math.floor(this.num / 1000)] + " Thousand ";
            this.num %= 1000;
        }
        if (this.num >= 100) {
            result += below20[Math.floor(this.num / 100)] + " Hundred ";
            this.num %= 100;
        }
        if (this.num >= 20) {
            result += tens[Math.floor(this.num / 10)] + " ";
            this.num %= 10;
        }
        if (this.num > 0 && this.num < 20) {
            result += below20[this.num] + " ";
        }
        return result.trim();
    }
}
// Example usage
let num = 19999;
let numberToWords = new NumberToWords(num);
console.log(numberToWords.convert());
