'use strict';
// 매우 중요!!!!!!!!!!!
// 객체 동적으로 접근하기!! 

let obj = { // 객체 리터럴 방식으로 생성! 
    name : '김지성',
    age : 25,
    major : "computer",
    phone : '010-9287-6446',
}
// 만약 코딩하는 시점에 정해져있다면 마침표 접근자 사용

// 하지만 내가 접근하고자 하는 속성이 정해지지 않았을 때!! 
// 대괄호 문법 사용한다. 
function getValue(obj, key){
    return obj[key]; // key는 무조건 문자열이어야 한다.!!
}
console.log(getValue(obj, "name")); // 문자열로 접근한다.
// 예를 들어 고객이 입력한 key값을 바로바로 출력하는 상태! => 이러면 동적으로 접근해야한다.
// return obj[key] => key는 문자열로 받아줘야 돼! 

function addKey(obj, key, value){
    return obj[key] = value;
}
addKey(obj, "myName", "jisungKim");
console.log(obj);

// 동적으로 : 정해지지 않았다!!
// 동적으로 삭제 : => 어떤 걸 삭제할지 모른다.

function deleteKey(obj, key){
    return delete obj[key];
}
deleteKey(obj, "myName"); // myName 삭제됨. 
console.log(obj);


// 집가서 한 번 서버 data코드를 예제로 연습해보기!! 
