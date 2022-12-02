'use strict';
// destructure (배열, 객체만!)
// ⭐️ spread 연산자와 많이 사용됨! 
// - 배열이나 객체의 속성을 해체하고, 그 개별변수에 담을 수 있게하는 표현식. 

// 객체 구조분해할당 
// : 객체의 key들을 싹 다 분리시켜준다. 
let jisung = { 
    name : "지성",
    age : 25,
    major : "computer engineering",
    intro : () => {
        return console.log(`${this.name}이의 나이 >> ${this.age}, 전공 >> ${this.major}입니다.`);
    }
}
console.log(jisung);
console.log(jisung.intro());