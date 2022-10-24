'use strict';
// ! 아주아주 중요함!!!

// 함수와 메모리. 

// 1. 함수의 코드블럭이 메모리로 Heap에 할당이 된다.
// 2. add라는 함수의 이름이 그 메모리의 주소값을 가리키고 있다.
//    ! ==> 함수도 object이기 때문.
// 3. 
function add(a,b){
    const sum = a + b;
    return sum;
}

const add2 = add; 
// 동일한 함수를 가리키고 있음
add(3,4);
add2(5,6);