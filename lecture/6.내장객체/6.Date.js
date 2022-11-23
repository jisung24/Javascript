'use strict';
// 날짜관련 함수! 
// 중요함 이것도.
// class Date{ }
const date = new Date(); // Date class
console.log(date);

// Date class의 static함수 이용하기! 
console.log(Date.now());

// 인스턴스 메서드 이용하기. 
// - get 
const now = new Date();
console.log(now.getFullYear()); // 년도 받아오기
console.log(now.getMonth()); // 달 받아오기.(단!! 1월은 0부터 시작한다.)
// 11월이 지금이니까 11 - 1해서 10을 받아온다. 
// 1월이 숫자 0으로 표기되기 때문에.
console.log(now.getDate()); // 일 받아오기

console.log(now.getDay()); // 일요일 0 ~ 토요일 6 수요일 3
console.log(now.getHours()); // 시간 받아오기.(14 => 오후 2시)
// 시간 분 초 까지 다 가져올 수 있음. 

// 한국식으로 날짜 표현하기
console.log(now.toLocaleString('ko-KR')); // 한국식으로 날짜 표현하기