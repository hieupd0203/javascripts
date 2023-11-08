// b1: khởi tạo danh sách các kí tự để tạo ra mã hex
const hexs = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// b2: đăng ký sự kiện cho nút thay đổi màu sắc.
const btnChangeColor = document.getElementById("color-flipper");
const textColor = document.getElementById("color");

const getColor = () => {
  let result = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexs.length);
    const hexChar = hexs[randomIndex];

    result += hexChar;
  }
  return result;
};
const changeColor = function () {
  const color = getColor();
  document.body.style.backgroundColor = color;
  textColor.textContent = color;
  textColor.style.color = color;
};
btnChangeColor.addEventListener("click", changeColor);
