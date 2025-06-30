class BalancedSubstringFinder {
  private s: string;

  constructor(s: string) {
    this.s = s;
  }

  public getLongestBalancedSubstringLength(): number {
    let maxLength: number = 0;
    let prevCount: number = 0;
    let currCount: number = 1;

    for (let i = 1; i < this.s.length; i++) {
      if (this.s[i] === this.s[i - 1]) {
        currCount++;
      } else {
        maxLength = Math.max(maxLength, Math.min(prevCount, currCount) * 2);
        prevCount = currCount;
        currCount = 1;
      }
    }

    maxLength = Math.max(maxLength, Math.min(prevCount, currCount) * 2);
    return maxLength;
  }
}
const input1 = new BalancedSubstringFinder("01000111");
console.log(input1.getLongestBalancedSubstringLength()); 
