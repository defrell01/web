const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const transformEn = (string : string) => {
    return string.replace(/[A-Z]/g, (c) => {return '_'+c.toLowerCase()})
}

readline.question(`Введите строку слов \n`, (string : string) => {
    console.log(transformEn(string))
    readline.close()
})