class ParenthesesValidator 
{
    private s: string;
    constructor(s: string) 
    {
        this.s = s;
    }
    public minInsertionsToMakeValid(): number 
    {
        let openNeeded: number = 0;  
        let closeNeeded: number = 0; 
        for (const char of this.s) 
        {
            if (char === '(') 
            {
                closeNeeded++; 
            } 
            else if (char === ')') 
            {
                if (closeNeeded > 0) 
                {
                    closeNeeded--; 
                } 
                 else 
                {
                    openNeeded++; 
                }
            }
        }

        return openNeeded + closeNeeded;
    }
}
const example = new ParenthesesValidator("())");
console.log(example.minInsertionsToMakeValid()); 
