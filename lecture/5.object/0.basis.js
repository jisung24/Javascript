'use strict';

// 1. primitive data
// => 하나의 값
// => 파라미터로 전달될 때 call by value형태로 전달이 됨.

// 2. object type
// => 여러 개의 primitive type data들을 묶어놓은 형태
// => 함수 파라미터로 전달 될 때 주소값이 그대로 가서 함수에서 변경하면 원본 자체가 변경돼서 큰일 남.

// 정의 : 서로 연관있는 프로퍼티와 메서드들을 묶어놓은 묶음데이터!! ⭕️(이걸 중심으로 공부해야한다.) 
// => 변수에는 객체의 코드뭉치를 가리키는 주소값을 갖고있다. 

let mac = {
    name : 'macbook pro 14',
    color : 'spacegray',
    charge : { //charge는 또 그럼 주소값이 되는가야.. => 메모리 구조는 좀 헷갈리네
        // 일단은 객체는 property와 value가 있고, value는 모든 type이 가능하다! => function, arr, obj도 가능
        volt : 220,
        hour : 8,
    },
    arr : [1,2,3,4,5],
    buy : function(){ console.log('샀습니다!') } // 메서드
}
console.log(mac.buy()); // 메서드.
// 속성안에 값이 있는데, 이 값은 모든 type이 가능하다. 
// 객체여도 상관없어!! 
console.log(mac);


// 정리 : 서로 연관있는 프로퍼티와 메서드!! 
// 1. 변수안에는 당연히 주소값이 들어있다. 
// 2. 파라미터로 복사될 때는 call by reference! 
// 3. 프로퍼티(속성) 메서드(행동)