// spread operator (syntax:sử dụng dấu ...)
// đối với mảng [... arr] -> ý nghĩa: phân giải các phần tử trong mảng thành các phần tử riêng lẻ
const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];
const c = [...a, ...b];
console.log(c);

// đối với object {...obj} -> ý nghĩa: phân giải các thuộc tính trong 1 object
const f = {name: "tho", age: 26};
const g = { ...f };
console.log(g);


// rest operator: (sử dụng ...) -> ý nghĩa: gom nhóm các phần tử
function test(...restParam) {
    console.log("rest operator: ", restParam);
}
test(1,2,3);

// Destructuring : cho phép chúng ta trích xuất giá trị từ các mảng hoặc đối tượng vào các biến riêng biệt một cách dễ dàng
// destructuring array
const h = ["hello", "xin chao", "hi"];
const [h1, h2, h3] = h; // <=> tạo ra 3 biến h1, h2, h3 riêng biệt

// destructuring object
const obj1 = {name: "hieu", age: 27, model: "handsome"};
const {name: firtName, age: bỉthday, model} = obj1;
console.log("destruc", firtName);
console.log("destruc", bỉthday);
console.log("destruc", model);

const obj2 = {
    name: "hien",
    address: {city: "thai binh", district: "dong hung"},
};

const { address: {city}} = obj2; // <=> obj2.address.city
console.log(city);

// ví dụ: đổi chỗ 2 giá trị sử dụng tính năng destructuring

let sw1 = 10;
let sw2 = 100;


// muốn đổi chỗ 2 giá trị cho nhau
// c1: tạo 1 biến temp
// let temp = sw1;
// sw1 = sw2;
// sw2 = temp;
console.log(sw1);
console.log(sw2);

// c2: 
const arrTemp = [sw2, sw1];
[sw1, sw2] = arrTemp; // [sw1, sw2] = [sw2, sw1]

console.log("sw1", sw1);
console.log("sw2", sw2);

// Arrow function : là cách khai báo function nhưng cú pháp của nó sẽ ngắn gọn hơn
const a3 = (p1, p2) => {
    // code...
}

const calculateTotalV1 = (a, b) => {
    const sum = a + b;
    return sum;
}
calculateTotalV1(2,3);

const calculateTotalV2 = (a, b) => a + b; // <==> return a + b;


const isOddNumber = a => a % 2 !== 0 ? true : false;

// sự khác nhau giữa arrow function và function thông thường

const obj3 = {
    firstName: "hieu",
    lastName: "pham",
    getFullName : function () {
        console.log(this.firstName + this.lastName);
    }
}
obj3.getFullName();


const obj4 = {
    firstName: "hieu",
    lastName: "pham",
    // Không được phép sử dụng arrow function làm method trong 1 object
    getFullName : () => {
        console.log(this.firstName + this.lastName);
    }
}


obj3.getFullName(); // hieu pham
obj4.getFullName(); // NaN


/**
 * Default Parameters : cho phép chúng ta định nghĩa giá trị mặc định cho các tham số của hàm.
 Nếu giá trị tham số không được truyền vào khi gọi hàm,
 thì giá trị mặc định sẽ được sử dụng thay vì giá trị undefined.
 */

 function testDefaultParamV1(p1) {
    console.log(p1);
 }

 function testDefaultParamV2(p1, p2 = "xin chao") {
    console.log(p1);
    console.log(p2);
 }

 testDefaultParamV1("hello");
 testDefaultParamV1(); // undefined


 testDefaultParamV2("hello"); // hello, xin chào
 testDefaultParamV2(); // undefined, xin chào

 
 /**
  * Template Literals:
 * cho phép bạn tạo chuỗi một cách dễ dàng và linh hoạt hơn bằng cách nhúng biến
  *  và biểu thức vào bên trong dấu backticks (`). Trước khi có Template Literals,
  *  chúng ta thường phải sử dụng các phép cộng chuỗi (+) hoặc phép nối chuỗi để tạo ra các chuỗi có giá trị động. 
  * Tuy nhiên, đây là một cách làm không hiệu quả và khó đọc.
  */
 
 const str1 = "xin";
 const str2 = "chao";

 const str3 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ${str1} ${str2}`;

 const isMan = true;
 const str4 = `toi co gioi tinh: ${isMan ? "đàn ông" : "đàn bà"}`
 console.log(str4);


 const str5 = `tong cua 3 + 9 : ${3 + 9}`;
 console.log(str5);
