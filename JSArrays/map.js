var map = function (arr, fn) {

    const returnedArray = [];
    for (let  i = 0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i], i))
    }
    return returnedArray;
}

const arr = [1, 2, 3];

const newArr = map(arr, function (n, i) {
    return n + i;
})

for(let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
}
