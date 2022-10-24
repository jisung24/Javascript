'use strict';
// 삼항연산자
// 조건이 2가지인 경우 그냥 삼항연산자로 간단하게 사용한다.


if(""){ // ()가 false라서 출력이 안 돼! 
    console.log('이거 출력안됨.');
}else{
    console.log('이거 출력돼!');
}

let answer = "" === true ? 'true' : 'false';
// 저 return값을 answer에다가 넣는거야!
console.log(answer);