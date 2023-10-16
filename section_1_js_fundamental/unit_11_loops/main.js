/**
 * Vòng lặp for: Nó cho phép lặp qua dãy các giá trị hoặc các phần tử trong 1 mảng với các bước nhất định
 * syntax: for (let i = 0; i < length; step) { code...}
 */

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr1.length; i++) {
  console.log("index:", i); // 0
  console.log("giá trị:", arr1[i]); //arr1[0] --> 1
}

// tính tổng của mảng trên
// b1: khởi tạo giá trị cho biến sum
let sum = 0; // lưu trữ lại giá trị của tổng
// b2 : lắp các phần tử trong 1 mảng
for (let index = 0; index < arr1.length; index++) {
  // lấy các giá trị sau mỗi lần lặp
  const value = arr1[index];
  // tính tổng
  sum = sum + value; // hoặc sum += value
}
//b3: In ra kết quả
console.log("sum=", sum);

const str1 = "Hello world";
for (let index = 0; index < str1.length; index++) {
  console.log("các kí tự:", str1[index]);
}

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
  { type: "TOYOTA", year: 2034 },
  { type: "SUZUKI", year: 2023 },
];

// in ra giá trị của year

for (let index = 0; index < cars.length; index++) {
  // b1: lấy ra phần tử trong mảng sau mỗi lần lặp
  const element = cars[index];
  // b2: lấy ra giá trị của year
  const year = element["year"];
  console.log(year);
}

// in ra giá trị của type
for (let index = 0; index < cars.length; index++) {
  // b1: lấy ra phần tử trong mảng sau mỗi lần lặp
  const element = cars[index];
  // b2: lấy ra giá trị của year
  const type = element["type"];
  console.log(type);
  for (let index = 0; index < type.length; index++) console.log(type[index]);
}

const books = [{ authors: ["hieu", "tho", "cuong"] }];
for (let i = 0; i < books.length; i++) {
  console.log(books[i]["authors"]);
  const authors = books[i]["authors"];
  for (let index = 0; index < authors.length; index++) {
    console.log(authors[index]);
  }
}

/**
   * Tạo 1 function nhận vào 1 số nguyên.

- Yêu cầu: kiểm tra số nhận vào có phải số nguyên tố hay không? In ra kết quả tương ứng

- Gợi ý:
 + số nguyên tố là số lớn hơn 1 
 + và chỉ chia hết cho chính nó và chia hết cho 1.

*/

function check(num) {
  // b1: kiểm tra số này nhỏ hơn 2
  if (num < 2) return false;

  // b2: lặp từ 2 -> num để kiểm tra
  for (let index = 2; index < num; index++) {
    if (num % index === 0) return false;
  }

  return true;
}

const num = 9;

if (check(num)) {
  console.log(num, "so nguyen to");
} else {
  console.log(num, "khong phai so nguyen to");
}


function kiemTraSoNguyenTo(num) {
  if (num < 2) {
    console.log(num, "khong phai so nguyen to");
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        console.log(num, "khong phai nguyen to");
        return;
      }
    }
    console.log(num, "la so nguyen to");
  }
}

kiemTraSoNguyenTo(17);

function sortArr(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      const temp = arr[i]; // 25
      arr[i] = arr[min]; //
      arr[min] = temp;
    }
  }
  return arr;
}
console.log(sortArr([3, 6, 1, 20, 25]));


function sortArr2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let max = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }
    if (max != i) {
      const temp = arr[i]; // 25
      arr[i] = arr[max]; //
      arr[max] = temp;
    }
  }
  return arr;
}
console.log(sortArr2([3, 6, 1, 20, 25]));


function sortArr3(arr){
  const compareFunc = function(a, b){
    return b - a;
};
return arr.sort(compareFunc);

}
  
console.log((sortArr3([3, 6, 1, 20, 25])));

//------------------------------------------------

// while: dùng khi chưa biết số vòng lặp cần thực hiện

let i = 1;
while(i <= 10) {
 console.log(i);
 i++;
}

// do ... while : sẽ thực hiện ít nhất 1 lần lặp
let t = 2;
do {
  console.log(t);
  t++;
} while (i < 10);

// câu lệnh break: kết thúc vào lặp khi gặp lệnh break
for (let index = 0; index < arr1.length; index++) {
  if (arr1[index] === 3) {
    break; // kết thúc vòng lặp với điều kiện === 3
  }
  console.log(arr1[index]);
  
}

// câu lệnh continue: bỏ qua lần lặp hiện tại nhưng vẫn thực hiện các lần lặp tiếp theo
for (let index = 0; index < arr1.length; index++) {
  if (arr1[index] === 3) {
    continue; // bỏ qua vòng lặp với điều kiện === 3 và tiếp tục vòng lặp
  }
  console.log(arr1[index]);
  
}

// tính tổng của arr1 (tổng các số chẵn)
let sum1 = 0;
for (let index = 0; index < arr1.length; index++) {
  if (arr1[index] & 2 !== 0) {
    continue;
  }
  const value1 = arr1[index];
  sum1 += value1
}
console.log(sum1);


const car = { type: "Volvo", year: 2016 };
// for ... of : dùng với array or string
for (const element of arr1) {
  console.log("for ... of", element);
}

for (const value of Object.values(car)) {
  console.log(value);
}

// for ... in : dùng lặp 1 giá trị có kiểu dữ liệu là object
for (const key in car) {
  console.log("for ... in", key);
}

// foreach : là 1 method của array

arr1.forEach(function(value, index) {
  console.log("for...each value:", value);
  console.log("for...each index:", index);
}) 
 // map(), filter(), find(), some(), include(), reduce()

// map: ánh xạ các giá trị cũ thành các giá trị mới
 const newArr1 = arr1.map(function(value){
  return value * 2;
 });

 console.log("map", newArr1);

 // filter : lọc các phần tử theo điều kiện và trả về mảng mới
 const filterArr = arr1.filter(function(value){
  return value % 2 === 0;
 });
  console.log("filter", filterArr);
  

  