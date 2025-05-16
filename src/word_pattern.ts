class WordTransformation 
{
  private word1: string;
  private word2: string;

  constructor(word1: string, word2: string) 
  {
    this.word1 = word1;
    this.word2 = word2;
  }

  // Calculate how many characters need to be deleted to make both words the same.
  minDeletionsToEqual(): number 
  {
    let common = 0; // Count how many characters are shared between the two words.
    let used: boolean[] = Array(this.word2.length).fill(false); // Track used letters in word2

    for (let i = 0; i < this.word1.length; i++) 
        {
      for (let j = 0; j < this.word2.length; j++) 
        {
        if (this.word1[i] === this.word2[j] && !used[j]) 
        {
          common++;
          used[j] = true;
          break;
        }
      }
    }

    return this.word1.length + this.word2.length - 2 * common;
  }
}
const transformation = new WordTransformation("sea", "eat");
console.log(transformation.minDeletionsToEqual()); 