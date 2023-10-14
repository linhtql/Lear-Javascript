var filer = function (arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn (arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr
}
const arr = [-2,-1,0,1,2]
const newArr = filer(arr, function (n) {
    return n + 1;
})

for(let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
}