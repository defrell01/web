const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const yearToCentury = (year: number) => {
    if (Math.sign(year) < 0 || Number.isNaN(Number(year))) {
        console.error(`Введен неверный год`);
        process.exit()
    }
    else {
        return Math.trunc((year - 1) / 100 + 1)
    }
}

readline.question(`Введите год \n`, (year: number) => {

    console.log(`${year} год соотвествует ${yearToCentury(year)} веку`)
    readline.close()
})