'use strict';

// 사물함에 들어가있는 값의 형태!
// 지금까지 변수 공간을 배웠고, 이제는 그 공간안에 어떤 type을 넣을 수 있는지 배움.


// Value의 종류
// ! 나올 수 있는 모든 값!! ==> 이 안에서 모든 값이 결정된다고 생각하면 돼!
// _1) primitive(원시타입) => 단일 데이터
// - number(10진수, 그 외 진수, 예외)
// - string(문자열)
// - boolean(true false) => 이거 아니면 저거~
// - null(null => 아무 값이 없음을 할당해줌) => typeof는 object로 나옴. 왜지...?(버그...!)
// - undefined(아직 값이 정해지지않음 => 할당이 아직 안 됨.)
// - Symbol

// _2) object(객체타입) => 복합 데이터
// - object
// - function
// - array

// _3) type확인(Symbol 빼고 전부 소문자로 시작해...!!)
// - typeof value
console.log(typeof 3); //number
console.log(typeof true); //boolean
console.log(typeof false); //boolean
console.log(typeof 3.44445); //number
console.log(typeof { name : 'jisung' }); //object
console.log(typeof [1,2,3,4,5]); //object
console.log(typeof hello); //function
console.log(typeof '');
console.log(typeof null); //object로 나옴.
console.log(typeof undefined);


function hello(){
    return 3;
}