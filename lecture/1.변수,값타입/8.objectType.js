'use strict';

// object type vs primitive type
// -> 값을 여러 개 vs 값을 한 개 저장. 
// ! -> ot는 Heap에 pt는 data,stack에 들어가있음. 
// ? -> pt는 값 자체가 들어가있다. ot는 메모리주소가 들어가있다.

// object type
// 여러가지 primitive type의 data를 묶어서 저장할 수 있어.
// 사이즈가 정해져있지 않음(언제든지 값이 추가되거나 삭제될 수 있어.)
// 그래서 Heap에 저장됨.(동적으로 줄었다 늘었다 하는 친구들 저장)
// 코드가 여러 칸의 memory에 걸쳐서 저장이 됨. 
// 근데 jisung변수엔 memory가 시작하는 주소값이 있음 
// 예를들어서 jisung data들이 1번 - 5번까지 차지해
// 그럼 jisung는 1번 주소값이 저장돼있어. 
// ! 객체 속성 접근법 .로 접근한다.!!!!!!!!

let user1 = {
    name : 'user1',
    age : 20,
}
// name,age가 저장돼있는 첫 번째 메모리 값을 user1이 저장해주고 있음.
const user2 = user1; // 메모리 값을 복사했어...!!(똑같은 객체를 2개의 변수가 조종하고있음.)
// const로 지정했어도 그 안의 값 메모리 값을 변환시키는게 아니라면 객체는 변환 가능하다.
user2.name = "user2";
user2.weight = 70;
// template literal방식은 객체를 직접 나타내주지 못 함.
console.log(user1);
console.log(user2);
