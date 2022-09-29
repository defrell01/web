const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const repeatStr = (txt, n, counter = 0, res = "") => {
  if (counter <= n - 1) {
    res += txt;
    res += " ";
    counter++;
    return repeatStr(txt, n, counter, res);
  } else return res;
};

readline.question(`Введите строку \n`, (txt) => {
  readline.question(`Введите сколько раз нужно повторить строку \n`, (n) => {
    if (Number.isInteger(Number(n)) && Math.sign(Number(n)) == 1)
      console.log(`${repeatStr(txt, n)}`);
    else
      console.log(`Введите корректное число, ${n} - некорректно либо не число`);
    readline.close();
  });
});
