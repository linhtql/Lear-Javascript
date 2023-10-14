// forEach, find, filter, some, every, reduce

// forEach

var courses = [
    'Java',
    'Dot Net' ,
    'Javascript'
];

courses.forEach(function(course, index, array) {
    console.log(course, index, array);
})

Array.prototype.forEach2((callbackfn) => {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callbackfn(this[index], index, this)
        }
    }
})

// filter

var courses = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
]

Array.prototype.filter2 = (callbackfn) => {
    var output = [];

    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callbackfn(this[index], index)
            if (result) {
                output.push(this[index])
            }
        }
    }
    return output;
}

var filterCourses = courses.filter2((course, index, array) => course.coin > 700)

