'use strict';
// 산술 연산자
// +, - * / % **(거듭제곱)
// 거듭제곱은 Math.pow(5,2)로 사용했음
// **은 ES7에서 나옴.

// ! + 연산자 주의점
// ? 형변환 잘못해서 숫자와 문자를 더할 때! 
console.log('1' + 2); // 숫자와 문자열을 잘못 더하면 문자열이 됨.

// /주의점 
// ! 결과가 소수점으로 나옴. => 몫만 구하려면 parseInt로 형변환 해줘야한다.
console.log(5 / 2); // 2.5
console.log(parseInt(5 / 2));