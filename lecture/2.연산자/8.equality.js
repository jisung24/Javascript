'use strict';
// 동등 비교연산자
//  => 역시 boolean type을 리턴한다! 
// ==(값이 같음)
// != 값이 다름
// ! ===(무조건 이거 쓰자!! => 값과 타입까지 검사를 해줌)

// ! !==(무조건!!)
console.log(2 == '2', 2 + '2');
// 비교될 때 만 ''안에 있는 2와 숫자 2를 비교해서 같게나옴.
console.log(2 === '2');


const obj1 = {
    name : 'js',
}
const obj2 = {
    name : 'js',
}

console.log(obj1 == obj2); // 각 다른 주소값이 들어가있음.
console.log(obj1 === obj2); // 역시 false
// obj1 => 1번이 obj2는 2번이 들어가있음 주소값이 다름.

console.log(obj1.name === obj2.name); // 하지만 프로퍼티 내의 값은 같음. 
const obj3 = obj2; // obj3도 2를 가리키게 해!! => 같은 주소값을 갖고있기 떄문에!! 값도 똑같고 동일한 메모리 주소도 갖고있음.
console.log(obj3 === obj2);
console.log(obj3 == obj2);
