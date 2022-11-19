'use strict';

// 접근자 프로퍼티 : getter, setter

class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    intro = () => {
        console.log(this.name + " : " + this.age);
    }
}

const stu1 = new Student('김지성', 25);