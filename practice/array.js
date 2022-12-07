'use strict';

// 객체와 배열 둘 다 작업을 해야돼! 

let arr = [100,301, 506, 807, 1021, 4056];
console.log(Array.isArray(arr)); // 배열인지 확인. ==> Array class의 static method!! 

let copy = arr.slice(); // slice() : 배열을 잘라서 새로운 배열을 만든다.  
copy[1] = 99;
console.log(arr, copy); // slice는 1차원 배열에서는 deep copy, 2차원에선 shallow copy

// 배열 복사
// -> 객체타입은 원시타입과는 다르게 값을 변경하면 원본도 같이 변경되는 얕은복사가 된다. 
// -> 따라서 깊은 복사를 하기위해서는 여러 방법이 필요하다. 

// 1. slice() : 1차(deep copy) 2차(shallow copy)
    let sliceArr = [56, 77, 99, 202];
    let sliceCopy = sliceArr.slice(); 
    sliceCopy[0] = 500000;
    console.log(sliceArr, sliceCopy); // 복사본을 변경해도 원본은 멀쩔함! => primitive도 깊은복사.

// 2. ...(spread operator)
    let spreadArr = [44, 77, 99, 111, 444, 5555];
    let spreadCopy = [ ...spreadArr ];
    spreadCopy[0] = 100000;
    console.log(spreadArr, spreadCopy); // 역시 깊은복사 실행됨.

// 3. filter
    let filterArr = [100, 200, 300, 400, 500]; // boolean으로 반환하면 모두 true이다. 
    let filterCopy = filterArr.filter(() => true);
    filterCopy[0] = 600;
    console.log(filterArr, filterCopy); 
    
// 4. map
    let map = [1,2,3];
    let copymap = map.map((value) => value);
    console.log(copymap, map);

// 5. JSON.parse JSON.stringify
    let hello = ["김", "이", "박", "조"];
    let copyHello = JSON.parse(JSON.stringify(hello));
    copyHello.push('장');
    console.log(hello, copyHello);

// ⭐️ 데이터 교환 형식 ⭐️
// - 1. xml (옛날 형식)
// - 형식 <삼성전자> 50000 </삼성전자>
// - 단점 : 작성하기 어렵고, 용량도 많이먹음

// -2. csv (표 형식으로 data를 보관가능)
// - db에 있는 data를 담기 쉬움. 
// - 하지만 2차원 3차원 넘어가면 담기 어려움.

// -3 ✨ json(JavaScript Object Notation) ✨
// - 형식 { "name" : "김지성", "age" : 20 }
// - 위 형식으로 서버와 data를 주고받음. 
// - 장점 : 
    let obj = {name : '김지성', age : 25};
    let json = JSON.stringify(obj); // json으로 만들어주기. 
    // typeof로 찍으면 string이 나옴. 
    // function null date는 사용불가능.
    console.log(json, typeof json);

// ⭐️ 다양한 array function ⭐️

// 1. Array.isArray : Array class static function
    let ex = [1,2,3,4,5,6,7,8];
    let num = 10;
    console.log(Array.isArray(ex)); // 배열이면 true 아니면 false
    console.log(Array.isArray(num)); // false

let aerrrr = () => {
    
}