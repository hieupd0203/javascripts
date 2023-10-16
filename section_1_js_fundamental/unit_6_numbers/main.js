// Number
// number trong js có thể biểu diễn được số nguyên or số thực
const intValue = 12; // số nguyên
const floatValue = 12.12314; // số thực

// Trong JavaScript, bạn có thể viết các số rất lớn hoặc rất nhỏ bằng cách sử dụng ký hiệu khoa học (dạng mũ):
let largeNumber = 3.2e6; // 3.2 x 10^6 = 3200000 (3.2 triệu)
let smallNumber = 5.2e-3; // 5.2 x 10^-3 = 0.0052 (0.0052 đơn vị

/**
 * - Số nguyên (các số không có dấu chấm hoặc ký hiệu mũ) là chính xác đến 15 chữ số.
- Trong JavaScript, các số nguyên là những số không có phần thập phân hoặc ký hiệu mũ. Đối với số nguyên trong JavaScript, chúng ta có thể tin rằng chúng là chính xác đến 15 chữ số.
 */

//Toán tử dấu chấm động (floating point arithmetic) không luôn chính xác 100%.
let x = 0.1 + 0.2; // Kết quả không chính xác là 0.30000000000000004 ( Điều này là do hệ thống biểu diễn số thực bằng nhị phân không thể đại diện chính xác cho 0.1 và 0.2.)
let y = (0.2 * 10 + 0.1 * 10) / 10; // kết quả chính xác là 0.3
let z = (0.2 + 0.1).toFixed(1); // kết quả chính xác là 0.3

// Adding Numbers and Strings
const a = 100;
const b ='120';

console.log(a + b);  //100120

const c = "130";  //numeric
const d ="140";
console.log(c + d); //130140
console.log(c - d); //-10

// JavaScript Number Methods
const f = (123).toString(); // "123"
const g = (13.24232928).toFixed(1) // 13.2

// convert to number
const h = "3000.23";
const convertToNumber1 = Number(h); // 3000
const convertToNumber2 = parseInt(h); // 3000: kiểu integer
const convertToNumber3 = parseFloat(h); // 3000.23 kiểu float

const isInt = Number.isInteger(12.2323); //false

console.log(Number.MAX_VALUE); // in ra giá trị lớn nhất
console.log(Number.MIN_VALUE); // in ra giá trị nhỏ nhất    

// Math: thư viện toán học
const PI = Math.PI;
console.log("PI", PI);

const pow = Math.pow(12,2); // 12*2
console.log(pow);

const sqrt = Math.sqrt(9); // căn bậc 2
console.log(sqrt);

const abs = Math.abs(-12); // giá trị tuyệt đối
console.log(abs);

const floor = Math.floor(12.2); // làm tròn xuống 12
const ceil = Math.ceil(12.8); // làm tròn lên 13
const round = Math.round(12.4); // >=5 là làm tròn lên
console.log("floor", floor);
console.log("ceil", ceil);
console.log("round", round);

const random = Math.random(); // tạo 1 con số ngẫu nhiên 0 -> 1
console.log(random);

const max = Math.max(12, 13, 22, 55); // tìm số lơn nhất
console.log("max", max);

const min = Math.min(12, 13, 22, 55); // tìm số nhỏ nhất
console.log("min", min);

// Tạo 1 function sẽ trả về con số ngẫu nhiên từ 1-6
function getRandomNumber() {
    const random = Math.round(Math.random()*6);
    return random;
}
const result = getRandomNumber();
console.log(result);