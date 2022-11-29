'use strict';
// 변수 
// -> 입력한 값들을 처리하기 전에 잠시 보관해두는 사물함. 

    function add(num1, num2){
        // num1, num2가 변수지만 함수에 필요한 변수는 우리는 파라미터 라고 부름. 
        let sum = num1 + num2; // 처리
        return sum; // 결과
    }
    let num1 = 10; 
    let num2 = 20;
    console.log(add(num1, num2)); // call by value 깊은 복사 형태로 값이 전달이 됨.
    
// 연산 
// -> 처리 과정에서 원하는 결과를 출력하기 위해서 우리는 연산을 한다. 
// -> 함수를 사용한다. 
    let notebooks = [
        { id : 1, company : "apple", name : "macbook pro 14", ramSize : 16, ssd : 512 },
        { id : 2, company : "samsung", name : "samsung notebook", ramSize : 8, ssd : 2048 },
        { id : 3, company : "apple", name : "macbook air", ramSize : 32, ssd : 1024 },
        { id : 4, company : "lg", name : "gram 16", ramSize : 16, ssd : 512 },
        { id : 5, company : "apple", name : "macbook pro 13", ramSize : 8, ssd : 512 },
    ]

    let users = [
        { name : "김지성", age : 25, phone : "01092876446", gender : "male" },
        { name : "이지성", age : 30, phone : "01092876447", gender : "female"},
        { name : "박지성", age : 27, phone : "01092876448", gender : "male"},
        { name : "최지성", age : 29, phone : "01092876449", gender : "female"},
        { name : "장지성", age : 33, phone : "01092876450", gender : "female"},
        { name : "민지성", age : 19, phone : "01092876451", gender : "female"},
        { name : "홍지성", age : 21, phone : "01092876452", gender : "male"},
    ]