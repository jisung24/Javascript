const isTrue = true; // primitive(메모리 절약)
console.log(isTrue.valueOf());

// 그리고 가장 중요한 점!!!!!!!!!!!!!!!!! 
// (조건문 반복문에서 너무너무너무 중요함!! )
/**
 * Falshy : 불리언으로 바꿨을 때 false가 나오는 값 
 * 0, -0
 * null
 * NaN
 * undefined
 * ''(빈 문자열.. 빈 객체나 공백문자 포함x)
 * 
 * Truthy   
 * -> falshy값을 제외한 모든 값은 전부 트루씨 값임. 
 */

if(0){
    console.log('true');
}else{
    console.log(`0 is falshy`);
}