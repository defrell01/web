const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const errorHandler = (number) => {
    if (Number.isNaN(Number(number))) {
        console.log(`${number} - не число`);
        process.exit()
    }
};

class NumberInfo {
  constructor(number) {
    this.number = Math.abs(number);
  }

  isInteger() {
    if ((this.number ^ 0) === this.number) {
        return 0
    }
  }

  countNines() {
    return Math.floor(this.number / 9);
  }

  countThrees() {
    return Math.floor(this.number / 3);
  }

  countOnes() {
    return Math.floor(this.number / 1);
  }
}

readline.question(`Введите число \n`, (n) => {
    errorHandler(n);

    example = new NumberInfo(n);

    console.log(`Поместится:\n ${example.countOnes()} единиц \n ${example.countThrees()} троек \n ${example.countNines()} девяток \n `);
    readline.close()
});
