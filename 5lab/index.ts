const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let divTimes = (a: number, b: number) => {

    if ((a / 2) > b) {
        return (a / b)
    }
    else {
        return (`no`)
    }

}

readline.question(`Введите числа в формате "a b"\n`, (lng: string) => {

    let numbers: any[] = lng.trim().split(" ")
    
    if (numbers.length != 2){
        console.log(`Введите 2 числа`)
        process.exit()
    }

    let response: any
    response = Number(numbers[0])
    let counter: number = 0
    while (response != `no`) {
        response = divTimes(response, Number(numbers[1]))
        counter++
    }

    console.log(`Можно поделить ${counter} раз`)
    readline.close()
});
