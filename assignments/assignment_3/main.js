const person = {
  name: "hieu",
  age: 18,
  gender: "nam",
  occupation: "student",
};
console.log(person.name);
console.log(person["age"]);

person.occupation = "fb ads";
console.log(person.occupation);

person.email = "phamdanghieu@gmail.com";
console.log(person.email);

delete person.gender;
console.log(person.gender);
// Bai 6
person.printAllProperties = function () {
  const keys = Object.keys(this);
  console.log(keys);
};
person.printAllProperties();
// Bai 7
person.address = {
  street: "thon3",
  city: "dong ho",
  zip: 111,
};
console.log(person.address.zip);

/**
 * **Bài tập 9: Duyệt qua tất cả các giá trị**

1. Viết một hàm có tên "printAllValues" nhận vào một đối tượng 
và in ra tất cả các giá trị của các thuộc tính trong đối tượng đó.
 */
person.printAllValues = function () {
  const values = Object.values(this);
  console.log(values);
};
person.printAllValues();

// bài 8
function countProperties(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return {
    key: keys.length,
    value: values.length,
  };
}
const result = countProperties(person);

console.log(result);

/**
 * **Bài tập 10: Kiểm tra tính tồn tại**

1. Viết một hàm có tên "hasProperty" nhận vào một đối tượng và một chuỗi (tên thuộc tính). 
Hàm này sẽ kiểm tra xem thuộc tính có tồn tại trong đối tượng hay không và trả về true nếu có,
 ngược lại trả về false.
 */

function hasProperty(obj, key) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === key) return true;
  }
  return false;
}
console.log(hasProperty(person, "email"));

function hasProperty2(obj, key) {
  for (const keys in obj) {
    if (keys === key) return true;
  }
  return false;
}
console.log(hasProperty2(person, "name"));


function hasProperty3(obj, key) {
   return obj.hasOwnProperty(key);
 }
 console.log(hasProperty2(person, "name"));
