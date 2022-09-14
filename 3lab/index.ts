const rl = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout
});

let shuffle = (array : string[]) => {
    array.sort(() => Math.random() - 0.5)
}

let  change = (letter: string, strArr: string[]) => {
    let words: string[]
    words = []
    
    for (var i in strArr){
        if (strArr[i].startsWith(letter) || strArr[i].startsWith(letter.toUpperCase()) || strArr[i].startsWith(letter.toLowerCase())){
            words.push(strArr[i])
        }
    }

    shuffle(words)

    for (var i in strArr){
        if (strArr[i].startsWith(letter)){
            let index = Math.floor(Math.random() * words.length)
            strArr[i] = words[index]
        }
    }

    console.log(words)

    return (strArr)
}

rl.question('Введите вашу строку \n', (line: string) => {
    let strArray : string[]
    let changed : string[]
    strArray = line.trim().split(" ")

    console.log(`Testing: ${strArray}`)


    rl.question('Введите букву \n', (letter: string) => {
        changed = change(letter, strArray)
        console.log(changed.toString().split(',').join(' '))
        rl.close()
    })

})

