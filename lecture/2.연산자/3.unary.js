'use strict';
// 단항연산자 Unary(유너리) Operator
// +(양) : 숫자를 +로 바꿈
// -(음) : -1을 곱하는거와 같음 
// !(부정) : 그 값의 boolean값을 반대로 바꿈.
// ex) 5는 true인데 false로 바꿈.
console.log(!5);

// !부정연산자
// 그 값의 boolean type을 반대로 바꿈


// +연산자
// 숫자가 아닌 type들이 어떤 숫자로 변환되는지 알 수 있음.
console.log(+true); // 1
console.log(+"test"); // NaN

// !!의 원리!!! 
// !를 사용해서 그 값에 반대되는 boolean값을 출력
// !를 한 번더 써서 그 값의 원래 boolean값을 쓴다.!
// ex) 5의 원래 boolean값을 알아보자!
console.log(!5); //false
console.log(!(!5)); // true