'use strict';
// ⭐️ USER DB에서 회원찾기! 
// 하지만 web app은 주로 client의 요구사항을 들어주는거고, 그래서 client와 관련있는 DB로 실습하는게 좋아! 

// ⭐️ NOTEBOOK DB에서 작업할거임
let notebooks = [
    { id : 1, company : "apple", price : 2300000, color : "gray" },
    { id : 2, company : "samsung", price : 1400000, color : "black" },
    { id : 3, company : "lg", price : 1700000, color : "black" },
    { id : 4, company : "apple", price : 2100000, color : "white" },
    { id : 5, company : "samsung", price : 1300000, color : "gray" },
]

// ⭐️ 1. 가격 150만원 이상인 노트북 객체 전부 반환. 
// -> filter()
    let filteredNotebooks = notebooks.filter((notebook) => notebook.price >= 1500000);
    console.log(filteredNotebooks);

// ⭐️ 2. 가격순 정렬 반환
//  - 낮은 가격순. 
    let sort = notebooks.sort((a, b) => a.price - b.price);
    console.log(`낮은 가격순 >> ${sort}`);
// - 높은 가격순
    let ascSort = notebooks.sort((a,b) => b.price - a.price);
    console.log(`높은 가격순 >> ${ascSort}`)
    // - sort에서 a,b는 각 원소이고 return 할 때 a.price 식으로 접근해주면 돼!! 
    console.log(sort)
    console.log(ascSort)


const contrr = () => {
    
}