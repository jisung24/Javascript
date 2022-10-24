'use strict';

// boolean type (불리언 타입)
// -참 : true(소문자)
// -거짓 : false(소문자)

// 활용예시(~~ 인지 아닌지) 
// !변수를 사용해서 변수 값을 바꿀 수 있음.
let isEnrolled = true; //학생이 등록됐는지 안 됐는지
let isFree = false; //쉬는시간이 있는지 없는지!
let isSwitchOn = true; //불이 켜졌는지 꺼졌는지!

// ! 중요한 내용 (값을 boolean type으로 바꿨을 때 true가 되는 값과 false가 되는 값이 있음 이를 구별해줘야함.)
// 값 중 참인 값과 거짓인 값 (이 값과 연관 시켜서 boolean type을 써주면 센스있겠네...)
// ? 어떤 값 앞에 !!를 붙이면 Boolean type으로 바꿔준다!! 

// Falshy(거짓인 값)
// - 숫자 0, -0 => 이 값을 if문에 넣어서 센스있게~ 
// - ``(텅 빈 문자열 => 띄어쓰기 있으면 true됨.)
// - null
// - undefined
// - NaN 
// ==> 무언가 값이 없고, 숫자가 아니고, 0이면 false이다.
// ==> Infinity도 true이고 아무튼 false만 외우고 나머지는 전부 true이다. 

// Truthy(참인 값)
// false가 아닌 값을 제외한 모든 값! 
// - 텅텅 빈 object {}, Infinity, " "

// 정리
// 1. true, false가 나올 수 있는 값 전부!(소문자로...)
// 2. !!(값 or 값이있는 변수) => boolean으로 바꿔준다.
// ? 3. falshy, truthy값들 암기하기!!
// 4. `~인지 아닌지` 라고 해석한다.!!

console.log(`boolean으로 값 변환 >> ${!!''}`); // 빈문자열
console.log(`boolean으로 값 변환 >> ${!!0}`); // 0
console.log(`boolean으로 값 변환 >> ${!!-0}`); // -0
console.log(`boolean으로 값 변환 >> ${!!null}`); // null
console.log(`boolean으로 값 변환 >> ${!!undefined}`); // undefined
console.log(`boolean으로 값 변환 >> ${!!NaN}`); // NaN
// 0 -0 '' null undefined NaN => 이 6가지만 falshy 값이고 나머진 다 true이다!

console.log(`truthy >> ${!!{}}`);
console.log(`truthy >> ${!!3}`);
console.log(`truthy >> ${!!" "}`);
// ! ""와 " "를 비교하는 방법 => !!를 사용해서 boolean type으로 바꿔본다!! 
// ! ''는 falshy, " "는 공백문자가 있는거지 비어있는게 아니야! => truthy!!
 

