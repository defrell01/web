const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const repeatStr = (txt: string, n: number) => {
    
    var counter : number;

    if (counter < n) {
        txt += txt
        repeatStr(txt, n)
    }

    else return txt
}

readline.question(`Введите строку \n`, (txt: string) => {
   
    readline.question(`Введите сколько раз нужно повторить строку \n`, (n: number) => {
        console.log(`${repeatStr(txt, n)}`)
        readline.close()
    })

})

