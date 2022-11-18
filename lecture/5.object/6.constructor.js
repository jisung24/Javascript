'use strict';
// 객체 생성법
// - 객체 리터럴 : 하나씩만 
// - 생성자 함수 : 비슷한 객체면 여러 개 찍어낼 수 있음.
// 생성자 함수
// 복습(함수 선언 방식!)
// 1. 함수 표현식 const add = function{}
// 2. 함수 선언문 function add(){}
// 3. 화살표 함수 () => a + b;
// 4. IIFE : (function(){})
// 5. 생성자 함수 => 오늘 배움! ⭕️

// 생성자 함수! 
// => 비슷한 객체들을 여러 개 만들어주고 싶을 때
// ex) 학생1,2,3,4
// 자바 클래스라고 생각하면 돼! 

//  생성자 함수 => 객체를 만들어주는 특별한 함수! (클래스라고 생각하자)
// 대신 호출 할 때 new라는 키워드를 붙여서 호출을 해줘야돼!!
function Person(name, age){
    this.name = name;
    this.age = age;
    this.intro = () => {
        console.log(`${this.name}입니다.`);
    }
    return this; // 생략도 가능 => 엔진이 자동으로 리턴해줌.
}
const person1 = new Person('지성', 25); // new라는 키워드를 이용해서 호출한다! 
// 다른 함수들은 전부 안 붙여도 되지만 생성자 함수는 호출 할 때 new를 붙여야한다.
// 이 생성자 함수는 객체를 return해주는 특별한 함수야!! 
console.log(person1);

function printKey(obj, key){
    return obj[key];
}
console.log(printKey(person1,"name"));


