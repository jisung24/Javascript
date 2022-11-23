'use strict';
// 배열 생성할 때 주로 literal방식을 많이 사용하자

// 배열 복사 
// shallow copy : 얕은복사 
// -> 복사본에서 변경하면 원본에 영향이 있음.
// -1) slice : 배열을 잘라서 새로운 배열을 만드는데, 인자가 없으면 그대로 전체 얕은 복사함.
//      - 하지만 깊은복사처럼 값이 나온다.. => 얕은복사라고 이해해두자!
let arr1 = [1, 2, 3];
let arr2 = arr1.slice();
console.log(arr2);
arr1.push(4);
console.log(arr1, arr2);  

// -2) Object.assign() : 얕은복사! 
let arr3 = [6,7,8,9];
let arr4 = Object.assign(arr3);

console.log(arr4);
arr4.push(10);
console.log(arr3, arr4);

// -3) spread연산자
let arr5 = [1,5,9,100,120];
let arr6 = [...arr5];
arr6.push(140);
console.log(arr5, arr6);

