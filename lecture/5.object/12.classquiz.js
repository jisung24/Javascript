'use strict';

// 캐러셀 class만들기! 
class Carousel{
    constructor(currPages, allPages){
        this.currPages = currPages;
        this.allPages = allPages;
    }
    // get set으로 일단 예외처리를 해 준다. 
    // get currPages(){
    //     return this.currPages;
    // }
    // set currPages(val){
    //     val <= 0 ? 'console.log(`페이지는 0보단 커야합니다.`)' : this.currPages = val;
    //     // 입력받은 현재 페이지가 0보다 클때만, 입력을 받아주고, 아니면 걸러준다. 
    // }

    // 메서드 
    // 페이지 나타내주는 메서드.
    curr = () => {
        console.log(`현재 페이지는  ${this.currPages}입니다.`);
    }
    // 이동시켜주는 메서드
    next = () => {
        console.log(`지금 페이지 >> ${this.currPages + 1}번 됨.`);
    }
}

let car1 = new Carousel(1, 5); // 현재 1페이지, 총 5페이지
car1.next(); // 다음 페이지 이동! (2번 됨);

// 그니까 어떤 기능을 하나 잡아서 그 물체의 기능과 변수들을 전부 class안에 때려박아!! --> 이런식으로 class우리 한 번 작성해보자!!

// ex) 학생관련한 학생 class => 학생에 대한 기능도 있어야 돼! 