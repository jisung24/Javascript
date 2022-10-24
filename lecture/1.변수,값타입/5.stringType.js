'use strict';
// ! ========= << I M P O R T A N T >> =========
// ? 나중에 배열과 같이 문자열을 마구마구 다루는 문제 많이 풀어야돼!! 
// ? 배열과는 그냥 세트라고 생각하자!! 
// ? 배열갔다가 문자열 갔다가 하는 방식임..

// String type (문자열 타입)
// - 반드시 "" or ''안에 적어줘야 함. 

// escape문자(특수문자를 출력할 수 있다) 
// \뒤에 적어주면 돼! 

// Template Literal
// -> 문자열을 ""나 ''가 아닌, 백틱(Backtick)이라는 ``문자로 감싸주는 형식
// ! 특징
// ? 1. 여러 줄 지원이 됨.(""나 ''는 지원x => escape문자를 반드시 사용했어야함.)
// ES5
console.log("안녕하세요!\n김지성입니다.");
// ES6
console.log(
`안녕하세요!
김지성입니다.
잘 부탁드립니다!`
);

// ? 2. +연산자를 사용하지 않고도 새로운 문자열을 추가할 수 있다
// ! => 문자열 인터폴레이션 방식(String Interpolation)
// => ${}로 표현식을 감싼다..
const myAge = 25;
// ES5
console.log("제 나이는 " + myAge + "살 입니다!");
// ES6
console.log(`제 나이는 ${myAge}살 입니다!`);

// 문자열 연산 
// +밖에 안 됨. 
let str1 = "김";
let str2 = "지성";
console.log(str1 + str2); // 문자열이 연결됨.
console.log(str1 - str2); // NaN
console.log(str1 * str2); // NaN
console.log(str1 / str2); // NaN
console.log(str1 % str2); // NaN


// 정리
// 1. 문자열은 주로 template engine이라는 방법으로 사용하는게 좋음.
// - 여러 줄 지원, 변수를 안에 사용할 수 있음.
// - 백틱이라는 문자를 사용해서 문자열을 쓰는 방법.
// 2. escape문자!
// 3. 문자열 연산은 +밖에 되지않는다.
// ! 4. 문자열 함수 상당히 중요!!!!!!!!!!!!!!!!!!!!!!
