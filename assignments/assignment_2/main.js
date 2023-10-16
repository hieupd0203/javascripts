/**
 * Bài tập 6: Loại bỏ khoảng trắng thừa
Viết một hàm có tên "trimWhitespace" nhận vào một chuỗi và trả về chuỗi mới đã loại bỏ các khoảng trắng thừa ở đầu và cuối chuỗi.
 */
function trimWhitespace(text) {
  return text.trim();
}
const result = trimWhitespace("  hieu pham  ");
console.log(result);

/**
 * Bài tập 1: Đảo ngược chuỗi
Viết một hàm có tên "reverseString" nhận vào một chuỗi và trả về chuỗi đảo ngược của nó.
 */

// b1: chuyển chuỗi thành mảng
// b2: dùng reverse để đảo ngược
// b3: chuyển mảng thành chuỗi
function reverseString(str) {
  return str.split("").reverse().join("");
}
const c = reverseString("hello");
console.log(c);

/**
 * Bài tập 3: Đếm số lượng từ
Viết một hàm có tên "countWords" nhận vào một chuỗi và trả về số lượng từ trong chuỗi đó.
 Cho rằng các từ cách nhau bởi khoảng trắng.
 */
function countWords(str) {
  return str.split(" ").length;
}
console.log(countWords("hello world"));

/**
 * Bài tập 5: Tách chuỗi thành mảng các từ
Viết một hàm có tên "splitWords" nhận vào một chuỗi và trả về một mảng chứa các từ của chuỗi đó.
 */
function splitWords(str) {
  return str.split(" ");
}
console.log(splitWords("Hello world"));

/**
 * Bài tập 9: Đếm số lượng ký tự chữ cái
Viết một hàm có tên "countLetters" nhận vào một chuỗi và trả về số lượng ký tự chữ cái 
(không tính các ký tự đặc biệt và khoảng trắng).
 */
function countLetters(str) {
  return str.replace(/\s+/g, "").length;
}
console.log(countLetters("Hello world jk jj 11"));

/**
 * Bài tập 2: Kiểm tra chuỗi đối xứng
Viết một hàm có tên "isPalindrome" nhận vào một chuỗi và trả về true nếu chuỗi là đối xứng
 (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều giống nhau), ngược lại trả về false.
 */
function isPalindrome(str) {
  const newString = str.split("").reverse().join("");
  return newString === str;
}
const str = "radar";
if (isPalindrome(str)) {
  console.log(str, "là chuỗi đối xứng");
} else {
  console.log(str, "không là chuỗi đối xứng");
}

/**
 * Bài tập 4: Viết hoa chữ cái đầu tiên của từ
Viết một hàm có tên "capitalizeFirstLetter" nhận vào một chuỗi
 và trả về chuỗi mới với chữ cái đầu tiên của mỗi từ được viết hoa.
 */

function capitalizeFirstLetter(str) {
  const newString = str.split(" ").map(function (value) {
    const firstCharacter = value.substring(0, 1).toUpperCase();
    const remainWord = value.substring(1);

    return firstCharacter + remainWord;
  });
  console.log(newString);
  return newString.join(" ");
}
console.log(capitalizeFirstLetter("hello world tho hieu cuong"));

/**
 * Bài tập 7: Đếm số lần xuất hiện của một từ
Viết một hàm có tên "countOccurrences" nhận vào một chuỗi và một từ. 
Hàm này sẽ trả về số lần xuất hiện của từ trong chuỗi.
 */

function countOccurrences(str, word) {
  let count = 0;
  const newString = str.toUpperCase().split(" ");
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === word.toUpperCase()) {
      count = count + 1;
    }
  }
  return count
}
console.log(countOccurrences("Hello hello world hello", "hello"));



function countOccurrences1(str, word) {
    const newString = str.toUpperCase().split(" ").filter(function(value){
        return value === word.toUpperCase();
    });
    return newString.length
}
console.log(countOccurrences1("Hello hello world hello", "hello"));


function countOccurrences2(str) {
    const newString = str.split(" ");
    for(let i = 0; i < newString.length; i++) {
        let count = 1;
        for(let j = i + 1; j < newString.length; j++) {
           if(newString[j] === newString[i]) {
            count = count + 1;
           }
        }
    }
  
}

console.log(countOccurrences2("Hello hello world hello"));