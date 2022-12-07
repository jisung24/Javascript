'use strict';

class Stack {
    constructor(){ // 함수 호출할 때 생성된다. => 값이 복사돼서 이동하는듯. => obj type이면 주소값이 복사! 
        this.arr = []; // 인스턴스를 만들면 무조건 호출되는데, arr이란 변수에 빈 배열을 할당. 
        // field가 1개 있는거야! 
    }

    // 1. 값을 집어넣는 push
    push = (value) => { // 값을 하나 넣어준다. 
        this.arr.push(value);
    }

    // 2. 값을 다시 뺀다. 
    pop = () => {
        if(this.arr.length === 0){
            this.isEmpty();
        }else{
            this.arr.pop();
        }
    }

    // 3. 값이 없을경우, 길이가 0이라고 반환.
    isEmpty = () => {
        console.log('배열의 length가 0입니다!');
    }

    // 4. 자바스크립트는 배열의 길이가 제한이 없어서, 가득 찼는지의 여부를 check하는 함수는 
    // 구현할 수 없음.
}
let stack1 = new Stack(); // 자동으로 빈 배열 생성! 
stack1.push(1);
stack1.push(200);
stack1.push(3);
stack1.push(400);
console.log(stack1.arr);
stack1.pop();
console.log(stack1.arr);
stack1.pop();
console.log(stack1.arr);
stack1.pop();
console.log(stack1.arr);
stack1.pop();
console.log(stack1.arr);
stack1.pop();
console.log(stack1.arr);
