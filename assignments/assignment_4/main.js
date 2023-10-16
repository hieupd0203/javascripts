/**
 * Bài tập 1: Tính tổng các số
Viết một hàm có tên "sumArray" nhận vào một mảng các số nguyên và trả về tổng của tất cả các số trong mảng.
 */

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([10, 20, 30, 40, 50]));

/**
 * Bài tập 2: Tìm số lớn nhất và nhỏ nhất
Viết một hàm có tên "findMinMax" nhận vào một mảng các số nguyên và
 trả về một mảng chứa số lớn nhất và nhỏ nhất trong mảng đó.
 */

 function findMinMax(arr) {
  const newArr = [];
  const sortArr = arr.sort(function(a, b) {
    return a - b;
  });
  newArr.push(sortArr[0], sortArr[sortArr.length - 1]);
  return newArr
 }
console.log(findMinMax([6, 2, 3, 4, 5, 1]));
/**
  * Bài tập 3: Lọc các số chẵn
Viết một hàm có tên "filterEvenNumbers" nhận vào một mảng các số nguyên và
 trả về một mảng mới chỉ chứa các số chẵn từ mảng ban đầu.
  */

function filterEvenNumbers(arrs) {
  return arrs.filter(function (value) {
    return value % 2 === 0;
  });
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

/**
  * Bài tập 5: Tìm các số lớn hơn x
Viết một hàm có tên "findNumbersGreaterThanX" nhận vào một mảng các số nguyên và một số x. 
Hàm này sẽ trả về một mảng mới chứa các số trong mảng ban đầu mà lớn hơn x.
  */

function findNumbersGreaterThanX(arr, x) {
  const newArr = arr.filter(function (value) {
    return value > x;
  });
  return newArr;
}
console.log(findNumbersGreaterThanX([10, 15, 20, 25, 30], 20));

/**
 * Bài tập 6: Đảo ngược mảng
Viết một hàm có tên "reverseArray" nhận vào một mảng và 
trả về một mảng mới chứa các phần tử của mảng ban đầu được sắp xếp theo thứ tự đảo ngược.
 */

function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5]));

/**
 * Bài tập 7: Ghép mảng
Viết một hàm có tên "concatArrays" nhận vào hai mảng và
 trả về một mảng mới chứa tất cả các phần tử từ hai mảng đầu vào.
 */

function concatArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(concatArrays([1, 2], [3, 4, 5]));

/**
  * Bài tập 8: Tìm số lần xuất hiện
Viết một hàm có tên "countOccurrences" nhận vào một mảng các phần tử và một giá trị x. 
Hàm này sẽ trả về số lần xuất hiện của x trong mảng ban đầu.
  */

function countOccurrences(arr, x) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countOccurrences([1, 2, 3, 4, 1, 2, 1], 1));

/**
 * tính tổng của mảng
 */

function total(arr) {
  const result = arr.reduce(function(prev, currentValue){
     return prev + currentValue
  }, 0);
  return result
}
console.log(total([1, 2, 3, 4]));

function totalPrice() {
  const produces = [{price: 10}, {price: 12}]
  const result = produces.reduce(function(prev, currentValue){
     return prev + currentValue.price
  }, 0);
  return result
}
console.log(totalPrice());


/**
 * Bài tập 9: Loại bỏ các giá trị trùng nhau
Viết một hàm có tên "removeDuplicates" nhận vào một mảng và trả về một mảng mới chỉ chứa các phần tử duy nhất
 (loại bỏ các giá trị trùng nhau).
 */

 /**
  * Bài tập 10: Tìm các số nguyên tố
Viết một hàm có tên "findPrimeNumbers" nhận vào một mảng các số nguyên và
 trả về một mảng mới chỉ chứa các số nguyên tố từ mảng ban đầu.
  */
 function isPrime(num) {
  if (num < 2) return false;
  else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
function findPrimeNumbers(array) {
  return array.filter(function (element) {
    return isPrime(element);
  });
}
console.log(findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


function findPrimeNumbers1(array) {
  return array.filter(function (element) {
    if (element < 2) return false;
    else {
      for (let i = 2; i < element; i++) {
        if (element % i === 0) {
          return false;
        }
      }
      return true;
    }
  });
}
console.log(findPrimeNumbers1([10, 15, 20, 25, 30]));

 /**
  * Bài tập 11: Sử dụng map() để nhân đôi mảng
Viết một hàm có tên "doubleArray" nhận vào một mảng số nguyên và sử dụng phương thức map() để nhân đôi giá trị của mỗi phần tử 
trong mảng và trả về một mảng mới.
  */

function doubleArray(arr) {
  return arr.map(function(value) {
    return value * 2
  })
}
console.log(doubleArray([1, 2, 3, 4, 5]));

/**
 * Bài tập 12: Sử dụng filter() để lọc các phần tử lớn hơn x
Viết một hàm có tên "filterNumbersGreaterThanX" nhận vào một mảng số nguyên và một số x.
 Hãy sử dụng phương thức filter() để lọc các phần tử trong mảng mà lớn hơn x và trả về một mảng mới.
 */

 function filterNumbersGreaterThanX(arr, x) {
  return arr.filter(function(value) {
    return value > x
  })
 }
 console.log(filterNumbersGreaterThanX([10, 15, 20, 25, 30], 20));

 /**
  * Bài tập 13: Sử dụng find() để tìm số đầu tiên thỏa mãn điều kiện
Viết một hàm có tên "findFirstEvenNumber" nhận vào một mảng số nguyên. Hãy sử dụng phương thức find() để tìm số chẵn đầu tiên trong mảng và trả về giá trị đó.
 Nếu không tìm thấy số chẵn, hàm sẽ trả về undefined.
  */

 function findFirstEvenNumber(arr) {
  return arr.find(function(value) {
    return value % 2 === 0
  })
 }
 console.log(findFirstEvenNumber([1, 3, 5, 7, 8, 9, 10]));

 /**
  * Bài tập 14: Sử dụng some() để kiểm tra xem có số lẻ nào trong mảng không
Viết một hàm có tên "hasOddNumber" nhận vào một mảng số nguyên.
 Hãy sử dụng phương thức some() để kiểm tra xem có số lẻ nào trong mảng không và trả về true nếu có, 
ngược lại trả về false.
  */

function hasOddNumber(arr) {
  return arr.some(function(value) {
    return value % 2 !== 0
  })
}
console.log(hasOddNumber([2, 4, 6, 8, 10]));


/**
 * Bài tập 15: Sử dụng every() để kiểm tra xem tất cả số đều là số dương
Viết một hàm có tên "areAllPositiveNumbers" nhận vào một mảng số nguyên. 
Hãy sử dụng phương thức every() để kiểm tra xem tất cả các số trong mảng có là số dương không và trả về true nếu đúng,
 ngược lại trả về false.
 */

 function areAllPositiveNumbers(arr) {
  return arr.every(function(value) {
    return value >= 0
  })
 }
 console.log(areAllPositiveNumbers([1, 2, 3, 4, 5]));

 /**
  * Bài tập 16: Sử dụng includes() để kiểm tra sự tồn tại của phần tử trong mảng
Viết một hàm có tên "hasElement" nhận vào một mảng số nguyên và một số x. 
Hãy sử dụng phương thức includes() để kiểm tra xem phần tử x có tồn tại trong mảng không và 
trả về true nếu có, ngược lại trả về false.
  */

function hasElement(arr, x) {
  return arr.includes(x)
}
console.log(hasElement([1, 2, 4, 5], 3));

/**
 * Bài tập 17: Sử dụng includes() để kiểm tra xem mảng có chứa tất cả các phần tử con không
Viết một hàm có tên "containsAllElements" nhận vào hai mảng arr1 và arr2.
 Hãy sử dụng phương thức includes() để kiểm tra xem tất cả các phần tử của mảng arr2 có tồn tại trong mảng arr1 không 
 và trả về true nếu có, ngược lại trả về false.
 */

 function containsAllElements(arr1, arr2) {
  for(const element of arr2) {
    if(!arr1.includes(element)) return false;
  }
  return true;
}
 console.log(containsAllElements([1, 2, 3, 4, 5], [2, 6, 1]));