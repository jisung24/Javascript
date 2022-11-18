const x = 0;
const y = 0;
// const coordinate = { x : x, y : y };
// 만약 객체의 프로퍼티와 값의 변수 이름이 똑같다면 줄일 수 있다. 
const short = { x, y }; // { x : x, y : y };
console.log(short);

// 객체를 만들어주는 함수
function makeObj(name, age){
    return { name, age };
}
console.log(makeObj("지성", 25));