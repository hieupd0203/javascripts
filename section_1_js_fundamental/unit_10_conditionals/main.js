// if Statement : sử câu lệnh if để chỉ định khối mã sẽ thực thi khi điều khiển của n là đúng
// syntax: if (condition) { // đoạn code thực thi }

const number = 10;
if (number > 11) {
  console.log("so lơn hon 11");
} else {
  console.log("so nho hon 11");
}

/**
 * if(condition1) {
 * ...code
 * } else if(condition2) {
 * ...code
 * } else {
 * ...code
 * }
 */

const a = "hello";
if (a === "xin chao") {
  console.log(a);
} else if (a === "hello") {
  console.log(a);
} else {
  console.log("khong bang");
}

// if...else có thể lồng nhau

const b = 30;
if (b === 5) {
  console.log("b bang 5");
  if (b > 3) {
    console.log("b co lon hon 3");
  } else {
    console.log("b nho hon 3");
  }
} else {
  console.log("b khong bang 5");
  if (b < 2) {
    console.log("b co nho hon 2");
  } else {
    console.log("b co lon hon 2");
  }
}

// sử dụng kết hợp với logic operator ( &&, ||, !)

if (b > 50 && b < 60) {
  console.log("điều kiện thoản mãn &&");
}

if (b > 50 || b > 60) {
  console.log("điều kiện thoản mãn ||");
}

// ! dấu phủ định điều kiện, ví dụ !true --> false
const isLogged = false;
if (!isLogged) {
  console.log("bạn phải đăng nhập");
}

/**
 * Tạo 1 function có chức năng kiểm tra chỉ số BMI
 * function nhận vào 2 tham số chiều cao, cân nặng
 * công thức tính BMI = cân nặng /(chiều cao x chiều cao)
 * hiển thị kết quả nếu:
 * - BMI < 18.5 --> hiển thị người này là nhẹ cân
 * - 18.5 <= BMI <= 24.9 --> hiển thị người này là bình thường
 * - 25 <= BMI <= 29.9 --> hiển thị người này là thừa cân
 * - 30 <= BMI <= 34.9 --> hiển thị người này là béo phì độ 1
 * - BMI >= 35 --> hiển thị người này là béo phì độ 2 trở lên
 */

function calculateBMI(height, weight) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    console.log("người này là nhẹ cân");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("người này là bình thường");
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("người này là thừa cân");
  } else if (bmi >= 30 && bmi <= 34.9) {
    console.log("người này là béo phì độ 1");
  } else {
    console.log("người này là béo phì độ 2 trở lên");
  }
}
calculateBMI(1.7, 66);

// cú pháp ngắn gọn: ternary operator
// syntax: condition ? ...code : ...code
b > 20
  ? console.log("ternary operator thỏa mãn")
  : console.log("ternary operator không thỏa mãn");
const tmp = b === 30 ? 50 : 60;
console.log(tmp); // tmp = 50

//-----------------------------------------------------------

// switch... case statement
/**
 * syntax
 switch (expression) {
  case value1:
    // Code to be executed if expression matches value1
    break;
  case value2:
    // Code to be executed if expression matches value2
    break;
  // and so on...
  default:
    // Code to be executed if expression does not match any case
}
 */
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Today is a different day");
}

// break là 1 keyword trong js dùng để thoát khỏi câu lệnh switch

/**
 * tạo 1 function kiểm tra học lực
 * function này nhận vào tham số xếp loại học lực (a,b,c..)
 * hiển thị kết quả:
 * - nếu học lực đạt loại A thì là xuất sắc
 * - nếu học lực đạt loại B thì là giỏi
 * - nếu học lực đạt loại C thì là khá
 * - nếu học lực đạt loại D thì là yếu
 * - nếu học lực đạt loại E thì là kém
 */

function learningAbility(gpa) {
  switch (gpa) {
    case "A":
      console.log("xuất sắc");
      break;
    case "B":
      console.log("giỏi");
      break;
    case "C":
      console.log("khá");
      break;
    case "D":
      console.log("yếu");
      break;
    case "E":
      console.log("kém");
      break;
    default:
      console.log("không có xếp hạng");
      break;
  }
}
learningAbility("A");


function equation(a, b, c){
  const signal = b**2 - (4 * a * c);
  if ( signal < 0) {
    console.log("vô nghiệm");
  } else if(signal === 0) {
    console.log("nghiệm kép", - b / (2 * a));
  } else {
    const x1 = - b + Math.sqrt(signal) / (2 * a);
    const x2 = - b - Math.sqrt(signal) / (2 * a);
    console.log("2 nghiệm phân biệt", x1, x2);
  }
}
equation(2, 4, 1 );