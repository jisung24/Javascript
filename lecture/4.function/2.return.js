'use strict';
// 이것만 기억하자! 
// return을 하거나 undefined를 출력하거나!! 
// => return을 명시적으로 하지않으면 자동으로 undefined가 반환됨. 

function add(num1, num2){
    return num1 + num2; //return이 있거나 undefined거나...!! 
}

function printNum(number){
    let result = number >= 100 ? "100이상" : undefined;

    return result;
}
console.log(printNum(200));
console.log(printNum(100));
console.log(printNum(50));