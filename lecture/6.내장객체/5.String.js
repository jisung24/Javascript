'use strict';
// ui에서 문자열을 처리하거나, 서버에서 문자열을 받아올 때.
// or 배열을 문자열로 바꾸거나.. 등등. 

// 매우 중요!! 
// 예를들어 search bar에다가 검색어를 입력 => 문자열 글자포함 함수나 등등 이런식으로 사용하는거야! 
const str = "가나다라마바사";

// 문자열의 길이 (회원가입 할 때 제한두기)


// str.indexOf("문자")
// - 문자가 str안에 있는지 확인!
// - 있다면 그 찾은 문자의 index위치를, 
// - 없다면 -1을 리턴한다. 
const str2 = "즐라탄 이브라히모비치";
console.log(str2.indexOf("탄"));
if(str2.indexOf("라") !== -1){
    // 글자가 있을경우.
    console.log('즐라탄 있습니다.');
}else{
    console.log('그런 선수 없습니다.');
}

// str.includes() 
// - indexOf는 찾으면 인덱스 값 못 찾으면 -1을 retur하는데 반해,
// - includes는 찾았으면 true, 아니면 false를 return해준다. 
const player = "르브론 제임스";
if(player.includes("브")){
    // includes는 true or false를 반환.
    console.log('르브론 있어!');
}else{
    console.log('르브론 없어...!');
}

// str.startsWith("값") : 값으로 시작하는지 아닌지!!(맞으면 true, 아니면 false반환) 
// ==> 오 사람 찾을 때 성으로 찾으면 되겠다....!! 
const me = "김지성"; // 김씨 다 고르기...!! 
console.log(me.startsWith("김")); // true
console.log(me.startsWith("이")); // false

// str.endsWith("문자열") : 문자열로 끝나는지 아닌지! 
// email시 com으로 끝나야한다
const hello = "jisung4012@naver.com";
// if(hello.endsWith("com")){
//     console.log(`email형식 맞음`);
// }else{
//     console.log('아님');
// }
// 삼항연산자 사용함.
hello.endsWith("com") === true ? console.log("email맞음") : console.log("아님");

// str.toUpperCase() : 모두 대문자로.
// str.toLowerCase() : 모두 소문자로.

// str.slice(a, b) : a번 부터 b-1번까지 문자열 잘라내기!! 

// str.trim() : 양 끝에 공백문자 제거.. => id칠 때!! 중요함. 
let id_1 = "jisung4012";
let id_2 = " jisung4012 ";
console.log(id_1 === id_2); // false다른 값임.. => 그래서 공백 그냥 자동으로 없애주자! 
// 사용자가 실수로 스페이스 누르고 id입력할수도있어... 

// str.split("") : 문자열을 배열로 만들어줌! ==> 아주 중요!! 
// 반대로 arr.join()을 사용하면 배열을 문자열로 만들어준다.

const str_1 = "1 2 3 4 5"; // trim은 문자열에만 사용해야돼! 
console.log(str_1.trim().split(" ").join());
