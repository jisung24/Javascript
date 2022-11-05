'use strict';

// callback => 다른함수 파라미터에 들어가있는 함수!! 
let add = (num1, num2) => num1 + num2;
let multiply = (num1, num2) => num1 * num2;

let calculator = (num1, num2, action) => {
    // action은 어떤 함수!! => 라고 생각
    // calculator호출할 때 특정함수 call하면 돼!! 
    return action(num1, num2);
}

console.log(calculator(2,3,add));
console.log(calculator(2,3,multiply));

let hello = () => '안녕!';
let myName = () => '김지성';

let intro = (hello, myName) => {
    console.log(hello());
    console.log(myName());
}

intro(hello, myName);

