/**
 * Object: là kiểu dữ liệu cơ bản và quan trọng trong JS
 * Object sẽ tổ chức dữ liệu theo cặp key và value
 */

// Cú pháp của object được biểu diễn bằng {}
// 1 object luôn khai báo với keyword là const
 const car = {
    name: "bmw",
    year: 2023,
    color: "black",
    author: {
        name: "hieu",
        age: 18
    }
 }; // là 1 object

 // Để truy cập giá trị của 1 property
// Cách 1:  sử dụng cú pháp dot notation(dấu chấm)
 console.log(car.name);
 console.log(car.author.name);

 // Cách 2: sử dụng cú pháp bracket notation(dấu ngoặc vuông)
console.log(car["name"]);
console.log(car["author"]["age"]);

// Cập nhật giá trị của 1 property
car.name ="yamaha";
console.log(car.name);

// Thêm 1 thuộc tính cho object
car.width = 1000;
console.log(car.width);

// Xóa 1 thuộc tính của object
delete car.color;
console.log(car.color);

// Object Methods
console.log(Object.keys(car)); // lấy ra danh sách các key của đối tượng
console.log(Object.keys(car.author)); // lấy ra danh sách các key của đối tượng
console.log(Object.values(car)); // lấy ra danh sách các value của đối tượng

// Method trong 1 object

const person = {
    firstName: "hieu",
    lastName: "pham",
    age: 18,
    printFullName: function(){
     console.log("tôi tên là " + this.firstName + " " + this.lastName);
    }

}
person.printFullName();

// keyword this
// trong 1 object this sẽ đại diện cho object đó
// person.name <--> this.name (this chỉ sử dụng trong object đó)
console.log(this) //khi this đứng 1 mình sẽ đại diện cho đối tượng window