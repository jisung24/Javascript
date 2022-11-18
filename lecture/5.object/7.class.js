'use strict';

// 객체 생성법 
// - 객체 리터럴
// - 생성자 함수 : 프로토타입때문에 가능 => 뒤에 나옴. 
// - class : es6부터 지원되기 시작함. 
//      - ❗️생성자 함수는 이제 안 써!!!!!!! 
//      - 최신 문법인 class쓰자!!! 
// 클래스를 통해서 객체를 만드는데, 그 객체를 클래스의 인스턴스라고 한다. 

class Person{
    constructor(name, age){ // new키워드로 객체를 생성할 때 호출돼서 필요한 값이 전달된다.
        this.name = name;
        this.age = age;
    }
    // 단 메서드는 생성자 밖에다가 생성해줘야 돼!
    intro = () => { // 함수 선언문은 불가능하다. 
        console.log(this.name +'+' + this.age);
    }
}

const person1 = new Person('지성', 25); // person1은 Person 클래스의 인스턴스이다.
console.log(person1);
person1.intro();

// 얘는 그 어떤 인스턴스도 아니다.(그냥 객체일 뿐.)
// 오로지 클래스를 통해서 민들어진 애들만 인스턴스라고 부른다.
const person = {name : 'john', age : 26};
