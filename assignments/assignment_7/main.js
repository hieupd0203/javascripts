/**
 * Bài tập 3: Tính diện tích hình chữ nhật
Viết một function có tên là calculateRectangleArea nhận vào chiều dài và chiều rộng của hình chữ nhật và trả về diện tích của nó.
Input:

- Chiều dài và chiều rộng của hình chữ nhật.

Output:

- Diện tích của hình chữ nhật.
 */
function calculateRectangleArea(width, height) {
  return width * height;
}
const rectangularArea = calculateRectangleArea(8, 9);
console.log(rectangularArea);

// diện tích hình tròn
const calculaRecircleArea = function (radius) {
  const pI = 3.14;
  return radius * pI ** 2;
};
const recircleArea = calculaRecircleArea(10);
console.log(recircleArea);

/**
 * Bài tập 1: Tính tổng hai số
Viết một function có tên là sumOfTwoNumbers nhận vào hai số nguyên và trả về tổng của chúng.
 */

function sumOfTwoNumbers(a, b) {
  return a + b;
}
console.log(sumOfTwoNumbers(2, 3));

/**
 * Bài tập 2: Kiểm tra số chẵn
Viết một function có tên là isEvenNumber nhận vào một số nguyên và kiểm tra xem số đó có phải là số chẵn hay không.
 */

function isEvenNumber(x) {
  return x % 2 === 0;
}
console.log(isEvenNumber(6));

/**
  * Bài tập 4: Kiểm tra chuỗi palindrome
Viết một function có tên là isPalindrome nhận vào một chuỗi và kiểm tra xem chuỗi đó có phải là chuỗi palindrome hay không. 
Chuỗi palindrome là chuỗi mà nếu đọc xuôi hay ngược đều giống nhau.
  */

function isPalindrome(str) {
  const newString = str.split("").reverse().join("");
  return newString === str;
}
console.log(isPalindrome("level"));

/**
 * Bài tập 5: Tính giai thừa của một số
Viết một function có tên là calculateFactorial nhận vào một số nguyên dương và trả về giai thừa của số đó. 
Giai thừa của một số nguyên dương n được tính bằng tích của các số từ 1 đến n.
 */
let factorial = 1;
function calculateFactorial(num) {
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(calculateFactorial(5));

/**
 * Bài tập 6: Kiểm tra số nguyên tố
Viết một function có tên là isPrimeNumber nhận vào một số nguyên dương và kiểm tra xem số đó có phải là số nguyên tố hay không. 
Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
 */

function isPrimeNumber(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
const num = 8;

if (isPrimeNumber(num)) {
  console.log(num, "so nguyen to");
} else {
  console.log(num, "khong phai so nguyen to");
}

/**
 * Bài tập 7: Đảo ngược chuỗi
Viết một function có tên là reverseString nhận vào một chuỗi và trả về chuỗi đảo ngược của nó.
 */

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

/**
 * Bài tập 8: Tìm số lớn nhất trong mảng
Viết một function có tên là findMaxNumber nhận vào một mảng các số nguyên và trả về số lớn nhất trong mảng.
 */
function findMaxNumber(arr) {
  const newArr = arr.sort(function(a, b){
    return b - a;
  })
  return newArr[0];
}
console.log(findMaxNumber([3, 6, 2, 9, 5]));


function findMaxNumber2(arr) {
  const max = arr.reduce(function(accumulator, element) {
    return (accumulator > element) ? accumulator : element
  }, 0)
  return max
}
console.log(findMaxNumber2([3, 6, 2, 9, 15]));


/**
 * Bài tập 9: Tìm số nhỏ nhất trong mảng
Viết một function có tên là findMinNumber nhận vào một mảng các số nguyên và trả về số nhỏ nhất trong mảng.
 */
 

function findMinNumber(arr) {
  const newArr = arr.sort(function(a, b){
    return a - b;
  })
  return newArr[0];
}
console.log(findMinNumber([10, 7, 2, -1, 8]));
/**
 * Bài tập 10: Tính tổng các số trong mảng
Viết một function có tên là calculateSumOfNumbers nhận vào một mảng các số nguyên
 và trả về tổng của các số trong mảng.
 */

function calculateSumOfNumbers(arr) {
  let sum = 0;
  for( let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
console.log(calculateSumOfNumbers([3, 6, 2, 9, 5]));


/**
 * Bài tập 11: Kiểm tra mảng có chứa số chẵn hay không
Viết một function có tên là containsEvenNumber nhận vào một mảng các số nguyên 
và kiểm tra xem mảng đó có chứa số chẵn hay không.
 */

function containsEvenNumber(arr) {
  for( let i = 0; i < arr.length; i++) {
    if( arr[i] % 2 === 0) return true
  }
  return false
}
console.log(containsEvenNumber([9, 15, 21, 27, 5]));


/**
 * Bài tập 12: Tính trung bình cộng các số trong mảng
Viết một function có tên là calculateAverage nhận vào một mảng các số nguyên 
và trả về trung bình cộng của các số trong mảng.
 */
let sum1 = 0;
function calculateAverage(arr) {
  for( let i =0; i < arr.length; i++) {
    sum1 += arr[i]
  }
  return sum1 / arr.length
}
console.log(calculateAverage([10, 7, 2, -1, 8]));

/**
 * Bài tập 13: Đếm số lượng số lẻ trong mảng
Viết một function có tên là countOddNumbersnhận vào một mảng các số nguyên và trả về số lượng số lẻ trong mảng.
 */

function countOddNumbersnhận(arr) {
  const newArr = arr.filter(function(value){
   return value % 2 !== 0
  })
  return newArr.length
}
console.log(countOddNumbersnhận([3, 6, 2, 9, 5, 7, 11]));

/**
 * Bài tập 14: Kiểm tra mảng có chứa số âm hay không
Viết một function có tên là containsNegativeNumber nhận vào một mảng các số nguyên
 và kiểm tra xem mảng đó có chứa số âm hay không.
 */

 function containsNegativeNumber(arr) {
  for( let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) return true
  }
  return false
 }
 console.log(containsNegativeNumber([3, 6, 2, 9, 5]));

 /**
  * Bài tập 15: Sắp xếp mảng tăng dần
Viết một function có tên là sortAscending nhận vào một mảng các số nguyên 
và trả về mảng đã được sắp xếp theo thứ tự tăng dần.
  */
 function sortAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
     for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
     }
     if (min != i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;  
 }
 console.log(sortAscending([3, 6, 2, 9, 5]));

 