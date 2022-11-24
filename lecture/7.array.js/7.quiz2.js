'use strict';
// 5이상의 숫자들의 평균을 구하자! 
const nums = [3, 16, 5, 25, 4, 34, 21];

// 1. filter로 5이상만 거른다음 reduce! 
let arr = nums
        .filter((value) => value > 5) //[ 16, 25, 34, 21 ]
        .reduce((acc, cur, _, array) => acc + cur / array.length, 0);
console.log(arr);
// sum을 어떻게 할 거나면, 계속 value와 더해줄것이다~ 이렇게 해석한다. 

