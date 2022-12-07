'use strict';

// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: [1, 2, 3, 4]
// output: [1, 6, 3, 4]
function replace(array){
    // 배열을 입력받는다. 
    // 하지만 입력받는 배열을 함수안에서 변경하면 안 되니까 복사본을 이용한다. 
    let copy = Array.from(array);
    for(let i = 0; i < copy.length; i++){
        if(copy[i] === 2){
            copy[i] = 6;
        }
    }
    return copy;
}
let arr = [1,2,3,4];
console.log(replace(arr));
// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기 -> includes 
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function countEle(arr, ele){
    let copy = arr.slice(); // deep copy
    let count = 0;
    for(let i = 0; i < copy.length; i++){
        if(copy[i] === ele){
            count++;
        }
    }

    return count;
}

let arr_ = [1,2,2,2,3,4,5];
console.log(countEle(arr_, 2));


// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환 -> inclues
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function bothItem(arr1, arr2){
    let copyArr1 = arr1.slice();
    let copyArr2 = arr2.slice();
    let commonArr = [];
    for(let i = 0; i <= copyArr1.length; i++){
        if(copyArr2.includes(copyArr1[i])){ 
            // 어차피 true니까 여기 실행됨.
            console.log(copyArr1[i]);
            commonArr.push(copyArr1[i]);
        }else{
            console.log('공통x');
        }
    }
    return commonArr;
}
console.log(bothItem(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));
