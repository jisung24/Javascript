'use strict';
// **함수 선언 방식!!**

// 1. 함수 선언문 => function add(){ ~~ }

// 2. 함수 표현식 => let 함수이름 = function () {}

// 3. arrow function 
//   => function키워드 생략가능(arrow아니면 다 적어줘야함)
//   => 아무것도 없이 값만 return해준다면 괄호와 return생략이 가능함.

// 4. 생성자 함수(객체편에서 다룸)
// ===> 함수이름이 대문자로 시작해야함.

// 5. IIFE(함수를 선언과 동시에 호출하고 싶을 떄!!)
// => 이거 잘 안 쓰는데... 리엑트랑 비슷한거 아니야??
// => 아무튼 아닌거같고 잘 쓰이진 않음 => 그냥 알아만 두자!! 
(
    function print(){
        console.log("Hello World");
    }
)();



let printNumbers = function(num1, num2, ...num3){
    let newArr = [num1, num2, ...num3]; // 스프레드 문법을 사용하면 배열을 합칠 때 함수를 쓰지않아도 돼!! 
    return newArr.reduce((acc, curr) => {
        return acc + curr;
    })

}
let copy = printNumbers; // 주소값을 할당해줌(같은 함수 코드블럭을 가리킴)
console.log(copy(1,2,3,4,5,6,7,8));


// arrow 
// let add = (num1, num2) => {
//     return num1 + num2;
// }

// 만약 arrow에서 어떤 과정도 없이 값만 return하고 싶다면 return과 괄호 생략이 가능하다.
let add = (num1, num2) => num1 + num2; // arrow에서 아무 과정없이 값만 딸랑 return해줄경우에만!! 괄호 return생략 가능! 

console.log(add(5,6));

