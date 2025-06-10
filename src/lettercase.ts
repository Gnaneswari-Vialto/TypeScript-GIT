class LetterCasePermutation 
{
  private s: string;
  private result: string[];

  constructor(s: string) 
  {
    this.s = s;
    this.result = [];
  }

  public generatePermutations(): string[] 
  {
    this.backtrack(0, '');
    return this.result;
  }

  private backtrack(index: number, path: string): void 
  {
    if (index === this.s.length) 
    {
      this.result.push(path);
      return;
    }

    const char = this.s[index];

    if (/[a-zA-Z]/.test(char)) 
    {
      // Add lowercase version
      this.backtrack(index + 1, path + char.toLowerCase());
      // Add uppercase version
      this.backtrack(index + 1, path + char.toUpperCase());
    } else {
      // Just add the digit or non-letter
      this.backtrack(index + 1, path + char);
    }
  }
}
const input = "a1b2";
const permutations = new LetterCasePermutation(input).generatePermutations();
console.log(permutations);
