'use strict';
// 불변성!! 
// immutability 
// => 모든 object는 변경할 수 없게 만들어야한다. 

// primitive - call by value(값이 복사된다)
// object - call by reference(주소값이 복사된다)

// call by value && call by reference
// primitive or object type이 함수의 인자로 전달될 때 전달되는 방식을 결정한다.
// !!!!!!!!!!!! 호출될 때 인자로 전달되는거야!!!!!!!! 
// 예를 들면 primitive 4와 obj가 전달될 때 방식이 다르다. 

// primitive type이 파라미터로 전달될 때( call by value )

let int = 4;
function printNumber(num1){
    num1 = 8; // call by value는 원본이 피해보지않아.
    return num1; 
}
console.log(printNumber(int)); // 8
console.log(int); // 4 => 즉 primitive원본 값 자체는 변하지 않아.

let obj1 = {
    name : "지성",
    age : 25,
}

function changeObj(obj){
    obj.name = "김지성";
    return obj;
}
console.log(changeObj(obj1));
console.log(obj1);


// 배열
let arr = [1,2,3,4,5];
function copyArr(arr){
    arr.push(6);
    return arr;
}
console.log(copyArr(arr));
console.log(arr);