'use strict';
// ui에서 문자열을 처리하거나, 서버에서 문자열을 받아올 때.
// or 배열을 문자열로 바꾸거나.. 등등. 

// 매우 중요!! 
// 예를들어 search bar에다가 검색어를 입력 => 문자열 글자포함 함수나 등등 이런식으로 사용하는거야! 
const str = "가나다라마바사";

// 문자열의 길이 (회원가입 할 때 제한두기)


// ⭐️ 1. str.indexOf("문자", index) : 해당되는 문자가 있으면 그 idx를 반환, 없으면 -1을 반환한다. index는 그 위치부터 찾아준다! 
// - str.lastIndexOf("문자") : 해당되는 문자를 뒤에서부터 찾아줌.
// - 문자열로 일부분 검색하는 기능을 구현할 때 쓰임! 
// - 문자가 str안에 있는지 확인!
// - 있다면 그 찾은 문자의 index위치를, 
// - 없다면 -1을 리턴한다. 
    let notebookName = "macbook pro 14";
    let word = "mac";
    let word2 = "1"
    console.log(notebookName.lastIndexOf(word2)); // 12번째에 있음 라스트라고 해서, 뒤에서부터 idx를 세지않음. 
    let result = notebookName.indexOf(word, 1) === -1 ? "찾는 값이 없습니다." : `${word}로 찾은 키워드가 있습니다.`;
    // "mac"이라는 단어 전체가 있어야하는데, idx 1번부터 찾으면 없으니까 값이 없다고 뜸. 
    console.log(result);
    // indexOf로 반복문을 이용해서 여러 개 찾기...! => 어디어디 있는 지 찾기...! 
    let numStr = "12343312351"; // 1의 개수와 idx를 찾기! 
    // ✨ 문자열도 idx로 접근할 수 있어. => 돌면서 -1이 아닌 idx만 console.log찍어주고 없다면 continue로 건너뛴다.! 
    for(let i = 0; i < numStr.length; i++){
        let num = 1;
        if(numStr[i].indexOf(num) !== -1){ // 1이 numStr에 있을경우...!!
            console.log(`${i}번째 있습니다!`);
        }else{
            continue;
        }
    }


// ⭐️ 2. str.includes() : 원하는 값이 문자열에 있는지, 없는지만 검사 => 있으면 true, 없으면 false를 반환. 
// - indexOf는 찾으면 인덱스 값 못 찾으면 -1을 retur하는데 반해,
// - includes는 찾았으면 true, 아니면 false를 return해준다. 
const best5 = "james leonard, giannis, ad, jokic";
let bestResult = best5.includes("james") === true ? "르브론 best5에 있어" : "르브론 best5에 없어.";
console.log(bestResult);

// ⭐️ 3. str.startsWith("값") : 값으로 시작하는지 아닌지!!(맞으면 true, 아니면 false반환) 
// ==> 오 사람 찾을 때 성으로 찾으면 되겠다....!! 
const me = "김지성"; // 김씨 다 고르기...!! 
console.log(me.startsWith("김")); // true
let result3 = me.startsWith("김") || "아님";
console.log(`${result3}! 김씨 맞아요~`);

// ⭐️ 4. str.endsWith("문자열") : 문자열로 끝나는지 아닌지! 
// email시 com으로 끝나야한다
const hello = "jisung4012@naver.com";
let emailResult = hello.endsWith("com") === true ? "email맞음" : "email아님";
console.log(emailResult);

// ⭐️ 5. str.toUpperCase() : 모두 대문자로.
// ⭐️ 6. str.toLowerCase() : 모두 소문자로.

// ❗️⭐️❗️ 7. str.slice(a, b) : a번 부터 b-1번까지 문자열 잘라내기!! 
let str2 = "안녕하세요! 제 이름은 김지성입니다.";
// console.log(str2.slice()); // 아무것도 없다면 깊은 복사! 
let sliceResult = str2.slice(); // 근데 복사를 안 해도 되는게.. 어차피 문자열은 idx가 only read... 임...  

// ⭐️ 8. str.trim() : 양 끝에 공백문자 제거.. => id칠 때!! 중요함. 
let id_1 = "jisung4012";
let id_2 = " jisung4012 ";
console.log(`trim전 id비교 >> ${id_1 === id_2}`); // 공백문자까지 문자로 치기 때문에 다른 값이 나타남. 
console.log(`trim함수 적용 이후 >> ${id_1 === id_2.trim()}`); // 공백 제거해주면 같은 값이 됨.   
// 사용자가 실수로.. 공백문자를 입력을 해 줘도 trim을 개발자가 setting해주면, 사용자의 실수를 막을 수 있음,

// ❗️⭐️❗️ 9. str.split("") : 문자열을 배열로 만들어줌! ==> 아주 중요!! 
// ✨tip✨ 문자열을 쪼개서 각각 봐야하는 문제가 있으면 반드시 arr로 바꿔줘서 arr함수를 적용해줘야 한다. 
// ex) 숫자 각 자리의 합
let num = "547";
let arr = num
            .split('')
            .map((value) => parseInt(value))
            .reduce((acc, value) => {
                console.log(acc, value);
                return acc + value;
            }, 0);
// reduce함수 다시 한 번 살펴보기 => acc는 default값은 원래 idx[0]번째 숫자. => 일 때 value는 idx[1,2,3...] 아런식으로
// 아니라면 2번째 파라미터에 지정해줘야 함. 

// 하지만 default값이 아니라 acc의 처음 값을 지정해줬다면 value가 idx[0]부터 시작함. 
// ==> 이런식으로 풀어도 좋음. 


// ⭐️ 정리 ⭐️
// 1. str.indexOf("값이나 문자열") => 있다면 그 위치 idx, 없다면 -1(-1일 때 조건문 조심!)
// 2. str.includes("값") => 값이 있다면 true, 없다면 false를 return
// 3. str.startsWith("값") => str이 값으로 시작한다면 true, 아니라면 false
// 4. str.endsWith("값") => str이 값으로 끝난다면 true, 아니면 false
// 5. str.uppercase() => str전체를 대문자로
// 6. str.lowercase() => str전체를 소문자로 
// 7. str.slice(n,m) => idx n부터 m-1번까지 문자열을 잘라서 새로운 문자열을 만든다!! => 깊은 복사! 
    // -> 만약 파라미터에 값이 없을경우, 전체를 잘라서 복사한다. 
// 8. str.trim() => 처음과 끝 공백문자를 제거해준다. => client에게 편안함을 준다. 
// 9. str.split() => (문자열 => 배열) 
// - arr.join() => (배열 => 문자열)
