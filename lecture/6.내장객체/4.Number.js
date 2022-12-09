'use strict';

// 숫자 계산할 때 필요한 모든 메서드들!! 
// Math class에서 static 메서드들이 많음.

// ⭐️ 1. PI : 파이 값. 
    console.log(Math.E); 
    console.log(Math.PI); // pi값. 

// ⭐️ 2. Math.abs() : 절대값 
    console.log(Math.abs(-10)); // 절대값.

// ⭐️ 3. Math.ceil : 무조건 올림 
// ⭐️ 4. Math.floor : 무조건 내림(floor이 바닥 이라는 뜻이니까.. )
// ⭐️ 5. Math.round : 반올림, 내림 => ceil, floor은 무조건 올림 내림, 얘는 0.5기준으로 올림 내림. 
    console.log(`CEIL >> ${Math.ceil(1.2)}`); // 무조건 올림.
    console.log(Math.floor(1.7)); // 아예 내려버림.
    console.log(Math.round(0.5)); // 올림
    console.log(Math.round(0.2)); // 내림
    let num2 = 24.554; // 셋에서 둘로 반올림! 
    // 소수점 반올림도 toFixed주면 돼! 
    console.log(num2.toFixed(2)); // 셋에서 둘로 반올림해서 나타냄. 

// ⭐️ 6. Math.trunc() : 소수점 다 버리고 정수만 반환한다.! 
    console.log(Math.trunc(1.5434343)); // 정수만 반환한다.
    console.log(`trunc >> ${Math.trunc(4.56677)}`);
// tip : 그럼 소수점 n번째 자리까지 출력하는 함수! 
// ✨ toFixed()
    let number = 100.4545;
    console.log(`소수점 2번째 >> ${number.toFixed(2)}`); // 소수점 2번째 자리까지 출력
    console.log(`소수점 4번째 >> ${number.toFixed(4)}`); // 소수점 4번째 자리까지 출력

// ⭐️ 7. Math.max(), Math.min() : 최대값, 최소값을 구해준다!! 
    let arr = [999,555,578,1024];
    console.log(Math.max(...arr)); //왜냐면 배열의 변수는 주소값을 갖고있다니까!! => 배열 숫자들만 뽑아와야 해! 
    console.log(Math.min(...arr))// 최소값을 return해준다!! 

// ⭐️ 8. Math.pow(3,4) : n의 m제곱 
console.log(3 ** 2); // 3의 2제곱 
console.log(Math.pow(3, 4)); // 3의 4제곱.

// ⭐️ 9. Math.sqrt(n) : 루트 n(제곱근 n) : 
    console.log(Math.sqrt(9)); // 제곱근
    console.log(Math.sqrt(81)); // 제곱근

// ✨ 10. Math.random() : 랜덤한 값을 반환!!!!!!!!! 0 - 0.9
    console.log(Math.random());

    // 0부터 10까지 반환.
    console.log(parseInt((Math.random() * 10)) + 1); // 0부터 10까지 소수점..
    // 1부터 10까지 반환.
    console.log(parseInt(Math.random() * 10 + 1))


// ❗️ 정리  
// 1. Math.PI() : pi출력 
// 2. Math.abs() : 절대값 
// 3. Math.ceil() : 무조건 올림 
// 4. Math.floor() : 무조건 내림 
// 5. Math.round() : .5를 기준으로 올림 내림 (반올림!)
// 6. Math.trunc() : 소수점 다 버리고 정수만 반환! 
    // 숫자.toFixed(n) : 소수점 n번째 자리까지 반환
// 7. Math.max() : 가장 큰 숫자 반환. 
// 8. Math.min() : 가장 작은 숫자 반환
// 9. Math.pow(n,m) : n의 m제곱 
// 10. Math.sqrt(n) : 루트 n(제곱근 n)
// 11. Math.random() : 0에서 1사이의 어떤 수를 반환! 

// 1. 오늘 random으로 숫자 출력하는 로직
// 2. 웹 변천과정 직접 코딩해보기 => 왜 리엑트가 등장했는지!! 
// 3. 리엑트는 어떤 식으로 코딩이 되는지!! 

// ✨ 1. 1 - 10까지의 정수 
let number1 = (parseInt(Math.random() * 10)) + 1; // 0부터 9까지
console.log(number1);





