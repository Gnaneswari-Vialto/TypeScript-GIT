class PatternMatch 
{
  wordPattern(pattern: string, str: string): boolean 
  {
    const chars: string[] = pattern.split('');
    const words: string[] = str.split(' ');

    if (chars.length !== words.length) 
    {
      return false;
    }

    const patternMap: { [char: string]: string } = {};
    const wordMap: { [word: string]: string } = {};
    const keys: string[] = [];

    for (let i = 0; i < chars.length; i++) 
    {
      const ch = chars[i];
      const word = words[i];

      if ((patternMap[ch] && patternMap[ch] !== word) ||
          (wordMap[word] && wordMap[word] !== ch)) 
      {
        return false;
      }

      if (!patternMap[ch]) 
      {
        patternMap[ch] = word;
        keys.push(ch);
      }

      wordMap[word] = ch;
    }

    console.log("Pattern to word mapping:");
    for (const ch of keys) {
      console.log(`${ch} → ${patternMap[ch]}`);
    }
    return true;
  }
}
const patterns: string = "abba";
const str1: string = "dog cat cat dog";

const matcher1 = new PatternMatch();
const result1: boolean = matcher1.wordPattern(patterns, str1);

console.log("Result:", result1);
