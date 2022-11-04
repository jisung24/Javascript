'use strict';
function add(...arr){
    console.log(arr);
    return console.log(arr); // arr을 return 
}
add();
// 1. 파라미터의 default value는 undefined이다. (rest parameter를 입력 안 해줄 시 빈배열 뜸.)
// 2. rest parameter(...params) 동적으로 몇 개의 파라미터를 넣을 지 모를 떄 배열로 넣어준다. 
// 3. Default parameter : 파라미터의 디폴트 값을 undefined에서 내가 원하는 값으로 할당을 해줌.
// 4. rest parameters의 활용!!! => 단일 값 매개변수가 있을 때 반드시 제일 뒤로 와야한다. 
// ==> 1,2,3,4,5를 받는다고 치면 num1, num2 , ...num3면 num3에 num1,num2가 가져가고 남는 값이 와야하기 때문에,
// => 남는 거 전체를 받아먹는 것이기 때문에 가져가고 마지막에 rest parameter를 적어줘야한다. 

function printNumbers(num1, num2, ...num3){
    console.log(num1,num2,...num3); // num3는 배열
    // ...num3하면 다시 배열을 풀어버림...!! => 간단해!! 
}
printNumbers(1,2,4,5,6,6,7,8);
