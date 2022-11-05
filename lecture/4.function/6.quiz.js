'use strict';
// 0부터 number까지 순회를 하면서 어떠한 동작을 하게 만드는 함수! 

function multy(number){
    return number *= 2;
}
function iterate(number){
    for(let i = 0; i <=number; i++){
        multy(i);
    }
}
// 함수가 2개 있으면 그 첫 번째 함수안에 2번째 함수를 넣어준다 => 파라미터로 넣어준다.
iterate(3, multy); // => 이런식의 callback함수를 호출 가능!! 
