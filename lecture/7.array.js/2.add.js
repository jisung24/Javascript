// shallow copy : 얉은 복사 
// - 복사본이 변경되면 원본까지 같이 변경이 됨. 
// - primitive type은 얉은 복사가 없음.

// deep copy : 깊은 복사
// - 복사본이 변경되면 원본은 문제가 없음.

// 변수 선언 
let a = []; // 빈 배열( 주소값 갖고있음 ) 
let b = 'hello'; // 문자열 
let c = {}; // 빈 객체( 주소값 갖고있음 )

let arr = [a, b, c]; // arr도 주소값 저장. 
console.log(arr);

let arr1 = arr; // 얉은 복사!( 같은 배열을 가리키고 있음 )
// 참조된 값을 변경했는데 원본까지 같이 변경이 됨. 

// slice ( shallow copy ) - 잘라서 새로운 배열을 만든다! 
let arr2 = [ 4,5,6,7,8 ];
let arr3 = arr2.slice(); 
arr3.push(9);
console.log(arr2, arr3); // slice는 1차원 배열은 얉은복사, 2차원 배열은 깊은복사를 수행한다. 

let arr4 = [ [...arr2], [...arr3] ];
console.log(arr4);
let arr5 = arr4.slice();
arr5[0].push(9, 10);
console.log(arr4, arr5); // 2차원 배열에서는 얉은 복사❗️

class Cal{
    constructor(num1, num2){ // public으로 설정해놓음.
        this.num1 = num1;
        this.num2 = num2;
    }

    // num1 num2에 대한 getter setter => 다시 한 번 공부해봐야지
    // get num1(){
    //     return this.num1;
    // }
    // set num1(val){
    //     val > 0 ? this.num1 = val : console.log('양수만 입력 가능합니다!');
    // }
    // get num2(){
    //     return this.num2;
    // }
    // set num2(val){
    //     val > 0 ? this.num2 = val : console.log('양수만 입력 가능합니다!');
    // }

    // ⭐️ Method ⭐️
    // -> 아.. 연관되는 기능은 전부 메서드에다가 써 주면 되는구나... + - * / 해주는 함수들을 각각...! 

    // 1. 두 수를 더해주는 기능 
    add = () => {
        return this.num1 + this.num2;
    }

    // 2. 두 수를 뺴는 기능
    sub = (num1, num2) => {
        if(num1 > num2){
            return num1 - num2;
        }else if(num1 < num2){
            return num2 - num1;
        }else{
            return 0; // 크기가 같으면 어차피 0..
        }
    }

    // 3. 두 수를 곱하는 기능
    mul = (num1, num2) => {
        return this.num1 * this.num2;
    }

    // 4. 두 수를 나누는 기능 ( 몫 나누기 ) => 무조건 정수로만 나오게끔.
    div = (num1, num2) => {
        return parseInt(this.num1 / this.num2);
    }
}

const calc = new Cal(5,6);
console.log(calc.mul(5,6)); // 30 제대로 나옴. 
// calc를 복사 한 번 

// 객체 복사
let copy = calc; // 이미 calc가 num1, num2를 5 6으로 set 해놨는데 변경할 수 있음. 
console.log();