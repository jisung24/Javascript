'use strict';

// 증감연산자(++, --)

// ! 주의 
// a++(후위연산자) : 필요한 연산을 하고 그 뒤 값을 증가시킴
// ++a(전위연산자) : 값을 먼저 증가시키고, 그 연산을 한다.
let a = 0;
let b = a++; // 힐당을 먼저하고 a를 증가시킴. 
let c = ++a; // a를 먼저 증가시키고 할당연산자를 실행함.
console.log(`b >> ${b}`);