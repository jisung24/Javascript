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