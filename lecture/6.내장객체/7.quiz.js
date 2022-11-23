'use strict';
// 1. 문자열의 모든 문자를 하나씩 출력해! 

// 2. 사용자의 id를 잘라내서 각각의 배열로 보관.

// 3. 1초에 한 번씩 시계를 출력해보자! 
// -> 노드에서 제공해주는 setInterval() => 구글링해서 한 번 파악해보자! 

const str = "Hello World";
// 반복문 사용할 수 있음. 
for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}

const userid = 'user1, user2, user3, user4';
const arr = userid.split(", ");
console.log(arr);

const date = new Date();
setInterval(() => {
    console.log(date.toLocaleString('ko-KR'));
}, 1000); // 1000밀리초에 한 번씩 callback함수 실행해주자.