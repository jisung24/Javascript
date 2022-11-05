// 파라미터
// 1. 파라미터의 기본값은 무조건 undefined
// -> 전달하지 않으면 undefined이다!! => 처음에 undefined라고 초기화 됐다고 생각하자!! 

function add(num1, num2){
    console.log(num1,num2);
    console.log(arguments); // arguments객체 => 파라미터 정보가 담김
    return arguments[0] + arguments[1]; // 이런식으로 코딩을 하진 않음...ㅎㅎ
}
console.log(add(4 , 5));

// 파라미터 종류(default, rest, )
// -1. Default parameter : 원래는 undefined인데 디폴트 값을 바꿔줌.
// => 인자 전달 안 해도 undefined지만 내가 지정한 값으로 자동 선언됨.
function printNumber(num1 = 2, num2 = 3){
    return num1 + num2;
}
console.log(printNumber()); //인자 전달 안 하면 원래 undefined인데 2,3으로 default값이 바뀜
console.log(printNumber(4)); //인자 전달 안 하면 원래 undefined인데 2,3으로 default값이 바뀜

// -2 Rest Parameter : 배열로 받아줌.
// => 몇 개 입력받을 지 모르는 상황에서 동적으로 유연하게...!! 
// => ex) 몇 자리 숫자인지, 몇 자리 문자열인지...! 
// => 입력받는 값에 따라 달라진다.!! 
function printArr(...arr){
    let sumOfArr = arr.reduce((acc, curr) => {
        return acc + curr;
    })
    return sumOfArr;
}
console.log(printArr(1,1,2,5,7,9,20,55));

function nums(num1 = 0, num2 = 0, ...num3){
    console.log([num1, num2, ...num3]); // num3은 arr임
}

nums(9,80, 6,6,6,6,6,6,5,7,3,3,3,6,100);
