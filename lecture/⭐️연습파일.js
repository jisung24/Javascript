'use strict'; 
// 회원관리. 
// 회원 DB
    let users = [
        { id : 1, name : '김지성', age : 25 },
        { id : 2, name : '홍길동', age : 24 },
        { id : 3, name : '황권주', age : 22 },
        { id : 4, name : '성대현', age : 30 },
        { id : 5, name : '이대헌', age : 35 },
    ]

// ⭐️ '김씨 출력' 
// arr.some을 사용하면 true or false만 나옴. 
// 1. 김씨가 있는지만 검사. 
    let user = users.some((value) => value.name.charAt(0) === "김"); // value.name 문자열 중 김을 포함하는 글자. 
    for(let i = 0; i < users.length; i++){
        if(users[i].name.charAt(0) === "김"){
            console.log(`user >> ${users[i].name}`);
        }
    }
    console.log(user);
    console.log(users);
    // 정리 : 문자열의 첫 번째 글자 가져오기
    // - charAt(0)
    // - 문자열[0]
    // - slice(0, 1) => 0부터 시작해서 1전까지 => idx 0번째 숫자 딱 하나! 
// 2. spread연산자로 객체만 빼오기
// - arr은 literable해서 가져올 수 있다. 
let obj = [... users];

