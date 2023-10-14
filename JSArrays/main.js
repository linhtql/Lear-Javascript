var courses = [
    {
        id: 1,
        name: 'Javascript',
        coint: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coint: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coint: 0
    },
    {
        id: 4,
        name: 'PHP',
        coint: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coint: 500
    }
];

/*
    Array methods:
        forEach()
        every() -> return true/false (tat ca phai tm)
        some() -> nhu every, nhung chi can gap dieu kien dung, tra ve va dung lai ngay
        find() -> tra ve phan tu dau tien
        filter() -> giong find, nhung tra ve tat ca
        map() -> thuong dung de hien thi ra view
        reduce() -> truyen vao mot ham (bien tich tru, bien), gia tri khoi tao
*/

courses.forEach(function(course, index) {
    console.log(index, course);
});


var isFree = courses.every(function(course, index) {
    return course.coint == 0;
});

console.log(isFree);

// var totalCoin = 0;

// for (var course of courses) {
//     totalCoin += course.coint;
// }

console.log(totalCoin); 


// reduce

var totalCoin = courses.reduce((a, b) => a + b.coint, 0); // initial value: khong bat buoc
console.log(totalCoin);

var numbers = [100, 200, 220, 200, 480];
var totalCoin = numbers.reduce((a, b) => a + b)



var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce((a, b) => a.concat(b),[])

// lay ra cac khoa hoc dua vao mang moi
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP",
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
]

var newCourse = topics.reduce((a, b) => a.concat(b.courses) ,[])

var htmls = newCourse.map(course => `
                                        <div>
                                            <h2>${course.title}</h2>
                                            <h2>${course.id}</h2>
                                        </div>
`) 

console.log(htmls.join(''));