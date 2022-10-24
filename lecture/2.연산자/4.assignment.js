'use strict';
// 할당 연산자(=)
// => 표현식이 됨.

let a = 0; //선언문에 0을 할당
// 표현식이 됨.

// 산술연산자와 병행할 수 있음.
a += 3; // a = a + 3;

for(let i = 0; i < 2; i++){
    a += 3;
    //2번 3씩 더해준다.
}
console.log(a);

a **= 2; // a = a ** 2;
console.log(a);