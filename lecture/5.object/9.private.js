'use strict';

// 접근 제어자 - 캡슐화(숨겨놓는다.)
// private, public, protected => 자바스크립트에서는 이런게 없어.
// js에서의 public은 디폴트 -> 그냥 아무짓도 안 하고 필드 이름 써주면 돼
// private : 프로퍼티 앞에 #을 붙여주면 돼! 
// protected : 
class Person{
    static #IS_PERSON = true; // 마찬가지로 외부에서도 접근 불가능하다. => undefined
    #name;
    #age;
    #phoneNumber;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }
    
    intro = () => {
        console.log(`${this.#name} + ${this.#age}}`);
    }
}

const person = new Person("지성", 25); // 안 돼! intro메서드는 public이어서 접근이 가능하다.   
console.log(person); // 
console.log(Person.IS_PERSON); // undefined 
// 근데 갑자기 누가 내 이름을 바꿔놨어. => 그럼 막 그냥 외부에서 접근해도돼? 
// 절 대 안 돼! => 이제부터 접근 제어자를 배울거야. 