// Callback? -> là hàm (function) được truyền qua đối số khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)

function myFunction(param)
{
    if (typeof param === 'function')
    {
        param('Hoc lap trinh')
    }
}

function myCallback(value) {
    console.log('Value: ', value);
}

myFunction(myCallback)

// Callback - Phan 2
var courses =  [
    'Javascript',
    'PHP',
    'Java'
];

var htmls = courses.map(course => `<h2>${course}</h2>`)

console.log(htmls.join(''));

Array.prototype.map2 = (callback) => {
    var output = [];
    var arrayLength = this.length;

    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i)
        output.push(result);
    }
    return output;
}

var htmls = courses.map2(course => `<h2>${course}</h2>`)



// forEach, find, filter, some, every, reduce

// foreach

Array.prototype.forEach2 = (callback) => {

}


var courses = [
    'Javascript',
    'PHP'
];

courses.length = 10;

// ---> ['Javascript', 'PHP', empty x 8];

for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
// ->> in ra 10 phan tu

for (var index in courses) {
    console.log(courses[index]);
}
// --> khong duyet qua cac phan tu null, duyet them cac prototype tu tao

var courses = new Array(10); // --> do dai: [10 x empty]
var courses = new Array(10, 2); // [10, 2]