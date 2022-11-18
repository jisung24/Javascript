'use strict';

// 콜백함수! => 내가 나중에 호출해줄게.. 걱정하지마!! 
// 정의 : 다른 함수의 파라미터에 들어가있는 함수! 
// => 그 함수가 끝나면 callback함수가 호출됨! 
// 이 함수 실행되고나면 바로 호출해줄게!! => 줄서기라고 생각해도 돼!

// const add = (a = 1, b = 1) => a + b;
// const multiply = (a = 1, b = 1) => a * b;
// // 더하는, 곱하는 함수! => 오는 부호에 따라서 이 둘 중 하나를 호출해주고 싶어!!
// function calculator(a, b, action) {
//     let result = action(a, b);
//     // 둘 중 하나의 함수값을 result에다가 넣어준다.
//     return result;
// }
// console.log(calculator(6,4, multiply)); // 실행 : 컨트롤 + option + N
// 파라미터로 함수를 전달할 때는 무조건 그냥 주소값 변수만 집어넣어준다! 


// 요약 
// 정의 : 다른 함수 파라미터에 들어가있는 함수를 callback함수라고 한다.
// 그 함수가 호출되고 나서 바로 callback함수가 실행된다.
// 어떤 callback함수를 전달하느냐에 따라서 값이 달라짐. => add를 전달할 수도 있고, multiply가 callback자리로 들어올 수 있다.
// 결국 선언되는 시점까지 어떤 callback함수가 오는지는 알 수 없어. => call할 때 전달될 때 결정이 된다.
// 정확히 언제 호출될지는 알 수 없음!!!


// quiz : 주어진 숫자만큼 0부터 순회하는 함수! 
// => 순회하면서 주어진 특정한 일을 다 수행해야 함. 
// => 5, 순회하는 숫자를 다 출력하고 싶음.
// => 5, 순회하는 숫자의 두배값을 다 출력하고 싶음.

// function number(num, callback){
//     for(let i = 1; i <= num; i++){
//         console.log(callback(i));
//     }
// }
// console.log(number(5, printNumber));
// console.log(number(6, multyNumber));

// function printNumber(number){
//     return number;
// }
// function multyNumber(number){
//     return number * 2;
// }

// 정리 : 함수 내부를 내려가면서 어떤 동작을 하는데, 그 동작을 우리는 callback함수라고 부른다.
// ex) 숫자를 1부터 입력받은 숫자까지 출력해주는데, 만약, 3이 있을경우 출력해주는 callback!
// function printNum(number, printThree){
//     for(let i = 1; i <= number; i++){
//         i === 3 ? printThree(i) : console.log(i);
//     }
//     return;
// }

// function printThree(number){
//     return number === 3 ? console.log('아싸 3입니다!') : undefined;
// }
// printNum(5, printThree);

// 한 번 더 풀기! 

// 주어진 숫자만큼 0부터 순회하는 함수! 
// 단 순회하면서 어떤 함수를 또 적용 시켜야함! => 일을 수행해야 함! 
function iterate(maxNumber, action){ // 선언할때는 어떤 action인지 알 수 없어!!
    for(let i = 0; i <= maxNumber; i++){
        action(i); // i에 대한 어떤 행동을 함! 
        // callback함수는 선언 할 때 까지는 어떤 함수인지 몰라!! => 익명의 함수야! 
        // 호출할 때 직접 알게되는거야!!
    }
}

function printNumber(number){
    console.log(number);
    return;
}
function printMultyNumber(number){
    console.log(number * 2);
    return;
}
iterate(5, printNumber);
iterate(6, printMultyNumber); // 이렇게 함수 이름을 써줘도 되고, 직접 그 함수의 코드블럭을 써줘도 된다.
iterate(7, (number) => number)