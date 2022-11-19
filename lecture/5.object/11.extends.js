'use strict';
// 상속은 무조건 부모 클래스가 제일 덜 발전하는거다.. 라고 이해하자!! 
// 자식은 부모속성 + 추가적인 속성..(물론 상속 못 받는게 있을 수 있어.)
// 비슷한 class의 중복을 줄여준다. 

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // method
    walk = () => {
        console.log(`걷습니다!`);
    }
    run = () => {
        console.log(`뜁니다!`);
    }
}

class Man extends Person{
    constructor(name, age, isMan){
        // 부모한테 받은 속성 2개도 가져와야함. 
        super(name, age); // 부모 생성자를 호출해줌!! 
        this.isMan = isMan;
    }
    
    walk = () => { // 다형성.. 물려받은 동작이라도 작식이 또 다른 동작을 설정해줄 수 있음. 
        super.walk();
        console.log('남자가 뛴다!');
    }
} // Man은 Person class가 갖는 모든 속성을 다 가져옴. 
// 메서드도 다 가져옴!! => 겹치는 것들을 이렇게 줄여줄 수 있음. 
const man = new Man('김지성', 25, "ture");
console.log(man);
man.walk(); // method도 가져옴.
man.run(); // 마찬가지로 가져옴


// 상속, super, override!! 
