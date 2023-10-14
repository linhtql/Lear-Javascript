// 1. Let, const
// 2. Template Literals
// 3. Multi-line String
// 4. Arrow function
// 5. Classes
// 6. Default parameter values
// 7. Destructuring
// 8. Rest parameters
// 9 . Spread
// 10. Enhanced object literals
// 11. Tagged template literal
// 12. Modules
// 13. Optional chaining (?.)

// 1. Var/ Let , Const: Scope, Hosting
// 2. Const/ Var, Let: Assignment

//Code block: if else, loop, {}

// if (true) {
//     var course = 'Javascript basic!';
// }

// tương đương như bên trên
{
    var course = 'Javascript basic!'
}

console.log(course);

// let, const: bên ngoài block thì sẽ không truy cập được
// var: bên ngoài vẫn truy cập được

// Trong cùng block, ưu tiên gần nhất

// Hosting: var hỗ trợ, còn const/ let thì không
// khi mình khai báo var a = 1;
// trình thông dịch sẽ làm như thế này

// var a;
// a = 1;

// ---> cho nên mình làm như thế này ok

// a = 1;
// var a;

// const không thể gán lại, còn var, let thì có


// ------Arrow Function------

// Declare Function
function logger(log) {
    console.log(log);
}

// Expression Function
const logger = function(log) {
    console.log(log);
}

// Arrow Function
const logger = (log) => {
    console.log(log);
}

const sum = (a, b) => a + b;

logger('Message...')

// điểm khác nhau giữa arrow function và function thường là không có context (this), và
// không thể tạo constructor function


// Template Literal
const courseName = 'Javascript'
const description = 'Course name ' + courseName;
const description1 = `Course name ${courseName}`
// muốn thêm kí tự đặc biệt: --> \


// Classes: là cách viết khác của constructor function

// function Course(name, price) {
//     this.name = name;
//     this.price = price;
// }

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    } 
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('Javascript', 1200);

// Enhanced object literals
// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

var name = 'Javascript';
var price = 1000;

// var course = {
//     name: name,
//     price: price  
// }

// --->
var course = {
    name,
    price
}

// 2
var course = {
    name,
    price,
    // getName:  function() {
    //      return name; 
    //     }
    getName() {
        return name;
    }
}

// 3
var fieldName = 'name';
var fieldPrice = 'price';

const course = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
}

// Default parameter values

// function logger(log) {
//     if (typeof log === 'undefined') {
//         log = 'Giá trị mặc định'
//     }
//     console.log(log);
// }

function logger(log, isAlert = false) {
    if (isAlert) {
        alert(log);
    }
    console.log(log);
}

// những thuộc tính mặc định thì không nhất thiết phải để default 

// ----- Destructuring: phân rã
var array = ['Javascript', 'PHP', 'Java',];

// var a = array[0];
// var b = array[1];
// var c = array[2];

var [a, b, c] = array;
var [a, , c] = array;

console.log(a, b, c);

var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
};

var {name, price, image} = course;

var {name, ...rest} = course

// 1 thủ thuật để xóa 1 key trong object, không dùng delete var {name, ...newObject} = course

var {name, children: {name}} = course
console.log(name); // bị trùng, thằng cha sẽ bị ghi đè
// solution: đổi tên
var {name: parentname, children: {name}} = course

// ------ Rest parameters: lấy ra những thằng còn lại, trừ những thằng đã destructuring
var [a, ...rest] = array;

console.log(a);
console.log(rest); // 'PHP', 'Java'

// cách ghi 1 giá trị default value, khi mà nó không tồn tại
var {name, description3 = 'hihihih'} = course;

function logger(...params) {
    console.log(params); // Array
}

// khi dùng toán tử ... với destructuring
// còn lại là spread
// Spread Operator (...) -> hiểu là nó sẽ bỏ đi { hoặc [ của object và array 


var array1 = ['Javascript', 'Java', 'Ruby'];
var array2 = ['ReactJS', 'Dart'];

var array3 = [...array1, ...array2];

var object1 = {
    name: 'Javascript'
};

var object2 = {
    price: 1000
};

var object3 = {
    ...object1,
    ...object2
}

var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: 'other',
    //
    //
    //
};

var exerciseConfig = {
    ...defaultConfig,
    // sẽ bị ghi đè
    api: 'https://domain-trang-baitap'
}


var array = ['Javascript', 'PHP', 'Ruby'];

function logger1(a, b, c) {
    console.log(a, b, c);
}

logger1(...array)


// ---- Tagged template literals ---

function highlight(...rest) {
    console.log(rest);
}

var brand = 'F8';
var course = 'Javascript';

highlight`Học lập trình ${course} tại ${brand} !`;


/*
Output:
Array(3):
0 => Array(3):
    0 => 'Học lập trình'
    1 => 'tại'
    2 => '!'
1 => 'Javascript'
2 => 'F8'
*/

// Example

function highlight([first, ...strings], ...values) {
   return values.reduce(
    (acc, cur) => {
        [...acc, `<span>${cur}</span>`, strings.shift()], [first]
    }
   ).join('');
}

const html = highlight`Học lập trình ${course} tại ${brand} !`;


// Modules: khi bóc tách một thành 
// phần xử lý ra 1 nghiệp vụ cụ thể ra những phần nhỏ
// Import/Export

// lưu ý: 1 module chỉ có thể export 1 module default, còn có thể export vô số module thường
import logger from './logger.js';
// import {
//     TYPE_LOG,
//     TYPE_ERROR,
//     TYPE_WARNING
// } from './constants.js'
import * as constants from'./constants.js';

logger('Message...', TYPE_LOG)

// cách tạo 1 file trung gian để export ra:

/*
export {default} from './logger.js'

// cách trên tương đương với bên dưới
// import logger from './logger.js'
// export default logger

*/

// 13. Optional chaining (?.)

const obj = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
        cat2: {
            name: 'Dinah',
            cat3: {
                name: 'Dinah'
            }
        }
    }
};

console.log(obj.cat.cat2.cat3.name);

if (
    obj.cat &&
    obj.cat.cat2 &&
    obj.cat.cat2.cat3 &&
    obj.cat.cat2.cat3.name
) {
    console.log(obj.cat.cat2.cat3.name);
}

// quá cồng kềnh

// ---> soluction: use optional chaining: khi bạn không biết thằng đó có tồn tại hay không
if (obj?.cat?.cat2?.cat3?.name) {
    console.log(obj.cat.cat2.cat3.name);
}

