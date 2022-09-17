const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const sumNumbers = (number: number) => {
    if (number < 0) number = Math.abs(number)
    
    let array: number[] = [...number.toString()].map(Number)
    let sum: number = 0
    let counter : number = 0
    for (var i in array) {
        if (!Number.isNaN(array[i])) {
            sum += array[i]
            counter ++
        }
    }

    return sum / counter
}
readline.question(`Введите ваше число\n`, (number: number) => {
    
    console.log(`Среднее значение цифр числа ${number} = ${sumNumbers(number)}`);
    readline.close()
})