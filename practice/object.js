'use strict';
// 일단 자료형임! 


// 객체의 필요성 
// 왜 도대체 변수들 함수들을 모아둬....? => 이게 도대체 뭔데? 
// 자 일단 변수란 무엇일까? => 변수란 사용자가 input을 하는 것들을 잠시 보관하기 위해 두는 사물함이다.
// 예를들면, 사용자의 나이를 입력받고, 그것을 잠시 보관하기 위해 name이란 변수를 사용하는 것과 같다. 

// notebook을 만들면 보통 우리는 노트북의 정보를 웹 화면에 표시하고, 
// 사람들은 노트북의 field를 가지고 웹 페이지에서 검색하고 한다. 
// 그래서 우리는 노트북 관련 field들을 객체에 변수로 선언해놓고 모아둔다. => 어차피 비슷하 것들이니까. 
// => 그리고 비슷한 노트북 동작들도 죄다 묶어둔다.
// 왜냐면!! 변수는 사용자가 입력한 것을 잠시 보관해두는 사물함이니까.. 
// ⭐️ 근데 사람들이 뭘 검색해? => 당연히 노트북 관련된 걸 검색하겠지. 
// ⭐️ 그래서 노트북 관련된 변수들이 필요한거야. 
// ⭐️ 그 변수들을 한 번에 모아둔게 객체이고.

// 그럼 user객체는 왜 필요해! 
// 사람들이 로그인을 하고, 그 로그인 id pw변수들을 입력을 해 페이지를 들어올 때! 
// 그리고 user의 다양한 정보들이 field들이 내가 로그인을 하면 마이페이지에 뜨지? 
// ⭐️ 그래서 display에 다양한 유져 필드들이 렌더링 되고, 그 변수들을
// ⭐️ 죄다 한 번에 모아두니까 그게 user객체야! 


// 노트북 프로젝트 
// 노트북 객체 
class Person {

    constructor(name, age) {
        this.Name = name;
        this.age = age;
    }

    get name() {
        return this.Name.toUpperCase();
    }

    set name(newName){
        if(newName){ 
            this.Name = newName;
        }
    }

}

const p1 = new Person("지성", 25);
console.log(p1);