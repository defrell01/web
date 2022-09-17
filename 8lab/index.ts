const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const transform = (number : string) => {
    
    for (var i = 0; i < number.length; i++) {
        if (Number.isNaN(Number(number[i]))){
            console.log(`Введен неверный формат карты`)
            process.exit()
        }
    }

    var vis = number.slice(-4)
    var countNum = ''

    for (var i = (number.length)-4; i > 0; i--) {
        countNum += '*';
    }

    return(countNum+vis)
}


readline.question(`Введите номер карты \n`, (number: string) => {
    
    if (number.length != 16) {
        console.log(`Длина номеры карты должен быть равен 16`);
        process.exit()
    }

    console.log(`${transform(number)}`)
    readline.close()
})