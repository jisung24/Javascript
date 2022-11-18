// 객체를 만드는 법 
// 1. 오브젝트 리터럴 
// 2. new Object()
// 3. Object.create();

// key : 문자, 숫자, 문자열, 심볼(이건 외워야 돼!)
// value : 모든 값이 다 가능하다(객체, 함수 등등 다 가능하다.)

let apple = {
    name : 'apple', // 웬만하면 다 이렇게 만드는게 좋아ㅠㅠ
    'hello-bye' : '안녕!', // 이런식으로는 만들지 마... 제발.. 되긴 해! 
    0 : "숫자 0", // 예제 때문에 남겨둠.
    ["김지성"] : "이름",
}
// 값을 출력하는 방법!
console.log(apple.name); // 마침표 표기법
console.log(apple['name']); // 대괄호 표기법(대괄호 안에는 무조건 문자열이 와야 함!)

// 여기까지 객체를 만들고 속성에 접근하는 방법! 

// 속성 추가
apple.me = "mmme"; // 
apple['0'] = '숫자0000'; // 속성 수정
apple["gogo"] = "gogo";
console.log(apple)

// 속성 삭제
delete apple.me;
console.log(apple);