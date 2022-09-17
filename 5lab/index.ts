const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let firstCheck = (a: number, b: number) => {
    if ((Math.sign(b) == -1 && Math.sign(a) == 1) || (b == 0) || (Math.sign(a) == -1 && Math.sign(b) == -1) && (Math.abs(a) < Math.abs(b)) || (a == 0 && Math.sign(b) == -1) ){
        console.log(`inf`)    
    }

    else if ((Math.sign(a) == -1 && Math.sign(b) == 1) || (a == 0 && b != 0) || (a < b && a != 0)){
        console.log(`0`)    
    }

    else return true
}

let divTimes = (a: number, b: number) => {

    if ((a / 2) > b) {
        return (a / 2)
    }
    else {
        return (`no`)
    }
};

readline.question(`Введите числа в формате "a b"\n`, (lng: string) => {

    let numbers: any[] = lng.trim().split(" ")
    
    if (numbers.length != 2){
        console.log(`Введите 2 числа`)
        process.exit()
    }

    let response: any
    response = Number(numbers[0])
    let counter: number = 0
    
    if (Number.isNaN(Number(numbers[0])) || Number.isNaN(Number(numbers[1]))) {
        console.log(`Введены неверные цифры`)
        process.exit()
    }
    if (!firstCheck(response, Number(numbers[1]))) process.exit()
    
    while (response != `no`) {
        response = divTimes(response, Number(numbers[1]))
        counter++
    }

    console.log(`Можно поделить ${counter} раз`)
    readline.close()
});
