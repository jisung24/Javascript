'use strict';
// higher order funtion 
// - 배열에서 사용할 수 있는 고차함수. 

const numbers = [1, 3, 5, 7, 9, 10, 12, 14];

// ⭐️ 1. arr.forEach(callback)
// - 무조건 ❗️배열에서만❗️ 사용가능 ⭕️
// - 배열을 빙글빙글 돌면서 원하는 것을 하고싶을 때! 
    // numbers.forEach((value) => {
    //     console.log(value + 1);
    // })

// ⭐️ 2. arr.find() -> 값을 반환 (arr.filter은 배열을 반환 )
// - 조건에 맞는 값을 찾고싶을 때!
// - 조건에 맞는 값들을 반환한다. => filter와 비슷.
// - 단❗️ 조건에 맞는 값을 (딱 1개) 반환❗️
// - ( 먼저 나오는 값을 먼저 1개 반환한다. )
// - 그래서 우리는 filter를 사용한다 (모두 찾아서 배열로 반환 ⭕️) 
    let findArr = [1,2,3,4,5,6];
    let value = findArr.find((value) => value % 2 === 0);
    console.log(`find >> ${value}`); // 2(값을 반환)

// ⭐️ 3. arr.some(콜백조건) -> true or false
// - 배열에서 콜백조건에 하나라도 맞는게 있다면 true를 반환한다. 
// - ex) 학생 중 김씨가 한 명이라도 있는지 검사! 
    let arr = [1,2,3,4,5,6];
    let result = arr.some((value) => value === 1);
    console.log(`result >> ${result}`);

// ⭐️ 4. arr.every(콜백조건) -> true or false
// - 배열에서 아이템들이 모두 조건에 맞는지 반환.
// - 배열안의 학생이 모두 1반 학생인지 아닌지! 
    let every = [4, 6, 8, 10];
    let result2 = every.every((value) => value % 2 === 0);
    console.log(`every >> ${result2}`);

// ⭐️ 5. arr.filter(콜백조건) -> 조건을 만족시키는 값들을 배열로! 
// - 조건에 만족하는 모든 값들을 반환해서 새로운 배열로 만든다. 
// - 배열에서 a의 개수를 구하기 => filter사용하고 그 변수의 길이 출력하면 돼! 
    let filterArr = [80, 88, 99, 87, 94];
    let classA = filterArr.filter((score) => score >= 90);
    console.log(classA.length); // 2명.  

// ⭐️ 6. arr.map(콜백조건)
// - 배열의 item들에게 단체로 어떤 짓을 해줌! 
// - 조건문을 사용해서 짝수만 어떤 조건을 줄 수 있음.
// - ex) 모든 값들을 배열로 바꿔줌. => obj는 안 됨. 
    let nums = [1,2,3,4];
    let mul = nums.map((value) => {
        if(value % 2 === 0){
            return value * 2;
        }else{
            return value;
        }
    });
    console.log(`map >> ${mul}`);

    let obj = nums.map((value) => [1,2]); // 왜 obj로는 안 돼?
    console.log(obj);

// ⭐️ 7. arr.flatMap(콜백조건)
// - flat시켜줌. 
// - ["my name", "is", "jisung"] -> 을 전부 각각의 배열 원소로.
    let result3 = ['dream', 'coding'].flatMap(text => text.split(''));
    // 문자열을 전부 -> 각각의 낱개로 flat시켜줌. 
    console.log(`flatMap: ${result3}`);

// ⭐️ 8. arr.sort()
// - ❗️기존의 배열을 수정한다 (map은 새로운 배열을 만듬)
// - abcd순으로 출력 
// - 숫자도 문자열로 바꿔서 정렬해줌 -> 1다음 10 다음 5
// - ⭕️ 즉, 앞자리가 작은 순 대로 숫자를 정렬해줌. (1 10 100 20 5);
    let numbers1 = [1, 5, 10, 20, 100];
    console.log(numbers1.sort()); // 1 10 20 5
    // a, b에는 처음 1과 5 
    // a와 b를 뺐을 때 -면 a < b 
    console.log(numbers1.sort((a, b) => a - b)); // [1, 5, 10, 20, 100] 
    console.log(numbers1.sort((b, a) => a - b)); // [ 100, 20, 10, 5, 1 ]
    // a, b => a - b이면 오름차순(작은 것 부터)
    // b, a => a - b이면 내림차순(큰 것 부터)
    // 일단 이해가 안 가면 외우자!! 

// ⭐️ 9. arr.reduce()
// - 배열의 요소들을 접어서 접어서 값을 하나로!!! 
// - 홀수들의 합, 전체의 합, 등등 => map으로도 구현할 수 있음. 
numbers1 = [1,2,3,4,5].reduce((sum, value) => {
    sum += value;
    return sum;
}, 0); // 처음 접어나갈 값을 지정해줌. => 0으로
// 만약 처음 값을 지정 안 해주면 arr[0]값이 자동으로 지정이 됨. 
// [1,2,3,4,5] => (sum, value) 
// 1. 일단 sum에 초기값이 주어진다. 
// 2. value에 1이 들어간다. 
// 3. callback함수 코드블럭이 실행이 돼! 

// 4. 2번째 순환부터는 sum이 sum += value값이 됨. 

// reduce 결론 👉 배열의 값을 하나로 접어서 하나의 값으로 나타냄. 
// --> 즉 배열의 값을 하나의 값으로 어떻게 나타낼 것인가?? 로 해석함.  
