'use strict';

// 함수 

// ⭐️ 1. 함수 선언식 
    function print(){
        return "안녕!";
    }
    console.log(print()); // 함수 호출! 

// ⭐️ 2. 함수 표현식 
    let go = function(){
        return "go";
    }
    console.log(go()); // 함수 표현식 호출! 

// ⭐️ 3. arrow function
// 그냥 값만 return한다면, {} 안 써도 돼!  
    let me = () => {
        return "me"; 
    }
    console.log(me());

    let me2 = () => "me2";
    console.log(me2());


// ✨ 함수 파라미터 종류(arrow function이용해서)

// 1. default parameter 
// - 원래 파라미터의 default값은 undefined인데 지정한 값으로 default값을 정해줌. 
// - 값을 고정시킨다 라는 개념( ❌ ) 
    let num = 10;
    let printNum = (num = 3) => num;
    console.log(printNum(num)); // 만약 10을 넣으면 10으로 return이 됨. 



// 2. rest parameter
    let arr = [1,2,3,4];
    let printArr = (...arr) => { // 여러개의 값으로 받음 
        return arr; // 배열로 rerturn한다. 
    }
    console.log(printArr(2,3,4,5));

// rest parameter + spread연산자 + 구조분해할당! 
    let arr1 = [2,4,5];
    let arr2 = [5,6,7];
    let arr3 = [...arr1, ...arr2]; // spread연산자 : 배열을 풀어버림. => ... 값을 흩뿌린다.

    let two = [1, [23,34]];
    console.log(...two); // 1, [23,34] => 즉 가장 겉에 있는 배열 1개를 벗겨준다고 생각하면 돼! 
    console.log(arr3);

    let user = {
        name : 'kim',
        age : 25,
    }

    // ⭐️ 구조분해할당 : 배열과 객체에서 분리해서 값을 저장할 수 있는 기능! 
    // 👉 객체 속성 구조분해할당 
        let { name, age } = user; // { 속성이름 } = 객체이름 
        console.log(name, age);

    // 👉 배열 구조분해할당 (spread연산자와 보통 함께 사용됨)
        let [_one, _two, ..._three] = [3,4,5,6,7,8,9,10];
        console.log(_one, _two); // 3 4
        console.log(..._three);
        console.log(_three);

    // ...변수(여러개의 값 그 자체) 
    // 스프레드 연산자에 사용된 변수 그 자체 = 배열 

    

