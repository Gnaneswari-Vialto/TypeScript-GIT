class StringRepeater 
{
  static minRepeats(a: string, b: string): number 
  {
    let repeated: string = '';
    let count: number = 0;

    // Repeat string `a` until its length is at least the length of `b`
    while (repeated.length < b.length) 
    {
      repeated += a;
      count++;
    }

    // Check if `b` is now a substring
    if (repeated.includes(b)) 
    {
      return count;
    }

    // Try one more repetition in case b spans the boundary
    repeated += a;
    count++;

    if (repeated.includes(b)) 
    {
      return count;
    }

    return -1; // Not possible
  }
}

// Example usage:
const a: string = "abcd";
const b: string = "cdabcdab";
const output: number = StringRepeater.minRepeats(a, b);
console.log(output);                                             // Output: 3
