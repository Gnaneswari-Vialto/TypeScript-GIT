class SubsequenceChecker 
{
  private s: string;
  private words: string[];

  constructor(s: string, words: string[]) 
  {
    this.s = s;
    this.words = words;
  }
  // Helper method to check if a word is a subsequence of s
  private isSubsequence(word: string): boolean 
  {
    let i: number = 0;                                     // pointer for word
    let j: number = 0;                                     // pointer for this.s
    while (i < word.length && j < this.s.length) 
    {
      if (word[i] === this.s[j]) 
      {
        i++;
      }
      j++;
    }
    return i === word.length;
  }
  public countSubsequences(): number 
  {
    let count: number = 0;
    for (const word of this.words) 
    {
      if (this.isSubsequence(word)) 
      {
        count++;
      }
    }
    return count;
  }
}
const s: string = "abcde";
const words1: string[] = ["a", "bb", "acd", "ace"];

const checker = new SubsequenceChecker(s, words1);
console.log(checker.countSubsequences());                                     // Output: 3