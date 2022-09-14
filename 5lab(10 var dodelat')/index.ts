const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let getDividers = (S: number) => {
    let dividers: number[] = []
    for (var i = 2; i <= Math.sqrt(S); i++) {
        if (S % i == 0) dividers.push(i)
    }
    return dividers
}

let getFirsts = (S: number, divs: number[]) => {
    let temp: number[] = []
    let firsts: number[] = []

    for (var i in divs){
        if (2*S % divs[i] == 0){
            temp.push(2*S % divs[i])
        }    
    }

    for (var i in firsts)
}

let isAnOrder = (S: number) => {
    // S = n * (2 * a_1 + (n-1))/2

    let dividers: number[] = getDividers(S)


}

readline.question(`Введите длины сторон треугольника через проблем\n`, (lng: string) => {

});
