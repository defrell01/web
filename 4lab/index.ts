const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const check = (array: any[]) => {
    
    if (array[0] == array[1] && array[0] == array[2] && array[1] == array[2]) {
        console.log(`Равносторонний`)
    }
    else if (array[0] == array[1] || array[0] == array[2] || array[1] == array[2]) {
        console.log(`Равнобедренный`)
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
