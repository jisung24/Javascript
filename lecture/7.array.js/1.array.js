'use strict';
// (1)배열 생성방법 => 4가지
    // -1. size만 정해진 배열 생성
    let array = new Array(3);
    console.log(array.length); // 3
    array = new Array(1,2,3,4,5,6);
    console.log(array); // 크기 동적으로 변경 가능. 

    // -2. 값 자체를 전달
    let array2 = new Array(1,5,9,11);
    console.log(array2);

    // -3. of연산자 사용 
    let array3 = Array.of(1,2,3,4,5,6);
    console.log(array3);

    // -4. 배열 literal 사용
    let array4 = [1,2,9,10];


// (2)기존 배열 복사해서 가져오기.
    // 애초에 기존 배열은 건들지 않는게 제일 좋아..
    // 1. Array.from()
    // 2. ... spread연산자

    let arr5 = [1,5,10,15];
    let arr6 = Array.from(arr5);
    let arr7 = [...arr5,16];
    console.log(`arr5 >> ${arr5}`);
    console.log(`arr6 >> ${arr6}`);
    console.log(`arr7 >> ${arr7}`);

// (3) 일반 다른언어에서 배열 vs js에서 배열
//  - 일반적으로 배열은 동일한 메모리 크기를 갖고, 연속적으로 이어져 있어야한다. 
//  - 하지만 js에서의 배열은 연속적으로 이어져 있지 않고, object와 유사하다. 
//  - js에서의 배열은 배열인 척 흉내내고 있는 obj이다... 
//  - 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 존재한다. 
    let arr__ = Array.from(
        {
            0 : "안",
            1 : "녕",
            length : 2,
        }
        // 즉 index 0 1이 obj property임.
    )
    console.log(arr__);