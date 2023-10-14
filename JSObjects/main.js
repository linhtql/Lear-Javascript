
var emailKey = 'email';
var myInfo = {
    name: 'Tran Quang Linh',
    age: 22,
    address: 'Nghe An, VN',
    [emailKey]: 'linhtql@gmail.com',
    getName: function() {
        return this.name;
    }
};

// Add Key
myInfo.email = 'linhtql.na@gmail.com';
// OR myInfo['my-email] = 'linhtql.na@gmail.com';

// Get Key
console.log(myInfo.name);
// OR console.log(myInfo['name]);


// 1 key khonng ton tai -> undefined

//
var myKey = 'address';
// console.log(myInfo.myKey) // Undefined
console.log(myInfo[myInfo]);


// Delete
delete myInfo.age;


// Object constructor
function User(fistName, lastName, avatar) {
    this.fistName = fistName;
    this.lastName = lastName;
    this.avatar = avatar;
}

var author = new User("Linh", "Tran Quang", 'Avatar');

/* Object prototype
    1. Khai niem
    2. Su dung khi nao?
*/

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}

console.log(author.className);