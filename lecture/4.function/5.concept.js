'use strict';
// 불변성!! 
// immutability 
// => 모든 object는 변경할 수 없게 만들어야한다. 
2
// primitive - call by value(값이 복사된다)
// - 장점 : 복사를 하기 때문에 원본값 보존됨.
// - 단점 : 복사를 하기 때문에, 메모리 사용량이 늘어남.

// object - call by reference(주소값이 복사된다)
// - 장점 : 직접 참조를 하기에 빠르다.
// - 단점 : 원래 값이 손해를 본다 ===> 이거때문에 call by reference로 전달하면 값을 바꾸면 안 돼! => 원본마저 바뀌기 때문.
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


// 배열 => 마찬가지로 call by reference! => 이 배열이 함수로 전달되면 주소값이 전달돼서
// => 직접 배열의 원본이 바뀐다. 
let arr = [1,2,3,4,5];
function copyArr(arr){
    arr.push(6);
    return arr;
}
console.log(copyArr(arr));
console.log(arr);