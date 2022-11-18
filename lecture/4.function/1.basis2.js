'use strict';
// 0. 함수는 왜 사용하는가? 
// => 재사용성을 높이고, 코드 길이도 줄일 수 있다. 
// 시작!s
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
console.log(add(1,2,3,4,5,6)); // 함수 안에 함수가 또 온다...!! 

// 3. 함수에서의 메모리!! 
// =====> 가장 중요하다!!!! 너무 중요! 
// 함수의 코드블럭이 있는 주소값이 sumOfArr이라는 변수에 들어가있음.

function sumOfArr(...arr){
    return arr.reduce((acc,curr) => {
        return acc + curr;
    })
}
console.log(sumOfArr(100,200,300,400));
// sumOfArr이라는 변수는 저 코드블록을 가리키는 변수이다. 
const addArr = sumOfArr; //같은 값을 가리킴.
console.log(addArr(6,9,155,170));

// 3번 메모리 정리!
// 함수 이름(변수) => 함수 코드블럭의 주소값이 들어있음.!! 
// 변수 = 함수이름 => 깊은복사! 

/**
 * 
 * @param {*} num1 첫 번째 숫자(default value is undefined!!) 
 * @param {*} num2 두 번째 숫자(default value is undefined!!)
 * @returns num1 + num2(두 수의 합)
 */
function sum(num1,num2){
    console.log(num1);
    console.log(num2); // 만약 다 전달해주지 않는다면?
    return num1 + num2;
}
// sum(); // 무조건 앞에서 부터 채워 넣어야한다. => 첫 번째 값 안넣어줄순없어! 

// 5. what is function return????? 
// 함수를 호출했을 때 유져가 원하는 값을 return해준다.!! 
// 아무것도 return해주지 않으면 undefined를 출력해준다!! 
// 즉 parameter, return모두 default value is undefined!

function sub(){
    return; // undefined! 
}
console.log(sub());
// 그냥 return => if문에서 어떤건 출력하고싶고 어떤건 출력하고싶지 않고.. 구분해줄 수 있을 때! 

function printNumber(number){
    if(number >=100){
        return;
    }else{
        return number;
    }
}
console.log(printNumber(100));
console.log(printNumber(80));
console.log(printNumber(10000));
