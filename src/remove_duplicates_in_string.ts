class DuplicateNumber {
  remove(str2: string): string {
    let result: string = "";
    let letters: string[] = str2.split('');

    for (let i = 0; i < 26; i++) {
      let ch: string = String.fromCharCode(97 + i);
      let found: boolean = false;

      for (let j = 0; j < letters.length; j++) {
        if (letters[j] === ch) {
          found = true;
          break;
        }
      }

      if (found) {
        result += ch;
      }
    }

    return result;
  }
}

// Example usage:
const inputString: string = "abbab";
const obj = new DuplicateNumber();
const outcome: string = obj.remove(inputString);
console.log("Output:", outcome);  