/**
 * Arrays(mảng): là 1 kiểu dữ liệu đặc biệt có thể lưu trữ được nhiều giá trị
 * Cú pháp: const tên_array = [...]
 * Các giá trị trong 1 array sẽ gọi là 1 element
 */

const numbers = [1,2,3,4];
const names = ["tho","hieu","hien"];
const books = [
    {name: "tuoi tho du doi", author: "nguyen nhat anh"},
    {name:"harry porter", author:"thobui"},
];
const mixed = [1, "tho", true, null, {name:"hieu"}, [1,2,3]];

// Truy cập phần tử trong 1 mảng(cú pháp array[index]-->index là vị trí của phần tử trong mảng)
// index sẽ bắt đầu từ vị trí 0
const book2 = books[1];
console.log(books);
console.log(book2.author, book2.name);

// Cập nhật giá trị của 1 phần tử trong mảng
console.log("truoc khi cap nhat:", numbers);
numbers[2] = 100;
console.log("sau khi cap nhat:", numbers);

books[1].author = "hieupham";
console.log(books);

// Thêm 1 phần tử mới vào mảng
names[3] = "cuong";
console.log(names);

// length: trả về số lượng phần tử trong 1 array
console.log(numbers.length);
console.log(books.length);

//Thêm 1 phần tử vào mảng
numbers.push(1000, 12, 33); // push: thêm mới 1 hoặc nhiều phần tử vào cuối mảng
console.log(numbers);

names.unshift("hoa","hong") // unshift: thêm mới 1 hoặc nhiều phần tử vào đầu mảng
console.log(names);

// convert 1 mảng thành string
console.log(numbers.toString());

// pop: lấy ra phần tử cuối cùng của mảng
console.log(books.pop());

//// shift: lấy ra phần tử đầu tiên của mảng
console.log(books.shift());

//join: toàn bộ các phần tử gộp vào thành 1 string
console.log(numbers.join("-"));

// concat: gộp 2 mảng thành 1 mảng duy nhất
const array1 = [1,2,3];
const array2 = [3,4,5];
const newArray = array1.concat(array2);
console.log(newArray);

// flat: [[123, 223, 332]] -->[123, 223, 332]
console.log([[123]].flat());

// splice: thêm or xóa các phần tử trong 1 mảng
// splice(index, howmany, item1,...)
// index: chỉ mục của phần tử add/remove
// howmany: số phần tử cần xóa
// item1,...: phần tử mới được thêm vào mảng
const fruits = ["orange", "apple", "banana", "mango"]
// fruits.splice(2,0,"lemon", "kiwi")
console.log(fruits);

fruits.splice(2,2);
console.log(fruits);

// slice: trả về 1 mảng mới các phần tử được chọn theo index
// syntax-->slice(start, end)
// start: vị trí của index mình muốn bắt đầu
// end: vị trí của index mình muốn kết thúc
const newFruits = fruits.slice(0,2);
console.log(newFruits);

//sort: dùng để sắp xếp các phần tử trong 1 mảng
fruits.push("abcos");
console.log("mảng được sắp xếp a-z", fruits.sort());
console.log("mảng được sắp xếp z-a", fruits.reverse()); // reverse: đảo ngược cái phần tử trong 1 mảng

const numbers1 = [1000, 33, 2323, 12, 1, 0];
console.log("mảng ban đầu:", numbers1);

const numbersSorted = numbers1.sort(function(a, b){
  return a - b; // a-b sắp xếp tăng dần, b-a sắp xếp giảm dần
})
console.log("mảng được sắp xếp", numbersSorted);

//-------------------------------------------------------------------------
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010},
    {type:"TOYOTA", year: 2034},
    {type:"SUZUKI", year: 2023}
  ];

  // tạo 1 function tên sorted.
  // nhận vào tham số là mảng chưa được sắp xếp
  // trả về mảng được sắp xếp
  // sắp xếp cars theo năm tăng dần

  function sortedByYear (array){
    // const carsSorted = array.sort(function(a, b){
    //     return b.year - a.year;
    // })
    // return carsSorted
    const compareFunc = function(a, b){
        return a.year - b.year;
    };
    return array.sort(compareFunc);
    
  }
  


function sortedByType (array){
    const compareFunc = function(a, b){
        return a.type.toLowerCase().localeCompare(b.type.toLowerCase());
    };
    return array.sort(compareFunc);
    
  }
  

  console.log(sortedByType(cars));


