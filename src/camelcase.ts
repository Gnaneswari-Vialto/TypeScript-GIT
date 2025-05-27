class CamelCaseMatcher 
{
  private queries: string[];
  private pattern: string;

  constructor(queries: string[], pattern: string) 
  {
    this.queries = queries;
    this.pattern = pattern;
  }
  // Method to check if a single query matches the pattern
  private isMatch(query: string, pattern: string): boolean 
  {
    let i = 0; // pointer for pattern
    for (let char of query) 
    {
      if (i < pattern.length && char === pattern[i]) 
     {
        i++; // move to next character in pattern
      } 
      else if (char >= 'A' && char <= 'Z') 
     {
        // extra uppercase letter not in pattern
        return false;
      }
    }
    return i === pattern.length;
  }
  public matchQueries(): boolean[] 
  {
    return this.queries.map(query => this.isMatch(query, this.pattern));
  }
}

// Example usage
const queries: string[] = ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"];
const pattern: string = "FB";

const matcher = new CamelCaseMatcher(queries, pattern);
const result: boolean[] = matcher.matchQueries();

console.log(result);
