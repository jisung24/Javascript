'use strict';
// ! 아주아주 중요함!!!

// 함수와 메모리. 

// 1. 함수의 코드블럭이 메모리로 Heap에 할당이 된다.
// 2. add라는 함수의 이름이 그 메모리의 주소값을 가리키고 있다.
//    ! ==> 함수도 object이기 때문.

// 모든 곳에서 중요한 개념!!!! 

// 함수 정의!! => 함수 이름에 주소값이 부여됨.
function numberAdd(num1,num2){
    return num1 + num2; 
}
let sum = numberAdd; // 똑같은 함수를 가리킴.!! 
console.log(sum(1,2));
console.log(sum(1)); // 인자가 다 전달되지 않으면 NaN이 뜸. 
// 하나만 전달하면 아직 전달 못 한 인자는 undefined가 나온다.