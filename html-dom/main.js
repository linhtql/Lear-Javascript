// The DOM (Document Object Model) is a W3C (World Wide Web Consortium) standard.
/*
    1. Element
    2. Attribute
    3. Text
*/
// In the DOM. all HTML elements are defined as objects
// A property is a value can get/set (like changing the content of an HTML element)
// A method is an action can do (like add or deleting HTML element)


// HTML DOM Document Objects is the owner of all other objects in web page
// HTML DOM Elements:

// Find By Id
var headingElement = document.getElementById('heading');
console.log(headingElement);

// Find By Class Name
var headingElements = document.getElementsByClassName('heading');
console.log(headingElement);

// Find By Tag Name
var headingElement = document.getElementsByTagName('a')
console.log(headingElement);


// Find By CSS Selector
// var headingElement = document.querySelector('.box')
// var headingElement = document.querySelector('.box:first-child')
// var headingElement = document.querySelector('.box:nth-child(2)')
var headingElement = document.querySelectorAll('.box')
console.log(headingElement);

// Dynamic Content:
document.getElementById('heading').innerHTML = 'Date: ' + Date()

// document.write():
document.write(Date())

// Form Validation
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x === "") {
        alert("Name must be filled out")
        return false;
    }
    return true;
}

function validateForm1() {
    let x = document.forms["myForm1"]["fname"].value;
    if (x == "" || x < 1 || x > 10) {
        alert("test")
        return false;
    }
    return true;
}

// DOM CSS
document.getElementById('heading').style.color = 'red';