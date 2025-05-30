class RearrangeString 
{
    private input: string;

    constructor(input: string) 
    {
        this.input = input;
    }

    rearrange(): string 
    {
        // Step 1: Count frequency of each character
        const freqMap: { [key: string]: number } = {};
        for (let char of this.input) 
        {
            freqMap[char] = (freqMap[char] || 0) + 1;
        }

        let result: string = '';
        let prevChar: string = '';

        // Step 2: Repeat until the result is complete
        while (result.length < this.input.length) 
        {
            let found: boolean = false;

            for (let char in freqMap) 
            {
                if (freqMap[char] > 0 && char !== prevChar) 
                {
                    result += char;
                    freqMap[char]--;
                    prevChar = char;
                    found = true;
                    break;
                }
            }

            if (!found) 
            {
                return "";
            }
        }

        return result;
    }
}
const test1 = new RearrangeString("aab");
console.log(test1.rearrange());                                       // Output: "aba"

const test2 = new RearrangeString("aaab");
console.log(test2.rearrange());                                        // Output: ""
