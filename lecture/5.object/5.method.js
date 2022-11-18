'use strict';
// << 행동 객체 >> 
// - 메서드가 있는 객체를 의미한다.
// - 객체 안에서의 this(중요!⭕️)
// 객체 안의 함수 : 객체 값은 모든 type들이 올 수 있는데, 함수 type이 온 경우! => 객체의 행동을 나타내줌. 
let me = {
    name : '지성',
    walk : function(){
        console.log(`${this.name}이가 걷는다.!`);
        // 객체 안에서 this는 내 자신의... 라고 읽으면 돼!
    }
    // key는 walk인데 값은 함수이다! => 라고 이해하면 돼!

}
me.walk(); // 지성이가 걷는다! 