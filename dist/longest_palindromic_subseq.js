"use strict";
class LongestPalindrome {
    constructor(s) {
        this.s = s;
    }
    findLength() {
        const s = this.s;
        const n = s.length;
        const dp = [];
        // Initialize 2D dp array with 0s
        for (let i = 0; i < n; i++) {
            dp[i] = new Array(n).fill(0);
            dp[i][i] = 1; // Single characters are palindromes of length 1
        }
        // Filling the dp table
        for (let i = n - 1; i >= 0; i--) {
            for (let j = i + 1; j < n; j++) {
                if (s[i] === s[j]) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                }
                else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[0][n - 1]; // Length of longest palindromic subsequence
    }
}
const p1 = new LongestPalindrome("bbbab");
console.log(p1.findLength()); // Output: 4
const p2 = new LongestPalindrome("cbbd");
console.log(p2.findLength()); // Output: 2
