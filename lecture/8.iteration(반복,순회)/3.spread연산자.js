'use strict';
// 모든 이터러블은 스프레드 될 수 있다. 
// => 값이 하나하나씩 쫙 펼쳐질 수 있다. 

// 함수 파라미터로 여러 값을 받을 때! 사용. 
// EcmaScript 2018년도에 추가됨. 

// 함수 호출, rest parameter, obj(array) deep copy! , 배열, obj연결!

// calc(...arr) => 배열을 풀고 여러개의 값을 넘김. -> rest parameter function calc(...values) 이런 논리야! 

let arr = [1,2,3,4,5];

function makeArr(...values){ // 여러개의 값을들 받고 ...을 풀면 배열이 됨.
    return values; // 배열임.
}
console.log(makeArr(...arr)); // 배열을 풀고 배열값을만 전달!! 

// 2. array obj copy!!! 
let arr2 = [...arr]; // deep copy
arr2[3] = 10000;
console.log(arr, arr2);

let me = {
    name : "지성",
    age : 25,
}

let jisung = {
    ...me,
    phone :  "01092876446",
}
jisung.name = "김지성";
console.log(me, jisung);

// 3. array,obj합치기
// obj는 iterable이 아니지만, 합치기 할 때는 spread연산자 사용할 수 있다.
let arr4 = [100,200,300];
let arr3 = [400,500,600];
console.log([...arr2, ...arr3]);

let a = { name : 'jisung' };
let b = { age : 25 };
let c = {
    ...a,
    ...b,
};
console.log(c);

// 정리
// ⭐️ spread연산자 정리! ⭐️
// 1. 함수 호출할 떄 값들을 전달 func(...values) : 여러 값들을 동적으로 전달
// 2. rest parameter : 여러 값들을 받을 수 있다. 
// 3. array, obj의 deep copy
// 4. array 합치기 