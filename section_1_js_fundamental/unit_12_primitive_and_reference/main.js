// Primitive ( tham trị): gồm các giá trị nguyên thủy (number, string, boolean)
// ý nghĩa: tham trị chỉ sao chép giá trị của 1 biến vào 1 biến khác hoặc truyền giá trị vào 1 function như tham số
 let a = 1;
 let b = a;

 console.log(a === b); // true

 a = 3;

 console.log("a:", a); // 3
 console.log("b:", b); // 1


// Reference ( tham chiếu): gồm giá trị (object, array)
// ý nghĩa: tham chiếu đến địa chỉ ô nhớ của 1 biến


const obj1 = { name: "hieu", age: 27};
const obj2 = obj1;
const obj3 = { name: "hieu", age: 27};


console.log(obj1 === obj2); // true
console.log(obj2 === obj3); // false
console.log(obj1 === obj3); // false