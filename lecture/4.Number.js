'use strict';

// Number type (숫자 타입)
// - 10진수(양수, 음수, 실수)
// - 다른진수(2,8,16 등등)
// - 예외 (Infinity, -Infinity, NaN)

// 1. 10진수(양수,음수,실수)
let integer = 123; //양수
let negative = -123;  //음수
let double = 1.234242; //실수

// 2. 다른진수(2진 8진 16진 등등)
let numberBinary = 0b1111001; // 2진수는 0b뒤에 적어줌
let numberOctal = 0o7765; // 8진수(0o뒤에 숫자 적어줌)
let numberHex = 0xffedd; // 16진수(0x뒤에 적어줌)

// 3. 예외(nan, infinity, -infinity)
// ! 상당히 중요함!!! 
const nan = 123 / "안녕"; // NaN(숫자가 아님)
const infinityPlus = 123 / 0; // 0으로 나누면 양의 무한. 
const infinityMinus = 123 / -0; // -0으로 나누면 음의 무한. 
const zero = 0 / 123; // 0을 다른수로 나눌 수 있어! 
console.log(nan, infinityPlus, infinityMinus, zero);

// 4. bigInt(다룰 일 없음..)
// - 아주 큰 수를 다룰 때 뒤에 n을 붙여준다.! 
let bigInt = 12112332323232322323232232323232323232324242424242242424242424242424242242424242424242n;
console.log(bigInt);
