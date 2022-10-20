'use strict';

// String type (문자열 타입)
// - 반드시 "" or ''안에 적어줘야 함. 

// escape문자(특수문자를 출력할 수 있다) 
// \뒤에 적어주면 돼! 

// template Literal(템플릿 리터럴)
// 문자열을 백틱으로 감싸주는 방식 
// 장점 
// - 여러 줄을 쓸 수 있다 => \n없이 사용할 수 있다.
// -- 긴 문장 쓸 때 아주 편함.
// - 내부에 ${}변수를 사용할 수 있다.

let strMyName = "ji\'s\'u\nng";
let ageJisung = 25;
let templateLiteral = `제 이름은
김지성 입니다. 잘 부탁
드립니다! 
나이는 ${ageJisung}살 입니다!`;
console.log(strMyName);
console.log(templateLiteral);

// 문자열 연산 
// +밖에 안 됨. 
let str1 = "김";
let str2 = "지성";
console.log(str1 + str2); // 문자열이 연결됨.
console.log(str1 - str2); // nan
console.log(str1 * str2); // nan
console.log(str1 / str2); // nan
console.log(str1 % str2); // nan
