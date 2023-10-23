/**
 * **Bài tập 1: Biến và khai báo**

1. Khai báo một biến let với tên "message" và gán giá trị "Hello, ES6!" vào biến đó.
2. Khai báo một hằng số const có tên "PI" và gán giá trị là 3.14159.
 */

let message = "Hello, ES6!";
const PI = 3.14159;

console.log(message);
console.log(PI);

/**
 * **Bài tập 2: Arrow function**

1. Viết một arrow function có tên "add" nhận vào hai tham số và trả về tổng của chúng.
2. Viết một arrow function có tên "double" nhận vào một số và trả về số đó nhân đôi.
 */
const add = (a, b) =>  a + b;
console.log(add(2, 3));

const double = a => a * 2;
console.log(double(3));

/**
 * **Bài tập 3: Template literals**

1. Viết một hàm có tên "greeting" nhận vào một tên và trả về chuỗi chào mừng "Hello, [Tên]!" bằng cách sử dụng template literals.
 */

function greeting(name) {
    return `Hell0, ${name}`;
}
console.log(greeting("hieu"));

/**
 * **Bài tập 4: Default parameters**

1. Viết một hàm có tên "sayHello" nhận vào một tham số "name" và mặc định "name" là "Guest". 
Hàm này sẽ trả về chuỗi chào mừng "Hello, [name]!".
 */

function sayHello(name = "Guest") {
    return `Hello, ${name}`;
}
console.log(sayHello());

/**
 * **Bài tập 5: Destructuring**

1.Cho một mảng ["apple", "banana", "orange"], sử dụng destructuring để lấy ra các giá trị "apple" và "banana" vào hai biến riêng biệt.
 */
const array = ["apple", "banana", "orange"];

const [fruit1, fruit2] = array;

console.log(fruit1);
console.log(fruit2);

/**
 * **Bài tập 6: Spread operator**

1. Cho một mảng ["cat", "dog"] và một mảng khác ["lion", "tiger"].
 Sử dụng spread operator để kết hợp cả hai mảng lại thành một mảng mới.
 */

 const name1 = ["cat", "dog"];
 const name2 = ["lion", "tiger"];

 const name3 = [...name1, ...name2];
 console.log(name3);