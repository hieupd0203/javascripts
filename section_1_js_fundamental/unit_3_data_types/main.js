// trong js có 8 kiểu dữ liệu cơ bản
// 1. String
// 2. Number
// 3. Boolean
// 4. Underfined
// 5. Null
// 6. Object
// 7. Bigint
// 8. Symbol

// String
const valueOfString = "abc";
const valueOfString2 = 'cbd';
// Number
const numberOfInt = 1000;
const numberOfFloat = 15.5;
// Boolean
const valueOfBooleab = true; //false
// underfined
let abc; // kiểu giá trị của biến sẽ là underfined
// Null
let valueOfNull = null;
// Object (đối tượng)
// 1. Object
const person = {
    firstName: "hieu",
    age: 27,

};
// 2. Array
const cars = ["audi", "bmw", "honda"];
const members = [
    {
    firstName: "hieu",
    age: 27,
    },
    {
    firstName: "hieu",
    age: 27,
    },
];
// 3. Function
function getFullName(){
    console.log("pham dang hieu");
}
// 4. Date
const now = new Date();
console.log(now);