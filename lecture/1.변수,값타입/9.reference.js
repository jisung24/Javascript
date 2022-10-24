'use strict';
// ! 값과 참조의 차이(매우 중요!)

// 원시 type => 변수에 값 1개가 그대로 들어가있다. 
// 객체 type => 변수에 값이 시작되는 메모리 값이 저장돼있다.

// 원시 type : Copy by Value(값이 복사돼서 할당됨.)
let a = 1;
let b = a; 

// !객체 type : Copy by reference(똑같은 객체 주소값을 2명이 가리키는거야!)
// ?=> 다른애가 바꿔도 원래의 값이 바껴!! ==> 공동 소유인이 되는거야!! 
// const로 선언해주면 공동소유가 불가능 => 재할당이 안 돼서! 

let jisung = { //이 데이터가 시작하는 주소값이 저장됨.
    name : 'jisung',
    age : 25, 
}
let jisung2 = jisung; // jisung은 주소값을 갖고있는데, 
// 이 주소값이 복사돼서 jisung2한테 감. 
// 즉 같은 객체를 jisung, jisung2가 동시에 가리키게됨. 
// 공동소유인!! => 둘 중 한 명이라도 값을 바꾸면 전체가 바뀜.!!
jisung2.name = "jisung2"; // 다른애가 바꿔도 바뀜. (공동소유인)
console.log(jisung);