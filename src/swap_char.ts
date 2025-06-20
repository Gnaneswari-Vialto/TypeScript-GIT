class LongestRepeatedSubstring 
{
  getMaxRepeatedSubstringLength(text: string): number 
  {
    const freq: { [key: string]: number } = {};
    for (let ch of text) 
    {
      freq[ch] = (freq[ch] || 0) + 1;
    }
    let max: number = 0;
    let i: number = 0;
    while (i < text.length) 
    {
      let j: number = i;
      while (j < text.length && text[j] === text[i]) j++;
      let len: number = j - i;
      if (freq[text[i]] > len) len++;
      max = Math.max(max, len);

      if (j + 1 < text.length && text[i] === text[j + 1]) 
      {
        let k: number = j + 1;
        while (k < text.length && text[k] === text[i]) k++;
        let total: number = (k - (j + 1)) + (j - i);
        if (freq[text[i]] > total) total++;
        max = Math.max(max, total);
      }
      i = j;
    }

    return max;
  }
}
const solver = new LongestRepeatedSubstring();
console.log(solver.getMaxRepeatedSubstringLength("ababa"));    
console.log(solver.getMaxRepeatedSubstringLength("aaabaaa"));  
console.log(solver.getMaxRepeatedSubstringLength("aaaaa"));    
