'use strict';
// 함수는 왜 사용하는가? 
// 함수의 호출법!

// 1. 함수 정의
function add(...arr){
    // 여러개의 숫자를 파라미터로 받고,
    // arr이라는 배열로 만들어준다!! 
    // 즉 파라미터 안에 ...는 arr을 배열로 만든다!! 라는 뜻.
    let sum = arr.reduce((acc, curr) => {
        return acc + curr;
    }) //add함수 안에 또 함수가 들어감 -> 당연히 또 또 들어갈 수 있음.

    return sum;
}

// 2. 함수 호출!
console.log(add(1,2,3,4,5,6));