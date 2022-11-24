'use strict';

// 배열 복사 메모리
// 1. shallow copy 
// - js에서 배열, 객체 복사를 할 때는 항상 얕은 복사가 이루어짐. 
// - 반드시 주소값이 전달이 되기 때문이다. 
// - 새로운 배열이나 객체가 만들어지는 것이 절대 아니고, 그냥 얕은복사야!! 
// - Array.from, concat, slice, spread Object.assign 등등 원래는 모두 얕은 복사임. 
// - 항상 배열이나 obj가 복사되면 새로운 것이 만들어지는 것이 아니라, 
// - ⭐️ obj메모리 주소값이 전달이 된다. ⭐️
// - 

let class1 = [
    // 학생 배열. 
    { name : '김지성', age : 25},
    { name : '이지성', age : 24},
    { name : '박지성', age : 23},
    { name : '최지성', age : 22},
    { name : '조지성', age : 27},
]

let class2 = Array.from(class1); // 새로운 배열을 만들어 return한다.
console.log(class2.push({ name : '장지성', age : 30 }));
// 2반 학생 추가! => 새로 전학왔어.
console.log(class1, class2); // 깊은 복사. 

