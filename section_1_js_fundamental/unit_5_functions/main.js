// khái niệm: Function là 1 khối các câu lệnh thực thi 1 nhiệm vụ nào đó
// để thực thi được function thì phải gọi đến function đó

//---------------------------------
// cú pháp khai báo 1 function
// cách 1: function declaration function ten_function() {// câu lệnh để thực hiện chức năng nào đó  }
function sayHi() {
    console.log("xin chao");
}
// lời gọi function để thực thi các câu lệnh trong function
sayHi();

// cách 2: function expression const ten_function = functionz() {// các câu lệnh }
const sayHello = function() {
    console.log("xin chao hello");
}
sayHello();

//-----------------------------
function calculateTotal(num1, num2){
    const sum = num1 + num2;
    console.log(sum);
}
calculateTotal(12, 13);

const total = function(num1, num2) {
    const sum1 = num1 + num2;
    console.log(sum1);
}
total(10,11);

//----------------------------------------------------------------
// function return

function calculateTotal2(num1, num2){
    const sum = num1 + num2;
    console.log(sum);
    return sum;
}
const total1 = calculateTotal2(15, 20);
console.log(total1);

// scope
// 1: global scope
const globalValue = 12;

function name(){
    console.log(globalValue);
}

//2: function scope
function name1(){
    const globalValue2 = 14;
    console.log(globalValue2);
}
name1();

//-------------------------------------------------------------------------
// function hoisting
// function declaration: sẽ có hoisting
sayHi1()
function sayHi1() {
    console.log("xin chao");
}
// function expression: khôn có hoisting
sayHello2();
const sayHello2 = function() {
    console.log("xin chao hello");
}