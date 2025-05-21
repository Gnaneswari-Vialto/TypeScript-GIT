class WordBreaker {
    private wordSet: Set<string>;

    constructor(wordDict: string[]) {
        this.wordSet = new Set(wordDict); // Use a Set for O(1) lookups
    }

    canSegment(s: string): boolean {
        const n: number = s.length;
        const dp: boolean[] = new Array(n + 1).fill(false);
        dp[0] = true; // Empty string can always be segmented

        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < i; j++) {
                if (dp[j] && this.wordSet.has(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    }
}

// Example usage:
const breaker1 = new WordBreaker(["leet", "code"]);
console.log(breaker1.canSegment("leetcode")); // true

const breaker2 = new WordBreaker(["apple", "pen"]);
console.log(breaker2.canSegment("applepenapple")); // true

const breaker3 = new WordBreaker(["cats", "dog", "sand", "and", "cat"]);
console.log(breaker3.canSegment("catsandog")); // false
