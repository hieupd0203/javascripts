/**
 * Bài tập 1: Khai báo và sử dụng biến
 * Khai báo và sử dụng biến
 * - Hãy khai báo 1 biến có tên là name và gán giá trị "John" cho biến này.
 * - In giá trị của biến name lên màn hình
 */

const name = "John";
console.log(name);

/**
 * Bài tập 2: Kiểu dữ liệu của biến
 * Kiểu dữ liệu của biến
 * - Hãy khai báo các biến và gán giá trị tương ứng
 * - sử dụng hàm typeof để in kiểu dữ liệu của từng biến lên màn hình
 */
let age = 26;
let isMale = true;
let firstName = "hieu";
let book = {
  color: "blue",
  pageOfNumber: 64,
};
let heros = [
  {
    name: "garen",
    position: "top",
  },
  {
    name: "lux",
    position: "mid",
  },
];
console.log("age: ", typeof age);
console.log(typeof isMale);
console.log(book);
console.log(typeof book);
console.log("heros: ", typeof heros);
/**
 * Bài tập 6: Gán giá trị từ biến này sang biến khác
 * -Hãy khai báo biến a và gán giá trị 10 cho nó
 * -Sao chép giá trị của a vào biến b và in giá trị của b lên màn hình
 */
const a = 10;
const b = a;
console.log(b);

// **Bài tập 3: Tính toán với biến và toán tử**

// - Hãy khai báo hai biến **`a`** và **`b`** và gán giá trị bất kỳ cho chúng.
// - Sử dụng các toán tử (+, -, *, /, %) để thực hiện các phép tính sau và in kết quả lên màn hình:
//     - Tổng của **`a`** và **`b`**.
//     - Hiệu của **`a`** và **`b`**.
//     - Tích của **`a`** và **`b`**.
//     - Thương của **`a`** và **`b`**.
//     - Phần dư khi chia **`a`** cho **`b`**.

const x = 4;
const y = 3;

const z = x + y;
console.log(z);

const c = x - y;
console.log(c);

const d = x * y;
console.log(d);

const e = x / y;
console.log(e);

const f = x % y;
console.log(f);
/**
 * **Bài tập 4: Chuyển đổi kiểu dữ liệu**

- Hãy khai báo một biến **`numberString`** và gán giá trị "123" cho biến này dưới dạng chuỗi.
- Chuyển đổi biến **`numberString`** sang kiểu số nguyên (integer) và gán kết quả vào một biến **`numberInt`**.
- In kiểu dữ liệu của **`numberInt`** lên màn hình.
 */
const numberString = "123";
const numberInt = Number(numberString);
console.log(numberInt);
/**
 * **Bài tập 5: So sánh giá trị của biến**

- Hãy khai báo hai biến **`x`** và **`y`** và gán giá trị bất kỳ cho chúng.
- Sử dụng các toán tử so sánh (==, !=, >, <, >=, <=) để so sánh giá trị của **`x`** và **`y`** và in kết quả lên màn hình.
 */
const x1 = 3;
const y1 = 4;
console.log(x1 == y1);
console.log(x1 != y1);
console.log(x1 > y1);
console.log(x1 < y1);
console.log(x1 >= y1);
console.log(x1 <= y1);
/**
 * **Bài tập 7: Toán tử logic**

- Hãy khai báo hai biến **`isStudent`** và **`isWorking`** và gán giá trị **`true`** cho **`isStudent`** và **`false`** cho **`isWorking`**.
- Sử dụng các toán tử logic (**`&&`**, **`||`**, **`!`**) để kiểm tra các điều kiện sau và in kết quả lên màn hình:
    - **`isStudent`** và **`isWorking`**.
    - **`isStudent`** hoặc **`isWorking`**.
    - Phủ định của **`isStudent`**.
 */
const isStudent = 3;
const isWorking = 4;
console.log(isStudent > 0 && isWorking > 1);
console.log(isStudent % 2 === 0 || isWorking % 2 === 0);
console.log(!(isStudent > 2));

/**
 * **Bài tập 8: Tạo đối tượng và truy xuất thuộc tính**

- Hãy tạo một đối tượng **`person`** với các thuộc tính **`name`**, **`age`** và **`gender`**.
- Gán giá trị tương ứng cho các thuộc tính này.
 */
const person = {
  name: "hieu",
  age: "26",
  gender: "nam",
};

/**
 * let x = 10

const z = ++x  11
const w = ++x  12    
const q = x++  12
const e = --x  12
const t = x++  12
const y = x--  13 / x=12
 */
let x3 = 10;

const z3 = ++x3;
const w3 = ++x3;
const q3 = x3++;
const e3 = --x3;
const t3 = x3++;
const y3 = x3--;
console.log("z3:", z3);
console.log("w3:", w3);
console.log("q3:", q3);
console.log("e3:", e3);
console.log("t3:", t3);
console.log("y3:", y3);
console.log("x3:", x3);

const a5 = 0.1;
const b5 = 0.2;
console.log((a5 + b5).toFixed(1));