class TileSequences 
{
    private tiles: string;
    constructor(tiles: string) 
    {
        this.tiles = tiles;
    }
    numTilePossibilities(): number 
    {
        const counter: Record<string, number> = {};
        for (const ch of this.tiles) 
        {
            counter[ch] = (counter[ch] || 0) + 1;
        }
        return this.dfs(counter);
    }
    private dfs(counter: Record<string, number>): number 
    {
        let sum = 0;
        for (const ch in counter) 
        {
            if (counter[ch] === 0) 
                continue;
            sum += 1; 
            counter[ch]--;
            sum += this.dfs(counter);
            counter[ch]++; 
        }
        return sum;
    }
}
const example6 = new TileSequences("AAB");
console.log(example6.numTilePossibilities()); 
