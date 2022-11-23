'use strict';
// 내장객체 
// 1. wrapper객체
// - primitive type중 null과 undefined를 제외한 
//   (string, number, boolean, symbol, bigint)를 래핑하는 래핑객체를 갖고있다.

const number = 3; // primitive number type 
console.log(number.toString()); // Number wrapper객체로 감싸짐. 

const name = "jiusng";
// name.length();
console.log(name.trim()); // string -> String wrapper 

// 정리
// 원시타입과 관련된 함수를 쓰는 순간 wrapper객체로 바뀐다.
// 하지만 객체는 원시타입보다 훨씬 더 무겁다. 
// 그래서 가능하면 원시타입을 쓰다가 필요할때만 객체로 변환하고,
// 안쓰면 다시 원시타입으로 바꾸는 wrapper객체가 좀 유용함. 


