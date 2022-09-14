const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const check = (array: any[]) => {
    let counter: number = 0

    // // test
    // for (var i: number = 0; i < array.length; i++) {
    //     console.log(`${Number(array[i])}`)
    // }
    // //test
    
    if (array[0] == array[2]) counter++;

    for (var i: number = 0; i < array.length-1; i++) {
        if (array[i] == array[i+1]){
            counter++;
        }
    }

    if (counter == 1) {
        console.log(`Равнобедренный`)
    }
    else if (counter == 2) {
        console.log(`Равносторонний`)
    }
    else {
        console.log(`Разносторонний`)
    }
};

let lengthArr: string[] = []
let temp: any

readline.question(`Введите длины сторон треугольника через проблем\n`, (lng: string) => {
    lengthArr = lng.trim().split(" ")

    if (lengthArr.length != 3){
        console.error(`Не треугольник`)
        readline.close()
        process.exit()
    }

    for (var i = 0; i < 3; i++){
        if (Number.isNaN(Number(lengthArr[i])) == true){
            console.error(`${lengthArr[i]} - не число`)
            readline.close()
            process.exit()
        }
    }

    check(lengthArr);
    readline.close()
});
