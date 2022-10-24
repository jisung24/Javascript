'use strict';
// application 
// 입력 =>(변수에서 보관) => 처리(연산자, 함수) => 출력

// ex) 선수이름 검색 => 처리해서 => 원하는 선수를 출력
// 선수이름 이라는 data를 잠시 저장하는게 변수.
// 처리하기 위한 연산자( name === 검색한이름 일 때 출력)
// ! 함수는 그 선수 이름을 입력받아서, => 해당선수를 출력해줌.

// ! 처리 부분!!!!!!! ==> 을 담당하는 함수를 배워볼거야!! 

// ex) 숫자 2개를 받아서 더하는 처리를 하는 함수!

/**
 * 두 수를 입력을 받아서 더해주는 함수! 
 * @param {*} firstNum 더해줄 첫 번째 숫자
 * @param {*} secondNum 더해줄 두 번쨰 숫자
 * @returns 더해준 값
 */
function addNumber(firstNum, secondNum){
    return firstNum + secondNum;
}
console.log(addNumber(2,3));

// ! 함수도 object여서 Heap이라는 메모리에 저장됨.
// add라는 변수가 함수가 저장된 주소값을 갖고있음.
// 함수의 이름은 함수 객체의 주소값을 갖고있어.. => 객체와 같아! 

let hello = addNumber; // 똑같은 함수를 가리키고 있어! 
// hello변수도 addNumber이 갖고있는 함수 주소값 갖고있음
console.log(hello === addNumber); // true
console.log(hello == addNumber); // true
console.log(hello(5,6));

console.clear();
console.log(1);

// 동적으로 값이 몇 개든 더해주는 함수!!
function addNumbers(numArr){
    // 배열로 값을 받아서, 배열의 합을 구해주면 돼! 
    // 동적으로 입력을 받으려면 반드시 배열로 받자!
    const sum = numArr.reduce((acc, curr) => {
        return acc + curr;
    })
    //더하기 sum은 더 이상 바뀌지 않으니까 const로 선언됨.
    return sum;
}
console.log(addNumbers([1,2,3,4,5,6]));