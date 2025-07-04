class PhoneLetterCombinations 
{
  private phoneMap: { [key: string]: string };

  constructor() 
  {
    this.phoneMap = 
    {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz'
    };
  }

  getCombinations(digits: string): string[] 
  {
    if (digits.length === 0) 
    {
      return [];
    }

    let result: string[] = ['']; // Start with an empty string

    for (let digit of digits) 
    {
      const letters = this.phoneMap[digit];
      const temp: string[] = [];

      if (!letters) continue; // Skip invalid digits

      for (let letter of letters) 
      {
        for (let combination of result) 
        {
          temp.push(combination + letter);
        }
      }

      result = temp;
    }

    return result;
  }
}
const plc = new PhoneLetterCombinations();
console.log(plc.getCombinations("23"));
