const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const getWeekDay = (date) => {

    if (date.getDay() == 5) console.log(`Есть пятница 13`)
    else console.log(`Нет пятницы 13`)
}

const errorHandler = (array) => {
    for (var i in array) {
        if (Number.isNaN(Number(array[i]))) {
            console.log(`Неверно введенная дата`)
            process.exit()
        }
    }
}

readline.question(`Введите дату в формате MM.YYYY \n`, (str) => {
    let temp = str.trim().split(".")
    errorHandler(temp)
    let _ = new Date(`${temp[1]}-${temp[0]}-13`)
    console.log(_)
    getWeekDay(_)
    readline.close()
})
