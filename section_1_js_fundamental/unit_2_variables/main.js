/**
 * Khái niệm: Variables là 1 container lưu trữ lại các dữ liệu
 * Ví dụ: lưu tên người, tuổi
 * ex: const name = "hieu"
 */

// cú pháp khởi tạo 1 biến
// keyword ten_bien = gia_tri_cua_bien;
//keyword: var, let, const

const firtName = "hieu";
//-------------------------------------------------------------------------------------------------

//các cách khởi tạo 1 biến
//cách 1: automatically
fullName = "pham dang hieu";
//cách 2: sử dụng keyword var
var age = 27;
//cách 3: sử dụng keyword let
let gender ="nam";
//cách 4: sử dụng keyword const
const isSingle = "true";

//----------------------------------------------------------------------------------------------------

//khi nào sử dụng var, let, const
// 1. const: dùng để lưu trữ 1 giá trị không bị thay đổi
const PI = 3.14;
console.log(PI);
// 2. let: dùng để lưu trữ các giá trị có thể thay đổi được giá trị của nó
let name ="tho";
console.log(name); //tho
name = "hieu";
console.log(name); //hieu

//------------------------------------------------------------------------------------------------
// quy tắc đặt tên biến
// 1. Tên phải bắt đầu bằng chữ cái, dấu _, $
// 2. Tên biến sẽ phân biệt chữ hoa chữ thường
// 3. Các keyword trong js không được sử dụng làm tên biến
// 4. Tên biến nên được đặt theo quy tắc camelCase

const carName ="audir3";
const manufacturer ="audi";
const yearOfManufacture = 1990;

//------------------------------------------------------------------------------------------------
// Assignment operator (phép gán =)
const bikeName = "bmw"; // tên biến bikeName được gán giá trị là bmw

//-----------------------------------------------------------------------------------------------
// Data types (các kiểu dữ liệu được lưu trữ)
const string = "hieu"; // kiểu string (chuỗi)
const num2 = "1212"; // kiểu string
const num = 1212; // kiểu number (số)
const isMarried = true; // kiểu boolean ( boolean chỉ có 2 giá trị true or false)
const arr1 = [1, 2, 3, 4]; // kiểu array (mảng)
const person = {
    name: "hieu",
    age: 27,
}; // kiểu object (đối tượng)

//------------------------------------------------------------------------------------
// Giá trị undefined: nghĩa là khi khái báo 1 biến nhưng lại không gán giá trị cho biến đó lúc khai báo thì biến đó mặc định có giá trị gọi là undefined
let valueUndefined;
console.log(valueUndefined);

//-------------------------------------------------------------------------------------
// Khởi tạo lại biến ( re-clare variable)
// 1. let, const thì không thể khởi tạo lại biến
// 2. var cho phép khởi tạo lại biến

//------------------------------------------------------------------------------------
// keyword let
// 1. Không thể được khai báo lại
// 2. Luôn khai báo trước khi sử dụng
// 3. Có phạm vi là block scope ( hoạt động trong dấu ngoặc {} )

// keyword const
// 1. Không thể được khai báo lại
// 2. Luôn khai báo trước khi sử dụng
// 3. Có phạm vi là block scope ( hoạt động trong dấu ngoặc {} )
// 4. Không thể gán lại giá trị mới

