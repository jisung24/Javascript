'use strict';
// << 함수 선언방식과 종류 >> 

// 1.함수 선언문( function 이름(){~~~} )
// 2.함수 표현식(함수를 변수에 할당하는 방식)
const add = function(num1 = 10, num2 = 10){
    return num1 + num2;
}

// 3. arrow function(화살표 함수)
// => function ketword생략이 가능하다.
// => 과정없이 값만 return이라면 return {} 스킵가능! 
const hello = () => 'hello';
console.log(hello());

// 4. 생성자함수(뒤에 객체에서)
// 5. IIFE ()
(
    function go(){
        return console.log('바로 호출!');
    }
)()