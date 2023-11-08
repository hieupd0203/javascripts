// document : đối tượng document đại diện cho trang web hay ứng dụng web
// nếu muốn truy cập bất kì phần tử nào trong HTML thì ta luôn bắt đầu truy cập bằng document

// Truy cập 1 phần tử bằng thuộc tính id.
const h2Element = document.getElementById("h2"); // <=> querySelector("#h2")
console.log(h2Element);

const pElement = document.getElementById("paragraph");
console.log(pElement);

// Truy cập phần tử bằng tag name (tên thẻ html) // <=> querySelectorAll("h3")
const h3 = document.getElementsByTagName("h3");
console.log(h3);

// Truy cập phần tử bằng class name
const span = document.getElementsByClassName("test"); // querySelectorAll(".test")
console.log(span);

// Truy cập phần tử bằng CSS selector
// querySelector sẽ trả về phần tử đầu tiên mà nó tìm thấy
const el1 = document.querySelector("div > p");
console.log(el1);

const el2 = document.querySelectorAll("div > p");
console.log(el2);

// Thay đổi nội dung của HTML
const menu = document.querySelector("#menu");
// innerHTML là thuộc tính dùng để set or get các phần tử HTML vào phần tử mà nó đang tham chiếu đến
menu.innerHTML = `<li>gao</li>
                  <li>xoi</li>
                  <li>kem</li>`;
 
const p1 = document.getElementById("p1");
p1.innerHTML = "<strong>Lorem lorem</strong>";  

const p2 = document.querySelector("#p2")
// textContent : là thuộc tính set or get nội dung văn bản thuần túy vào phần tử mà nó đang tham chiếu
p2.textContent = "Lorem lorem"

// appendChild: thêm 1 node (là phần tử html mà mình tạo ra) vào cuối phần tử cha của nó
const menu1 = document.getElementById("menu1");
// b1: createElement:  tạo 1 phần tử html theo tag name
const li = document.createElement("li");
// b2: thêm nội dung vào phần tử vừa tạo
li.textContent = "xoi xeo"
menu1.appendChild(li)


// Thay đổi giá trị của 1 attribute trong 1 phần tử html
// attribute: là các thuộc tính trong 1 thẻ html
const img = document.querySelector("#image");
img.src = "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
console.log(img);

const link = document.getElementById("link");
link.href = "https://facebook.com"
console.dir(link);

// DOM CSS: có thể thay đổi kiểu dáng, hình dạng, style của 1 phần tử html bằng js
// vd: thay màu nền, phông chữ
const body = document.body;
body.style.backgroundColor = "green";
body.style.color = "#fff";

const box = document.getElementById("box");
box.textContent = "DOM"
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "blue";
box.style.textAlign = "center"
box.style.lineHeight = "100px"


/**
 * box1.addEventListener("click", function () {
	// classList truy cập đến danh sách class của phần tử html
	// add thêm các class css vào phần tử html
	this.classList.add("box1", "rounded");
});

rmBtn.addEventListener("click", function() {
  // remove: đê xóa các class trong phần tử html
  box1.classList.remove("rounded");
})


const box2 = document.getElementById("box2");
box2.addEventListener("click", function () {
  // toggle: remove class nếu có trong phần tử html và ngược lại.
	this.classList.toggle("box1");
	this.classList.toggle("rounded");
});
 */
