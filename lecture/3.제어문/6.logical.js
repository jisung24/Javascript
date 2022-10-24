'use strict';
// 논리연산자
// ! 제어문에서 아주아주 자주 사용됨.

// && 그리고
// || 또는
// ! 부정(true <=> false)
// !! boolean값으로 변환

let num = 21;
let value = (num >= 9 && num <= 22) ? "true" : "false";
console.log(value);

while(num !== 8){
    console.log('hello!');
    num--;

    if(num === 8){
        break;
    }
}