'use strict';
// 언제 if 언제 switch? 

// switch : 정해진 범위안의 값에 대해 특정한 일을 하는 경우
// ex) 월화수목금토일, 0부터 10까진~ 10부터 20까진~ 등등
// if else if를 계속 사용하면 너무 복잡해짐.

let number = 20;

switch(parseInt(number / 10)){ //case뒤에는 값이 온다.
    case 0:
        console.log('몫 없음');
        break;
    case 1:
        console.log('몫 있음');
        break;
    default:
        console.log('몫 다른거...!!');
        break;
}