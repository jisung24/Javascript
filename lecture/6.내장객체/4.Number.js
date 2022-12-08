'use strict';

// 숫자 계산할 때 필요한 모든 메서드들!! 
// Math class에서 static 메서드들이 많음.

console.log(Math.E); 
console.log(Math.PI); // pi값. 

console.log(Math.abs(-10)); // 절대값.

// 무조건 올림, 내림
console.log(`CEIL >> ${Math.ceil(1.2)}`); // 무조건 올림.
console.log(Math.floor(1.7)); // 아예 내려버림.

// 반올림 0.5
console.log(Math.round(0.5)); // 올림
console.log(Math.round(0.2)); // 내림

// 정수만 반환.
console.log(Math.trunc(1.5434343)); // 정수만 반환한다. 

// 최대 최소값! 
let arr = [999,555,578,1024];
console.log(Math.max(...arr)); //왜냐면 배열의 변수는 주소값을 갖고있다니까!! => 배열 숫자들만 뽑아와야 해! 
console.log(Math.min(...arr))// 최소값을 return해준다!! 

// 거듭제곱 
console.log(3 ** 2); // 3의 2제곱 
console.log(Math.pow(3, 4)); // 3의 4제곱.

// 제곱그(루트)
console.log(Math.sqrt(9)); // 제곱근
console.log(Math.sqrt(81)); // 제곱근

// 랜덤한 값을 반환!!!!!!!!! 0 - 0.9
console.log(Math.random());

// 0부터 10까지 반환.
console.log(parseInt((Math.random() * 10)) + 1); // 0부터 10까지 소수점..
// 1부터 10까지 반환.
console.log(parseInt(Math.random() * 10 + 1))

// 복습! 
// 2022-12-08복습완료! 