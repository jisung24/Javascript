'use strict';
// const vs let 
// let은 재할당이 가능
let a = 10;
a = 14;

// const 재할당이 불가능(반드시 할당을 동시에 해줘야한다.)
// => primitive(값 재할당 불가능)
// => object(주소값만 재할당 불가능)
const b = 14;
// b = 15; Assignment to constant variable.

const user2 = {
    userName : 'user2',
    age : 25,
}
// user2는 첫 번째 메모리 주소가 들어감.
const user3 = {
    userName : 'user3',
    age : 26,
}
// user2 = user3; 이거 안 돼! => 다른 객체 못 가리켜...!! const니까 절대 재할당 불가능.


// 정리
// 1.programming 할 때 let보단 const를 더 사용하자! 
// -> 코드가 길어지면 나중에 나도모르게 값을 바꿀 수 있는데, const는 이를 막아준다.

// 2. let const 둘 다 가리키고 있는 obj의 property의 값을 변경 가능해!
// -> 주소값만 변경 안 하면 그 안의 있는 변수의 값은 얼마든지 변경 가능함.
// -> 즉, const는 재할당만 불가능하지 변경은 가능함.