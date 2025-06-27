class HappyStringGenerator {
  private counts: { char: string; count: number }[];
  constructor(a: number, b: number, c: number) {
    this.counts = [
      { char: 'a', count: a },
      { char: 'b', count: b },
      { char: 'c', count: c }
    ];
  }
  generate(): string {
    let result: string = '';
    while (true) {
      this.counts.sort((x, y) => y.count - x.count);
      let added: boolean = false;
      for (let i = 0; i < 3; i++) {
        const { char, count } = this.counts[i];
        if (count === 0) continue;
        const len = result.length;
        if (len >= 2 && result[len - 1] === char && result[len - 2] === char) {
          continue;
        }
        result += char;
        this.counts[i].count--;
        added = true;
        break;
      }

      if (!added) break; 
    }
    return result;
  }
}
const generator = new HappyStringGenerator(1, 1, 7);
console.log(generator.generate()); 