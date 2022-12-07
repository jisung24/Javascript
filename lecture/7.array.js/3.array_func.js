'use strict';

const e = require("express");

// ⭐️ 아주 중요 ⭐️
// ✨ 기존 배열 자체를 변경하는지, 새로운 배열을 반환하는지 꼭 알아야 함❗️

let ramSize = [4, 8, 16, 8, 32, 64];
let num = 3;

// ⭐️ 1. Array.isArray(arr) 
// -> Array클래스의 static메서드!!! => 클래스 메서드 알지? 
// -> 배열인지 아닌지 확인을 해준다. 
    console.log(Array.isArray(ramSize)); // true
    console.log(Array.isArray(num)); // false

// ⭐️ 2. arr.indexOf(값) : 배열안에서 찾고싶은 친구의 index를 반환함. 
// -> 만약 없다면 -1을 return. 
// -> 있다면 그 값의 index를 return한다.
// ❗️ 만약 찾고싶은 값이 2개라면..? ==> ⭕️ 꼭! 해보기
    console.log(ramSize.indexOf(6)); // -1
    console.log(ramSize.indexOf(8)); 
    
    let arr = [1,1,4,5,7,1,9,1,0,1]; // 1의 모든 위치를 다 찾을거야! 
    // for(let i=0; i<arr.length;){
    //     let num = arr.indexOf(1, i); // 찾으면 index반환.
        
    // }
// ⭐️ 3. arr.includes(값) - 배열안에서 값이 있는지 없는지만 검사( 위치까지는 필요없고 ) 
// - 있다면 true
// - 없으면 false 
    console.log(ramSize.includes(6)); // false
    console.log(ramSize.includes(8)); // true

// ⭐️ 4. push, unshift - 각각 제일 앞 뒤에 값을 추가. 
// - ❗️ 배열 원본을 수정함.
    let _arr = [0];
    _arr.push(1,2); // 뒤에다가 값을 추가. 
    _arr.unshift(-1);
    console.log(_arr); // [ -1, 0, 1, 2 ]

// ⭐️ 5. pop(), shift() - 제일 뒤, 앞에 있는 item을 없애주고
// - ❗️ 그 제거된 item을 return한다!!!!!!!!
    let removedItem = _arr.pop();
    console.log(removedItem); // 제거된 2가 return됨.

    let shiftedItem = _arr.shift();
    console.log(shiftedItem); // 제일 앞에 있던 -1 return

    console.log(_arr); // push, unshift, pop, shift는 역시 원본 배열을 수정한다. 

// ⭐️ 6. arr.splice(제거할 위치, 개수, 추가할 숫자) - 배열의 중간에서 삭제 추가가 가능하다.
// - ❗️ 처음과 끝 뿐 아니라 이젠 중간에도 가능!! 
// - 역시 splice도 원본 배열 자체를 수정한다. 
// - pop, push (맨 뒤 제거, 추가)
// - shift, unshift (맨 앞 제거, 추가)
// - splice ( 중간 추가, 삭제 )
// - ⭕️ 전부 배열의 원본을 update한다. 
    let nums = [1,2,3,4,5,6];
    // 배열 제거
    nums.splice(1, 2 , 100, 200); // index 1번포함 2개를 제거 
    console.log(nums); // 즉 index 1번 2번을 제거.
    // 그리고 그 자리에 100과 200을 추가한다. 
    // (삭제할 위치, 삭제할 개수, 추가할 숫자..)

    let a = [2,4,5,6,7,100];
    a.splice(3,3, 100, 100, 100); // 3번부터 3개를 삭제하고 100 100 100으로 채우겠음.
    console.log(a);

    let test = [1,2,3,4,5]; // [1,6,5]로 바꿔보자. 
    test.splice(1, 3, 6);
    console.log(test);

// 여기까지는 기존 배열을 바꿔버리는 함수. 

// 지금부턴 새로운 배열을 만드는 함수. 
// ⭐️ 7. slice(n, m);
// - index n번부터 m-1번까지 잘라서 새로운 배열을 만들어서 return한다. 
// - 인자가 없다면 배열 전체를 ⭕️깊은복사⭕️를 한다.(1차원은 깊은복사, 2차원은 얕은복사)
    const sliceArr = [1,2,3,4,5,6,7];
    console.log(sliceArr.slice(1,4)); // idx 1 2 3까지 잘라서 새로운 배열을 만듦.
    console.log(sliceArr.slice(-3, -1)); // 뒤에서 3번째 2번째까지. (뒤에서 첫 번쨰는 return안 해주는거 알지? 뒤 파라미터는 포함 안 시키는거야)
    let slice = sliceArr.slice(); // deep copy
    slice[0] = 100000;
    console.log(slice, sliceArr); // 서로 다름. 

// ⭐️ 8. arr.concat() : 배열을 이어붙여줌. 
// -> 근데 es6부터는 새로나온 spread연산자를 이용하여 이어붙여준다. 
    let arr1 = [1,2,3];
    let arr2 = [5,6,7];
    let arr3 = [...arr1, ...arr2]; // spread연산자 : 깊은복사 + 배열 이어붙이기 가능.
    let arr4 = [...arr1]; //깊은복사.
    arr4[0] = 1000;
    console.log(arr1, arr4); // 역시 서로 다름.  
    console.log(arr3);
    let concat = arr1.concat(arr3); // arr1뒤에다가 arr3을 추가시켜준다.
    console.log(concat);

// ⭐️ 9. 배열의 순서를 거꾸로 해주는 속성 
// -> 아무래도 정렬할 때 많이 쓰임. => 팀 순위나.. 타율 꼴찌 순으로 정렬할 때 등등.
    let reverse = arr1.reverse(); 
    console.log(reverse); // 3, 2, 1 출력

// ⭐️ 10. arr.flat() : 중첩된 배열을 하나의 배열로 쭉 펴기! 
// -> 이것도 역시 spread연산자 사용하면 훨씬 편해!
// -> flat은 2차원 배열만 풀어줘서 3차원 배열부턴 -1씩 숫자 대입해야함.
    arr = [ // 3차원 배열. => flat(2)
        [1,2,3],
        [4, [5,6]]
    ]  
    console.log(arr.flat()); // 2차원 -> 1차원으로
    console.log(arr.flat(2)); // 3차원 -> 1차원으로

// ⭐️ 11. arr.fill(값) : 특정한 값으로만 정해진 범위만큼 배열을 채워준다.
    let arr5 = [1,2,3,4,5];
    console.log(arr5.fill("지성")); // "지성"이란 값으로 배열 전체를 채워줌. 
    let arr6 = arr5.fill('s', 1, 3); // index 1,2번만 s로 채워줘! 

// ⭐️ 12. 배열을 문자열로 합하기. 
    let names = ["dsdsd", "dsds", "dsdsd", "ewew"];
    let str = names.join(" | ");
    console.log(str);


    // 원하는 index에 접근함.... 
    let str2 = "aabrgoa";
    let arr8 = str2.split('').filter((value) => value === `a`);
    console.log(`a의 개수는 ${arr8.length}`);
    // 



    
