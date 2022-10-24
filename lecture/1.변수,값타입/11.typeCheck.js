'use strict';
// typeof : value의 type을 확인시켜준다(9개)
// -> primitive(number, string, boolean, null, undefined, Symbol)
// -> object(object, function, array)
// ==> 값을 타입 문자열로 반환한다. => 문자열을 반환하는거야!!!!


// 정적 타입(type이 변할 수 없음)
// -> 컴파일 언어(java, c, c++ 등등)에선 Int라는 타입을 명시해서 다른 타입을 할당할 수 없음.
// -> 타입이 정해지면 변경이 불가능하다.

// 동적 타입 언어(type이 계속 변할 수 있음)
// -> 동적으로 값이 할당된 값에 따라서 타입이 계속 동적으로 바뀜.
// -> const let 만으로는 타입을 몰라....!!! 

let number1 = 10; 
number1 = "ddwdw"; // 동적으로 type이 계속해서 할당후에 변할 수 있음.
let number2 = 0.6666;
let number3 = 0x11101;
let number4 = Infinity;
let number5 = -Infinity;
let number6 = NaN;
console.log(typeof number4);

// 정리
// 자바스크립트에서도 분명 type이 존재한다.
// ! 동적이고, weakly하다!(not strong, not strict)