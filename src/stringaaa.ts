class StringGenerator {
  private a: number;
  private b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  public generate(): string {
    let result: string = '';
    let a: number = this.a;
    let b: number = this.b;

    while (a > 0 || b > 0) {
      const n = result.length;

      // Check last two characters
      const lastTwo = result.slice(-2);

      if ((lastTwo === 'aa' && b > 0)) {
        result += 'b';
        b--;
      } else if ((lastTwo === 'bb' && a > 0)) {
        result += 'a';
        a--;
      } else if (a >= b && a > 0) {
        result += 'a';
        a--;
      } else if (b > 0) {
        result += 'b';
        b--;
      }
    }

    return result;
  }
}
const example4 = new StringGenerator(1, 2);
console.log(example4.generate());
