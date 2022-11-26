'use strict';

// ⭐️ iterable 객체. 
// 객체는 2종류로 나뉨. 
//  -⭐️ 1. iterable 한 객체. 
//  -⭐️ 2. 그렇지 못 한 객체.

// iterable 한 객체. 
// - for..of, spread연산자를 쓸 수 있다. 
// - Symbol.iterator라는 메서드를 특수하게 내장메서드로 지니고있음. 
// - Symbol.iterator는 next함수를 return한다.

// ⭐️ iterable한 객체 
// - 지원되는 기능 
//      - for ~ of 
//      - spread연산자
//      - 구조분해 할당
// - 종류
//      - array 
//      - 문자열 
//      - Map 
//      - Set 

// ❌ iterable하지 않은 객체
// - 일반 객체(for..of, spread ❌ )