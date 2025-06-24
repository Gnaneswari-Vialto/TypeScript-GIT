class ParenthesesScorer 
{
  private parenthesesString: string;

  constructor(parenthesesString: string) 
  {
    this.parenthesesString = parenthesesString;
  }

  calculateScore(): number 
  {
    let totalScore = 0;
    let currentDepth = 0;

    for (let i = 0; i < this.parenthesesString.length; i++) 
    {
      if (this.parenthesesString[i] === '(') 
      {
        currentDepth++; 
      }
       else 
      {
        currentDepth--; 
        // if previous char was '(', we found a "()", so add score
        if (this.parenthesesString[i - 1] === '(') 
        {
          totalScore += 1 << currentDepth; 
        }
      }
    }

    return totalScore;
  }
}
const examples: string[] = ["()", "(())", "()()"];
for (const example of examples) {
  const scorer = new ParenthesesScorer(example);
  console.log(`Input: "${example}" → Score: ${scorer.calculateScore()}`);
}
