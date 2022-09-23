const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const getWeekDay = (date) => {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

    return days[date.getDay()]
}

readline.question(`Введите дату в формате MM.YYYY \n`, (str) => {
    let fetched = str.trim().split(".")
    let date = new Date()
    console.log(`${getWeekDay(date)}`)
    readline.close()
})
