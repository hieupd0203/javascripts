/**
 * **Bài tập 1: Kiểm tra số dương, số âm và số không**
Viết một chương trình yêu cầu người dùng nhập một số nguyên. 
Sau đó, sử dụng câu lệnh if-else để kiểm tra số đó là số dương, số âm hay số không và in kết quả lên màn hình.
 */

function check(num) {
  if (num > 0) {
    console.log(num, "là số dương");
  } else if (num < 0) {
    console.log(num, "là số âm");
  } else {
    console.log(num, "là số không");
  }
}
check(2);

/**
 * **Bài tập 2: Kiểm tra số chẵn và số lẻ**
Viết một chương trình yêu cầu người dùng nhập một số nguyên.
 Sau đó, sử dụng câu lệnh if-else để kiểm tra số đó là số chẵn hay số lẻ và in kết quả lên màn hình.
 */

function check2(num) {
  if (num % 2 === 0) {
    console.log(num, "là số chẵn");
  } else {
    console.log(num, "là số lẻ");
  }
}
check2(3);

/**
  * Bài tập 3: Tìm số lớn nhất trong hai số
Viết một chương trình yêu cầu người dùng nhập hai số nguyên A và B. 
Sau đó, sử dụng câu lệnh if-else để tìm số lớn nhất trong hai số và in kết quả lên màn hình.
  */

function find(A, B) {
  if (A > B) {
    console.log(A, "là số lớn nhất");
  } else {
    console.log(B, "là số lớn nhất");
  }
}
find(6, 8);

/**
 * Bài tập 4: Tìm số lớn nhất trong ba số
Viết một chương trình yêu cầu người dùng nhập ba số nguyên A, B và C. \
Sau đó, sử dụng câu lệnh if-else để tìm số lớn nhất trong ba số và in kết quả lên màn hình.
 */

function find2(a, b, c) {
  if (a > b && a > c) {
    console.log(a, "a là số lớn nhất");
  } else if (b > a && b > c) {
    console.log(b, "b là số lớn nhất");
  } else {
    console.log(c, "c là số lớn nhất");
  }
}
find2(3, 4, 5);
/**
 * Bài tập 5: Kiểm tra tam giác
Viết một chương trình yêu cầu người dùng nhập ba cạnh của một tam giác. 
Sau đó, sử dụng câu lệnh if-else để kiểm tra tam giác đó là tam giác vuông, 
tam giác đều, tam giác cân hay tam giác thường và in kết quả lên màn hình.
 */
function kiemTraTamGiac(a, b, c) {
  if (
    a ** 2 === b ** 2 + c ** 2 ||
    b ** 2 === a ** 2 + c ** 2 ||
    c ** 2 === b ** 2 + a ** 2
  ) {
    console.log("tam giac vuong");
  } else if ((a === b) === c) {
    console.log("tam giac deu");
  } else if (a === b || a === c || b === c) {
    console.log("tam giac can");
  } else {
    console.log("tam giac thuong");
  }
}
kiemTraTamGiac(4, 5, 3);

/**
 * Bài tập 6: Kiểm tra ký tự đầu tiên của chuỗi
Viết một chương trình yêu cầu người dùng nhập một chuỗi. 
Sau đó, sử dụng câu lệnh if-else để kiểm tra ký tự đầu tiên của chuỗi đó là chữ hoa hay chữ thường 
và in kết quả lên màn hình.
 */

/**
 * **Bài tập 8: Đánh giá điểm số**
Viết một chương trình yêu cầu người dùng nhập một điểm số từ 0 đến 10.
 Sau đó, sử dụng câu lệnh if-else để đánh giá điểm số đó theo tiêu chí sau:

- Điểm từ 9 đến 10: Xuất sắc
- Điểm từ 8 đến 8.9: Giỏi
- Điểm từ 6.5 đến 7.9: Khá
- Điểm từ 5 đến 6.4: Trung bình
- Điểm dưới 5: Yếu
 */

function evaluate(num) {
  if( num < 5) {
    console.log("yeu");
  } else if( num >= 5 && num <= 6.4) {
    console.log("trung binh");
  } else if (num >= 6.5 && num <= 7.9) {
    console.log("kha");
  } else if (num >= 8 && num <= 8.9) {
    console.log("gioi");
  } else {
    console.log("xuat sac");
  }
}
evaluate(6.6);