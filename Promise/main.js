// 3. Promise
//      - Sync
//      - Async
//      - Nỗi đau
//      - Lý thuyết, cách hoạt động
//      - Thực hành, ví dụ

// Sync / Async

console.log(1);
console.log(2);

// Sync (Đồng bộ): thằng nào viết trước thì chạy trước, thằng nào viết sau chạy sau

// Async: Viết trước nhưng không đưa ra trước:  setTimeout, setInterval, fetch, 
// XMLHttpRequest, file reading, request animation frame

// Callback: xử lý các thao tác bất đồng bộ

// sleep
setTimeout(function() {
    console.log(1);
}, 1000);

console.log(2);


// Những vấn đề hay gặp phải:
// Callback hell: việc này phải chờ việc khác xong rồi mới xử lý được
setTimeout(function() {
    console.log(1); // viec 1
    setTimeout(function() {
        console.log(2); // viec 2
        setTimeout(function() {
            console.log(3); // viec 3
            setTimeout(function() {
                console.log(4); // viec 4
            })
        })
    })
})
// Piramid of doom

// 1. new Promise
// 2. Executor
    // 1. Pending: khi chưa gọi -> memory leak
    // 2. Fullfield: trạng thái thành công
    // 3. Rejected: trạng thái thất bại


var promise = new Promise(
    // Executor: function này sẽ được thực thi khi mà gọi tới Promise, 
    // gọi tới function trước khi gán
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()
        // phải gọi 1 trong 2, không sẽ bị memory leak

        // Fake call API
        resolve([{
            id: 1,
            name: 'linhtql'
        }
            ]);
        reject('Co loi')
    }
);

promise
    // Khi resolve được gọi
    .then(function(course) {
            console.log('Successfully!');
            console.log(course);
    })
    // Khi reject được gọi
    .catch(function(error) {
            console.log('Failure!');
            console.log(error);
    })
    // Khi 1 trong 2 được gọi
    .finally(function() {
            console.log('Done');
    });

// Interview
/*
Em có nắm về khái niệm Promise không -> có
Promise là 1 khái niệm sinh ra để xử lý bất đồng bộ
Trước khi có Promise, người ta thường dùng callback, nhưng dùng callback đôi khi
sẽ gặp vấn đề callback hell, nó làm cho code khó hiểu -> sinh ra Promise để khắc phục

Để tạo ra 1 Promise -> dùng new Promise -> truyền 1 excutor vào constructor của nó: resolve + reject
Khi sử dụng Promise, chúng ta sủ dụng qua .then hoặc .catch, hoặc finally

*/


promise
    .then(function() {
        return 1;
    })
    .then(function(data) {
        console.log(data);
        return 2;
    })
    .then(function(data) {
        console.log(3);
        return 3;
    })
    
    // -> kết quả trả về của function trước có thể sẽ là tham số truyền vào ở function đằng sau
    // Nó sẽ theo hình chuỗi (chiều dọc) 1 - 2 - 3 -> nó giải quyết được callback hell
    // không nhất thiết function trước trả kết quả, nếu không return ra sẽ là underfined

    // nếu return ra 1 Promise, thì thằng then kế tiếp, phải chờ thằng trước xử lý xong
promise
    .then(function() {
        return new Promise(function(resolve) {
            setTimeout(resolve, 3000)
        })
    })
    .then(function() {
        console.log(2);
    })

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms)
    })
}


sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then (function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })


var promise = new Promise(
    function (resolve, reject) {
        resolve('Success');
    }
);

// 1. Promise.resolve
// 2.Promise.reject
// 3. Promise.all

// Thư viện: output luôn luôn là một promise

// var promise = new Promise (
//     function (resolve, reject) {
//         // Logic
//         // resolve('Success!');
//         reject('Error');
//     }
// )

var promise = Promise.resolve('success');


promise
    .then(function (result) {
        console.log('result: ', result);
    })
    .catch(function(err) {
        console.log('err: ', err);
    })

var promise1 = new Promise (
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 2000)
    }
)

var promise2 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2, 3])
        }, 5000)
    }
)

Promise.all([promise1, promise2])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];

        console.log(result1.concat(result2));
    });