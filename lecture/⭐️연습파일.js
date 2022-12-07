'use strict';

// ⭐️ Array.isArray() => 배열이면 true 아니면 false
    let arr = [1,2,3,4,5]; // arr에는 배열의 주소값이 담겨있음. 
    let str = "12345"; // 그냥 문자열은 문자열! 
    console.log(Array.isArray(arr), Array.isArray(str)); 

// ⭐️ Array.from() => array를 깊은 복사함. ❗️ array 깊은 복사법! ==> 꼭 알아두기!! 
    let copy = Array.from(arr);
    copy[0] = 100;
    console.log(copy, arr);

// 복사
// primitive type : 값만 복사가 돼서 그 원래의 값을 바꿀 수 없음. ( deep copy)
// object type : 주소값이 복사가 돼서 복사본의 값을 바꿔도 원래의 값이 바뀜 ( shallow copy )
// => 하지만, object의 원본을 바꾸는 것은 옳지 못 해. => 그래서 깊은 복사를 해야돼!!!!! 

// 값이 함수 파라미터로 전해질 때 복사되는 방법 
// - call by value(원시타입이 함수 파라미터로 복사 될 때) : 값만 복사돼서 전달됨. => 메모리가 다르기 때문에, 원본은 전혀 바뀌지 않아. 
// - call by reference(객체타입이 함수 파라미터로 복사 될 때) : 주소값 자체가 복사돼서 전달됨. => 복사본을 바꾸면, 원본도 같이바뀜. 

// call by value (deep copy)
    let hi_ = "hello";
    function hi(str){
        str = "hi!";
        return str;
    }
    console.log(hi(hi_)); // hi!
    console.log(hi_); // hello => 즉 함수로 값을 바꿔도 원본은 피해보지 않아. => deep copy

// call by reference( shallow copy )
// -> 주소값이 복사돼서 함수에서 값을 바꾸면 원본도 바뀜. 
    let obj = {
        name : "jisung",
        age : 26,
        intro : function(){
            console.log(this.name);
            console.log(this.age);
        }
    }
    function objcopy(obj){
        obj.name = "김지성";
        return obj;
    }
    console.log(objcopy(obj));
    console.log(obj); // 바뀜.

// ⭐️ 배열함수 복습 ⭐️

// 1. Array.isArray() : 배열인지 아닌지 확인!
// - return : true || false 
    arr = [2,4,6,8,10]; 
    console.log(Array.isArray(arr)); // true

// 2. arr.indexOf("찾는값") : 찾는 값의 index를 반환해줌. 
// - return : 찾는 값이 있는 경우 index반환 없는경우 ❗️-1❗️ 반환

    let nums = [2, 4, 6, 2, 8, 2, 11, 2, 20, 2];
    // 2의 위치를 다 찾기! 
    // nums.indexOf(원하는 값) => 가장 앞에 있는 index만 반환! 
    // => 반복문을 돌리면서 찾아야돼
    let set = new Set(); // 배열에서 중복을 제거해주는 set객체! 
    for(let i = 0; i < nums.length; i++){
         set.add(nums.indexOf(2, i));
        // 2의 위치를 다 반환.. !! 근데 총 8번 반환을 해서, 
        // 같은 위치가 나올 때 까지 반복 돼!
    }
    console.log(set); // 위치!! 

    // 반복문을 돌리다보면 2가 3번째에 있다..면 idx가 3으로 올 때 까지 계속 
    // idx 3이 중복 출력됨. 
    // 그럼 set을 만들어서 일단 다 add해준다음 알아서 중복 제거시켜주면 위치만 딱 나옴. 

// ⭐️ 3. arr.includes(값) 
// -> index를 return이 아니라 있는지(true) 없는지만(false) return
// => 원하는 위치 찾기! => indexOf, includes
    console.log(arr.includes(6)); // true
    console.log(arr.includes(9)); // false 
    // if문에다가 대입하면 될 듯!! 
    let str2 = "hello world my name is jisung";
    let answer = str2.includes("hello") ? "true" : "false";
    // return값이 true일 경우 "true" return값이 false이면 "false"출력!
    console.log(answer); 

// ⭐️ 배열의 원본 자체를 바꿈 => 얕은복사 함수! 
// ❗️배열에 값 넣기
// ⭐️ 4. push, unshift => 가장 뒤, 가장 앞에다가 원소를 추가함. 
    let pu = [1,2,3,4];
    console.log(pu.push(8)); // 넣고 난 후의 배열의 길이를 반환함.
    console.log(pu.unshift(0)); // 마찬가지로 넣고 난 후의 배열의 길이 반환! 
    console.log(pu)

// ❗️배열에서 값 빼기
// ⭐️ 5. pop, shift => 가장 뒤, 앞의 원소를 제거하고, 제거한 원소를 return한다. 
    let po = [4,5,6,7,8];
    console.log(po.pop()); // 가장 뒷 원소 제거. 
    console.log(po.shift()) // 가장 앞에있는 원소 제거.
    console.log(po); // 원본까지 같이 변경됨 => shallow copy

// ❗️이제는 중간에 삭제하고 값 대체하고 (push, unshift, pop, shift)합쳐놓은 것. 
// ⭐️ 6. arr.splice(n,m,value) : n번부터 m개를 삭제하고, value로 기존원소를 대체한다.
// => splice()자체는 삭제한 원소를 반환한다. 
// => splice도 기존 배열 자체를 변경한다. => 안 좋음. 
    let c = [2,4,6,8,10]; 
    console.log(c.splice(0,3, 1,2,3)); // index 0번포함 3개를 123으로 대체
    // splice도 삭제한 원소 반환...
    console.log(c); // => 원래의 배열을 보면 값이 바껴있음. 
    // splice는 원래의 배열을 바꿔버림!! 

// 👉 배열 원소 추가, 삭제
// -> push, unshift() : 맨 뒤, 맨 앞 원소 추가.
// -> pop(), shift() : 맨 뒤, 맨 앞 원소 제거.
// -> arr.splice(n, m , value,,) : idx n번부터 m개를 제거하고 value로 대체한다.

// 여기서부턴, 원본을 바꾸지 않아.
// ⭐️ 7. arr.slice(n, m) 
// -> n번부터 m-1번까지 잘라서 새로운 배열을 반환한다.
// -> 1차원 배열은 deep copy를 해서 기존 배열을 바꾸지 않음. 

    let sliceArr = [1,2,3,4,5,6,7,8,9,10];
    console.log(sliceArr.slice(2,4)); // 2번부터 3번까지 반환.
    console.log(`전체 deep copy >> ${sliceArr.slice()}`);
    // ================> slice를 아무 파라미터를 받지 않으면 1차원 배열은 전체 deep copy가 됨. 
// ⭐️ 8. arr.concat(더할배열)
// => 하지만 이제는 spread연산자를 사용해서 배열을 붙인다. 

    let d = [1,2,3];
    let e = [4,5,6];
    function concatArr(arr1, arr2){
        return [...arr1, ...arr2]; // deep copy임.
    }
    console.log(concatArr(d,e)); // 합침. 

// ❗️ 배열의 복사 ❗️ 
// -> 원래 obj type은 주소값이 복사가 돼서 shallow copy가 발생한다. 
// -> 복사본을 변경하면 원본까지 같이 바뀜. 
// -> 근데 원본을 바꾸는 것은 좋지않음. 
// -> 그래서 deep copy(복사본을 바꿔도 원본이 바뀌지 않음)를 해야함.
// -> 이걸 도와주는 함수가 slice(), spread연산자

// ⭐️ 9. arr.reverse() : 배열의 순서를 뒤바꿈.(⭕️ 원본을 바꿈 ⭕️)
    let rev1 = [1,2,3,4,5];
    let rev2 = [5,4,3,2,1];
    console.log(`reverse전 >> ${rev1}`);
    console.log(rev1.reverse());
    console.log(`reverse후 >> ${rev1}`); // 원본을 바꿈. 

// ⭐️ 10. arr.flat(Infinity) : 배열의 차수를 낮춤. 
// -> spread연산자 써도 되지만 고차원 배열은 그냥 flat(Infinity)로 끝남.
// Infinity를 사용하면 몇 차든간에 1차로 바꿔줘서 좋음. 
// 굳이 차수를 계산해서 숫자를 적기보단, 그냥 Infinity를 적어주자.
    let flat1 = [[1,2,3], [4,5,6], [7,8,9]];
    console.log(flat1.flat()); // 1차원으로 바뀜. 
// flat() : 파라미터가 없을경우 2차원까지만 평탄하게 만들어줌. 
    let flat2 = [[1,2,3], [4,5,6], [7,8,[9,[10]]]];
    console.log(flat2.flat(3)); // 4차원까지 1차로! 
    // 파라미터 + 1차까지 1차로 만들어줌 
    let flat3 = [1,[2,[3,[4,[5,[6,[7,[8,[9,[10,[22,23,[24]]]]]]]]]]]]
    // 몇 차인지 몰라! 
    console.log(flat3.flat(Infinity)); 

    let arr2 = [1,2,3,[3,4,5]];
    console.log(arr2.flat(Infinity));

    let stu1 = ["김", "이", "박"]; // 1반학생 
    let stu2 = ['박', '최', '유']; // 2반학생 수

    let stuAll = [...stu1, ...stu2];
    console.log(`전교학생 수 >> ${stu1.length + stu2.length}`);
// ⭐️ 11. arr.fill("값", n,m) 
// -> 값을 n부터 m-1까지 채워준다.


// ⭐️ 12. arr.join()
    let num = "2223"; // 각 자리의 합 
    let arr3 = num
    .split('') // 배열로 바꿈.
    .map((value) => +value) // 각 원소 정수로 형 변환
    .reduce((acc, cur) => acc + cur) // 더함.
    console.log(arr3);

    let num2 = [4,5,6,7]
    console.log(num2.join());
