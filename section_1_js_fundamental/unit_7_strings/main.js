// String
/**
 * - Chuỗi JavaScript được sử dụng để lưu trữ và xử lý văn bản.
- Một chuỗi JavaScript là một chuỗi các ký tự, có thể không có ký tự nào hoặc nhiều ký tự, viết bên trong dấu ngoặc kép.
 */
const a = 'hello';
const b = "hello word";
const empty = '';

const name = "xin chao toi ten la \"hieu\"";
console.log(name);

// thuộc tính length trả về độ dài của chuỗi
console.log(name.length);

// Methods của string
const c = "toi la a";
const d = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

console.log(c.toUpperCase());// in ra chuỗi viết hoa
console.log(d.toLowerCase());// in ra chuỗi viết thường
console.log("    abc edf   ".trim()); //cắt bỏ khoảng trắng 2 đầu của chuỗi
console.log("xin chao".split(" ")); // trả về 1 mảng
console.log("abc".concat("edf")); // nối chuỗi
console.log(d.substring(0,5)); // vị trí các kí tự trong 1 chuỗi sẽ bắt đầu từ 0(index)

console.log(d.indexOf("ipsum")); // trả về index của 1 chuỗi or 1 kí tự cần tìm kiếm
console.log(d.includes("dolor"));// trả về true nếu chuỗi được tìm thấy
console.log(d.startsWith("Lorem")); // trả về true nếu tìm thấy từ bắt đầu là Lorem
console.log(d.endsWith("elit"));