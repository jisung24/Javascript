'use strict';
// destructure : 구조분해할당! 
// ⭐️ spread 연산자와 많이 사용됨! 
// - data 그룹화를 쉽게 할 수 있다. 

const arr = [2,4,6,8,10];
const [first, second, ...others] = [2,3,6,8,10];
console.log(others);
// 음.. 배열 원소지만, 그 안에서도 좀 더 의미를 더하기 위해서, 사용함. 
// 배열 안에서도 조금 더 의미있는 이름을 전달할 수 있어. 
const [x, y, z = 0] = [1, 2, 8];
// 할당을 해줘도 값이 있다면 그게 우선이라 8이 들어감. 
console.log(x, y, z);


// obj
// 이렇게 변수를 객체안에 넣어서 key를 따로 분해해주는 이거 상당히 많이 사용함. 
// 객체의 me.age가 아니라 바로 age로 사용이 가능하다.

class Jisung{
    constructor(name, age, school){
        this.name = name;
        this.age = age;
        this.school = school;
    }
}

const jisung = new Jisung("김지성", 25, "가천대학교");
let { name, age, school } = jisung;
console.log(name, age, school);


// quiz 
function changeColor(color){
    console.log(color);
}

const prop = {
    names : "button",
    styles : {
        size : 20,
        color : "black",
    }
}
const { names } = prop;
const { size, color } = prop.styles;
changeColor(color); // 바로 넘겨준다.