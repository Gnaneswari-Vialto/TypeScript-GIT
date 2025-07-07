class SimplePrinter 
{
  s: string;

  constructor(s: string) 
  {
    this.s = s;
  }
  countUniqueTurns(): number 
  {
    const seen: Set<string> = new Set();
    let prevChar: string | null = null;

    for (let i = 0; i < this.s.length; i++) 
    {
      const currentChar: string = this.s[i];
      if (currentChar !== prevChar) 
      {
        seen.add(currentChar);
        prevChar = currentChar;
      }
    }
    return seen.size;
  }
}
const input2: string = "aaabbb";
const input3: string = "aba";

const printer1 = new SimplePrinter(input2);
const printer2 = new SimplePrinter(input3);

console.log( printer1.countUniqueTurns()); 
console.log( printer2.countUniqueTurns()); 
