/**
 * Bài tập 1: In các số từ 1 đến N
Viết một chương trình yêu cầu người dùng nhập một số nguyên N.
 Sau đó, sử dụng vòng lặp for để in ra các số từ 1 đến N trên màn hình.
 */

function inCacSo(N) {
  for (let i = 1; i <= N; i++) {
    console.log(i);
  }
}
inCacSo(5);

/**
 * Bài tập 2: Tính tổng các số từ 1 đến N
Viết một chương trình yêu cầu người dùng nhập một số nguyên N. 
Sau đó, sử dụng vòng lặp while để tính tổng các số từ 1 đến N và in kết quả lên màn hình.
 */

function total(N) {
  let sum = 0;
  let i = 1;
  while (i <= N) {
    sum += i;
    i++;
  }
  return sum;
}
console.log(total(4));


/**
 * Bài tập 3: In các số chẵn từ 1 đến N
Viết một chương trình yêu cầu người dùng nhập một số nguyên N. 
Sau đó, sử dụng vòng lặp for để in ra các số chẵn từ 1 đến N trên màn hình.
 */

function inSoChan(num) {
  for(let i = 1; i <= num; i++) {
    if(i % 2 === 0) {
      console.log(i);
    }
  }
}
inSoChan(9);

/**
 * Bài tập 4: Tính giai thừa của một số
Viết một chương trình yêu cầu người dùng nhập một số nguyên N.
 Sau đó, sử dụng vòng lặp while hoặc do-while để tính giai thừa của N và in kết quả lên màn hình.
 */

 function factorial(num) {
  let accumulation = 1;
  let i = 1;
  while(i <= num) {
    accumulation *= i;
    i++;
  }
  return accumulation;
 }
 console.log(factorial(4));


 /**\Bài tập 5: Tìm ước chung lớn nhất (UCLN) của hai số
Viết một chương trình yêu cầu người dùng nhập hai số nguyên A và B. 
Sau đó, sử dụng vòng lặp do-while để tính ước chung lớn nhất (UCLN) của A và B và in kết quả lên màn hình. */


function timUcln(a, b) {
  if ( a === 0 || b === 0) return a + b;
 const min = a < b ? a : b;
 for(let i = min; i > 0; i--) {
  if( a % i === 0 && b % i === 0) return i
 }
 
}
console.log(timUcln(9, 12));


function timUcln2(a, b) {
  if ( a === 0 || b === 0) return a + b;
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a
}
console.log(timUcln2(5, 7));


function TimUcln(num1, num2) {
  let i = 0;
  let ucln;
  do {
    i++;
    if (num1 % i === 0 && num2 % i === 0) {
      ucln = i;
    }
  } while (i < num1);
  return "Ước chung lớn nhất của " + num1 + " và " + num2 + " là " + ucln;
}
console.log(TimUcln(6, 15));