// JavaScript program to Delete Operation for Two Strings
// Input : word1 = "sea", word2 = "eat"
// Output : 2
// Explanation:  You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
class WordTransformation {
  private word1: string;
  private word2: string;

  constructor(word1: string, word2: string) {
    this.word1 = word1;
    this.word2 = word2;
  }

  // How many characters need to be deleted to make both words the same
  public minDeletionsToEqual(): number {
    let common: number = 0; // count how many characters are shared between the two words
    const used: boolean[] = Array(this.word2.length).fill(false); // track matched letters

    for (let i = 0; i < this.word1.length; i++) {
      for (let j = 0; j < this.word2.length; j++) {
        if (this.word1[i] === this.word2[j] && !used[j]) {
          common++;
          used[j] = true;
          break;
        }
      }
    }

    return this.word1.length + this.word2.length - 2 * common;
  }
}

// Example usage:
const transformation = new WordTransformation("sea", "eat");
console.log(transformation.minDeletionsToEqual());