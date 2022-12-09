// ❗️ 정리 ❗️
// ⭐️ Falshy => false가 나오는 값! 
// 1. 0, -0 
// 2. undefined 
// 3. null 
// 4. NaN 
// 5. ''(빈 문자열.. 띄어쓰기도 안 돼, 빈 객체도 안 돼! )

// ⭐️ Truthy
// Falshy값을 제외한 모든 값 

// 값 앞에다가 !!을 붙이면 true인지 false인지 알려준다! 
console.log(`truthy or falshy >> ${!!0}`); // false
console.log(`truthy or falshy >> ${!!-0}`); // false
console.log(`truthy or falshy >> ${!!null}`); // false
console.log(`truthy or falshy >> ${!!NaN}`); // false
console.log(`truthy or falshy >> ${!!undefined}`); // false
console.log(`truthy or falshy >> ${!!''}`); // false

console.log(`truthy or falshy >> ${!!{}}`); // true

