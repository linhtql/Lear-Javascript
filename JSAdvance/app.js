// 1. IIFE
// 2. Closures
// 3. Hoisting
// 4. Strict mode
// 5. This keyword
// 6. Bind method
// 7. Call method
// 8. Apply method
// 9. Catching, throwing errors
// 10. Promise
// 11. Async function, await

/// 1. IIFE - Immediately Invoked Function Expression
// = Self-Invoking Function
// có nghĩa là một biểu thức hàm được gọi ngay lập tức

const callNow = function () {
  console.log("NOW");
};
callNow();
// chưa phải là IIFE (vì viết rồi mới gọi)

// IIFE
(function () {
  console.log("IIFE");
})();

// LƯU Ý: dùng ';' trước IIFE

let fullName = "linhtql"(function () {})();
// error: is not a function

// IIFE là hàm "private"
// Sử dụng IIFE khi nào? -> muốn viết hàm chạy ngay, không bị ảnh hưởng đến cái gì

// Cách tạo ra

const app1 = {
  cars: [],
  add(car) {
    this.cars.push(car);
  },
  edit(index, car) {
    this.cars[index] = car;
  },
  delete(index) {
    this.cars.splice(index, 1);
  },
};

// dễ bị đánh cắp, phá dữ liệu

// solution giúp an toàn hơn

const app = (function () {
 // private 
  const cars = [];
  return {
    get(index) {
        return cars[index];
    },
    add(car) {
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    delete(index) {
      cars.splice(index, 1);
    },
  };
})();

// giúp cho ứng dụng an toàn: giống tính chất đóng gói trong OOP

// ------Scope-----

// Các loại phạm vi:
// - Global: bất cứ đâu trong chương trình có thể gọi và dùng hàm nó
// - Code block - khối mã: let, const: chỉ truy cập được bên trong khối mã
// - Local scope - hàm: var, function:  khai báo biến, hàm con nằm trong cha 
//-> chỉ sử dụng được ở trong con hoặc cha 
// Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo ra
// Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
// Cách thức 1 biến được truy cập
// Khi nào một biến bị xóa khỏi bộ nhớ?
    // - Biến toàn cầu?
    // - Biến trong code block và trong hàm?
    // - Biến trong hàm được tham chiếu bởi 1 hàm?

// global
var mesage = 'Hoc ve scope'

// code block
{
    var age = 18;
    // let age = 18;
    // const age = 18;
}

console.log(age);


// local scope
function logger() {
    var message = 'mesage';
    function logger2() {
        console.log('LOG 2');
    }
    logger2();
}

logger();
// console.log(message);


// -------Closure------
/*
- là một hàm có thể ghi nhớ nơi nó được tạo
 và truy cập được biến ở bên ngoài phạm vi của nó

 - Ứng dụng: 
  + viết code ngắn gọn hơn
  + biểu diễn, ứng dụng tính Private trong OOP

  - Lưu ý
    + biến được tham chiếu (refer) trong closure sẽ không được xóa
    khỏi bộ nhớ khi hàm cha thực thi xong
    + các khái niệm Javascript nâng cao rất dễ gây nhầm lẫn
*/