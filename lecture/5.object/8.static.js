'use strict';

// 정적 프로퍼티와 정적 메서드(static)

// 모든 인스턴스들은 속성과 메서드는 같지만 값은 다르다.
// 하지만 모든 인스턴스가 공유하고자 하는 속성과 메서드가 있다면?
// 예를들면 학생1,2,3,4,5는 같은 학교이름을 지닌다.
// 이럴 땐 class속성, class메서드를 만들면 된다. 

class Notebook{
    static IS_COMPUTER = true;
    // static 프로퍼티는 생성자 위에..! 가장 먼저 생성
    constructor(cpu, company, ram){
        this.cpu = cpu;
        this.company = company;
        this.ram = ram;
    }
    // static 메서드는 class메서드여서 this를 사용할 수 없음. 
    static type = () => {
        console.log("컴퓨터입니다.");
    }
    // 인스턴스 레벨만 this를 사용할 수 있음.
    intro = () => {
        console.log(`${this.cpu}와 ${this.company}와 ${this.ram}입니다!`);
    }
}
Notebook.type(); // 클래스 타입의 메서드 => ah.. static이 붙었겠구나 생각하자.
// 와... 이거 그거야!!
// Math.floor()같이 바로 class에서 floor메서드 쓰잖아!! => 이거 static이야..
// 와.. 이건 몰랐네.. 
// 객체.메서드면 객체는 소문자엿어야지 맞네.. 대문자면 무조건 class라고 생각하자!! 
// class의 메서드면 static method! 
console.log(Notebook.IS_COMPUTER);