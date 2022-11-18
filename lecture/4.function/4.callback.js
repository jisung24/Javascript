'use strict';
// call back함수 => 내가 나중에 호출해줄게!! 
// 정의 : 다른 함수 파라미터 안에 있는 함수의 이름을 callback함수라고 부름!!
// 다시!!! => 파라미터 안에 있는 함수야!!!!!!
// 자바스크립트 공부 여기서부터!!!!
const add = (num1 = 3, num2) => num1 + num2; 
const multiply = (num1, num2) => num1 * num2;
// 함수는 한 가지 일만...!!

/**
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} action 곱하거나 더하거나 callback함수 호출!
 */

// action은 callback함수이다. 
// calc
function calculator(num1, num2, action){
    let result = action(num1, num2);
    return result;
}
console.log(calculator(4,100, multiply)) //여기서 callback함수는 호출을 하지 않아.
// 왜냐면 호출을 하는 순간 바로 호출이 되기때문. => 1,2를 받고나서 그 뒤에서 호출하게끔!!!  
