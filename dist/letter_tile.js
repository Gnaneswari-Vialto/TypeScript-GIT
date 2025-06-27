"use strict";
class TileSequences {
    constructor(tiles) {
        this.tiles = tiles;
    }
    numTilePossibilities() {
        const counter = {};
        for (const ch of this.tiles) {
            counter[ch] = (counter[ch] || 0) + 1;
        }
        return this.dfs(counter);
    }
    dfs(counter) {
        let sum = 0;
        for (const ch in counter) {
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
