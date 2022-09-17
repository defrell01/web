const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const sumNumbers = (number: number) => {
    let array: number[] = [...number.toString()].map(Number)
    let sum: number = 0
    
    for (var i in array) {
        sum += array[i]
    }

    return sum
}
readline.question(`Введите ваше число\n`, (number: number) => {
    
    console.log(`Сумма цифр числа ${number} = ${sumNumbers(number)}`);
    readline.close()
})