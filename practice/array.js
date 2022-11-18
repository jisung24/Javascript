'use strict';
// 서버 data라고 생각하자!
let userDB = [
    {
        name : "김지성",
        age : 25,
        major : 'computer'
    },
    {
        name : "이재혁",
        age : 25,
        major : 'computer'
    },
    {
        name : "조홍래",
        age : 24,
        major : 'math'
    },
    {
        name : "박남준",
        age : 23,
        major : 'math'
    },
    {
        name : "장종운",
        age : 23,
        major : 'environ'
    },
    {
        name : "박현태",
        age : 21,
        major : 'free'
    }
]

// 값만 가져오기! 배열 벗기기
// 1. map으로 속성 한 개 추가해주기!
// => map도 역시 기존배열을 변경함!!
userDB.map((value, index) => {
    value.id = index;
    value.score = index + 90;
    return value;
})
// console.log(addProperty);
console.log(userDB);

// 2. score뽑아서 score순으로 정렬하기! 
// 배열 속 모든 객체에서 score을 빼내자!
// let scoreDB = userDB.map((value) => {
//     return value.score;
// }).sort((a,b) => b-a).filter((ele) => {
//     return ele > 92; // 92점 초과만 배열로 filter해준다.
// });
// console.log(scoreDB);

// console.log(userDB);
// // 정렬을 하기위한 객체 속성만 중복없이 전부 가져오기!
// let category = userDB.map((value) => {
//     return Object.keys(value); //keys안에 객체가 들어감.
// })
// // 배열 중복 제거
// let cate = [...new Set(category)];
// console.log(cate);



// 배열 중복제거!
let arr = [1,1,2,3,5,6,8,9,9,5,3,4,6,5];

// 1. es6에 생긴 Set객체! => set안에는 unique한 값만 담을 수 있음
let arr2 = new Set(arr);
// set은 객체야! => 그래서 ...로 분해하고 []로 감싸주면서 배열만들기!

// 1-1) 배열 만들기
// ==> 여러개의 값을 ...로 값만 뽑아서 []로 감싸주기!
console.log(...arr2); // arr로 만들어야함!


// 1-2) 배열 만들기 공부