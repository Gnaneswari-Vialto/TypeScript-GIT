class WordFrequency 
{
  private words: string[];
  private k: number;

  constructor(words: string[], k: number) 
  {
    this.words = words;
    this.k = k;
  }
  topKFrequent(): string[] 
  {
    const wordCount: Record<string, number> = {}; 
    this.words.forEach(word => 
    {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
    const sortedWords = Object.keys(wordCount).sort((a, b) => 
    {
      if (wordCount[b] !== wordCount[a]) 
      {
        return wordCount[b] - wordCount[a]; 
      }
      return a.localeCompare(b); 
     });
    return sortedWords.slice(0, this.k);
  }
}
const words12 = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"];
const k = 4;
const wf = new WordFrequency(words12, k);
console.log(wf.topKFrequent());
