'use strict';
// const vs let 
// let은 재할당이 가능
let a = 10;
a = 14;

// const 재할당이 불가능(반드시 할당을 동시에 해줘야한다.)
const b = 14;
// b = 15; Assignment to constant variable.


// 1. 상수 
const MAX_FRUITS = 5; // 최대로 가질 수 있는 값 => 5

// 2. 재할당 불가능한 그냥 변수
const user1 = {
    nickName : "myUser1",
    char : "전사",
}
// ! 여기서 알아야 하는 점..
// user1에는 메모리가 저장돼있다. 
// 그래서 메모리 값이 바뀌지않는 재할당은 가능
// 예를들어 객체의 프로퍼티 값 증가, 추가 삭제는 가능. 
user1.char = "도적";
console.log(user1);