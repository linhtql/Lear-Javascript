// Đồng bộ: 1 chương trình sẽ thực thi tuần tự, tại mỗi thời điểm chỉ thực thi 1 dòng code
// function này phải chờ function kia thực thi xong để lấy dữ liệu làm đầu vào

function test() {
  console.log("1");
  console.log("2");
  console.log("3");
}

// Bất đồng bộ: có thể di chuyển sang thực thi 1 tác vụ khác, mà có thể thực thi tác vụ khác
// -> giúp thực hiện nhiều tác vụ đồng thời -> thực thi được nhiều tác vụ trong cùng 1 thời gian
function test1() {
  setTimeout(() => console.log("1"), 0);
  console.log("2");
  console.log("3");
}

test();

function httpGetAsync(theUrl, callback) {
  //theURL or a path to file
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      // var data = httpRequest.responseText;
      //if you fetch a file you can JSON.parse(httpRequest.responseText)
      if (callback) {
        callback(httpRequest);
      }
    }
  };

  httpRequest.open("GET", theUrl, true);
  httpRequest.send(null);
}

// httpGetAsync("https://picsum.photos/200/300", (data) => {
//   document.getElementById("img_1").setAttribute("src", data.responseURL);

//   httpGetAsync("https://picsum.photos/200/300", (data) => {
//     document.getElementById("img_2").setAttribute("src", data.responseURL);

//     httpGetAsync("https://picsum.photos/200/300", (data) => {
//       document.getElementById("img_3").setAttribute("src", data.responseURL);
//     });
//   });
// });

// Sẽ xảy ra tình trạng callback hell, chờ nhau xử lý

/*
new Promise(executor)

state: "pending"
result: undefined

-----> resolve(value)
            state: "fulfilled"
            result: value
OR -----> reject(error)
            state: "rejected"
            result: error

*/

// PROMISE -> giải quyết call back hell

const currentPromise = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  } else {
    reject("Error");
  }
});

currentPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// giải quyết ví dụ ở trên
function httpGetAsync1(theUrl, resolve) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      if (resolve) {
        resolve(httpRequest);
      }
    }
  };

  httpRequest.open("GET", theUrl, true);
  httpRequest.send(null);
}

const currentPromise1 = new Promise((resolve, reject) => {
  httpGetAsync1("https://picsum.photos/200/300", resolve);
});

const promise2 = new Promise ((resolve) => {
    httpGetAsync1("https://picsum.photos/200/300", resolve);
})

const promise3 = new Promise ((resolve) => {
    httpGetAsync1("https://picsum.photos/200/300", resolve);
})
// chaining
// currentPromise1.then((data) => {
//     document.getElementById("img_1").setAttribute("src", data.responseURL);

//     return promise2;
// })
// .then ((data) => {
//     document.getElementById("img_2").setAttribute("src", data.responseURL);

//     return promise3
// })
// .then ((data) => {
//     document.getElementById("img_3").setAttribute("src", data.responseURL);
// })

// Async/Await: Nó đơn giản cũng là 1 promise, 
// nhưng nó biến những code bất đồng bộ thành code đồng bộ
const executeAsync = async () => {
    try {
        const response = await currentPromise1;
        document.getElementById("img_1").setAttribute("src", response.responseURL);

        const response2 = await promise2;
        document.getElementById("img_2").setAttribute("src", response2.responseURL);

        const response3 = await promise3;
        document.getElementById("img_3").setAttribute("src", response3.responseURL);
    } catch(err) {
        console.log(err);
    }

}

executeAsync();
