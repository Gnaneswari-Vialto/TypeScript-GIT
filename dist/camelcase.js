"use strict";
class CamelCaseMatcher {
    constructor(queries, pattern) {
        this.queries = queries;
        this.pattern = pattern;
    }
    // Method to check if a single query matches the pattern
    isMatch(query, pattern) {
        let i = 0; // pointer for pattern
        for (let char of query) {
            if (i < pattern.length && char === pattern[i]) {
                i++; // move to next character in pattern
            }
            else if (char >= 'A' && char <= 'Z') {
                // extra uppercase letter not in pattern
                return false;
            }
        }
        return i === pattern.length;
    }
    matchQueries() {
        return this.queries.map(query => this.isMatch(query, this.pattern));
    }
}
// Example usage
const queries = ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"];
const pattern = "FB";
const matcher = new CamelCaseMatcher(queries, pattern);
const result = matcher.matchQueries();
console.log(result);
