const { formatDiagnostics } = require("typescript");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const errorHandler = (array) => {
    for (var i in array) {
      if (Number.isNaN(Number(array[i])) && Math.sign(array[i]) > 0) {
        console.log(`Неверно введенные числа`);
        process.exit();
      }
    }

  };

const lngSort = (array) => {
    let temp = [];
    let indexes = [];
    array.sort(function (a, b) {
        return String(a).length - String(b).length;
    });
    // return array.sort(function (a, b){
    //     return a - b;
    // })
    for (var i = 1; i < array.length-1; i++) {
        if (String(array[i]).length != String(array[i+1]).length) {
            indexes.push(i)
        }
    };
    console.log(array);
    console.log(indexes);
    let res = []
    let first = array.slice(0, indexes[0]+1);
    first.sort(function(a, b){
        return a-b;
    })
    console.log(`First ${first}`)
    let last = array.slice(indexes[indexes.length-1]+1);          
    last.sort(function(a, b){
        return a-b;
    })
    // console.log(indexes[indexes.length])
    console.log(`Last ${last}`)
    let tempArr = [];
    let _temp = [];
    for (var i = indexes[0]+1; i < indexes[indexes.length-1]+1; i++) {
        tempArr.push(array[i])
        tempArr.sort(function(a, b){
            return a-b;
        })
        
        // _temp = [..._temp, ...tempArr];
        // console.log(_temp)
    }
    res = [...first, ...tempArr]
    res = [...res, ...last];

    return res;


};

readline.question(`Введите строку чисел через пробел \n`, (string) => {
    let array = string.trim().split(" ");
    errorHandler(array);

    console.log(`${lngSort(array)}`);
    readline.close();
})