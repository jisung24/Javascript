'use strict';
// for은 앞에서 함.
// while문이랑 제발 친해지자...!!

// while(조건) { }
// 조건이 false가 될 때 까지 코드를 반복 실행한다.
let num = 5;
// while(num) => 무한 true...

while(num >= 0){ // num가 0보다 크면 계속 반복해줘!
    console.log(num);
    num--;
}
// 즉 괄호안에가 반대가 될 때 까지...
// while(num >= 5) => 5보다 작아질 때 까지!
// while(num) => num이 false가 될 때 까지!

let num1 = 1;

while(" "){ // num1이 3이 아니면 계속 실행해줘!
    num1++; 
    if(num1 === 10){
        break;
    }else{
        console.log(num1);
    }
}
// 즉 true와 break을 섞어서 사용하는 문법을 사용하자!

let num2 = 3;
do{ // 일단 해!
    console.log(`num2 >> ${num2}`);
}while(num2 === 2) //한다음에 조건을 검사한다.

// while은 조건을 먼저 검사하고 맞으면 코드를 실행시작함.
// do-while은 일단 한 번은 코드를 실행하고나서 조건을 검사해.
// => 이후 조건이 맞으면 계속 하는거고 아니면 1번만 출력.
// ==> 즉 무조건 1번은 출력해!!!!!!!!!!!!