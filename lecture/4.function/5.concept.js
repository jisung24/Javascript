'use strict';
// 불변성!! 
// immutability 
// => 모든 object는 변경할 수 없게 만들어야한다. 

// !!! 함수 내부에서 파라미터의 값을 변경하는 것은 절대 좋지않아 (❌)
// ex) 
    function number(num1){
        num1 = 5; // 이렇게 바꾸면 안 돼!! 
        return num1; // 불면성을 생각하며 코딩하자! => 파라미터의 값을 바꾸지 말자! 
    }
    console.log(number(6)); //5가 출력됨(❌)
    // object type일 경우 진짜 매우 심각해진다!!  

    // 원시값 : 값에 의한 복사
    // 객체타입 : 주소값에 의한 복사! 

    function changeObj(obj){
        return { ...obj, name : '지성'}
    }

    let me = {
        name : 'dsdasdasd',
    }
    console.log(changeObj(me));