// 컴퓨터 프로젝트 한다고 가정함! 

// 객체 만드는 방법 
    // 1. 객체 리터럴 
    let cpu1 = {
        company : 'apple',
        title : 'm1 mac pro 14',
    }

    // 2. 생성자 함수( 잘 사용❌ => class사용하자)
    // -> 생성해야 할 비슷한 객체가 여러개일때 리터럴 방식을 100개 쓰면 코드가 너무 길어지고 복잡해짐.
    function Com(company, title){
        this.company = company;
        this.title = title;
        this.intro = () => {
            console.log(`${this.company} 와 ${this.title}인 컴퓨터입니다.`);
        }
    }
    let com1 = new Com("mac", "m1 macpro 14"); 
    // 생성자 함수는 호출할 때 특별하게 new라는 키워드를 붙여서 호출함.

    // 3. class(생성자 함수는 잘 사용되지 않음.)
    // => 객체지향을 구현하기 위해 class는 원래 js에선 없지만 비슷한 효과를 지원함. 
    // => 생성자함수 대신에 class라는 문법을 통해 여러개의 인스턴스를 생성
    // => class로 생성된 객체들은 << 인스턴스 >> 라고 부른다!!
    class Computer{
        constructor(company, title, ramSize, cpuName){ // 생성자 함수! 
            this.company = company; // 멤버변수 5개(값이 함수인 것 한 개.. => 메서드)
            this.title = title;
            this.ramSize = ramSize;
            this.cpuName = cpuName;
            
        }

        // 메서드는 생성자함수 밖에다가! => 생성자함수 안에는 멤버변수만 올 수 있다. 
        intro = () => { // class안에서 멤버변수의 값으로 사용된 함수를 메서드라고 부른다. 
            console.log('Computer클래스 안에 있는 메서드입니다.');
        }
    }
    console.log(`클래스 이름 >> ${Computer.name}`); // class이름 출력! 

    // 4. getter setter
    // 접근자 프로퍼티 : 멤버변수같지만 실제로는 함수! 

    class Rectangle{
        constructor(width, height){
            this.width = width;
            this.height = height;
        }
        // get : 멤버변수를 그대로 or 좀 변형해서 return해주는 함수.  
        get width(){ 
            return this.width + "입니다";
        }
        get height(){
            return this.height + "입니다";
        }
        // setter : 멤버변수에 값을 저장시킬 때 filter역할을 해준다. 
        set width(value){
            value > 0 ? this.width = value : console.log('width가 음수는 안 됩니다.');
        }
        set height(value){
            value > 0 ? this.height = value : console.log('height가 음수는 안 됩니다.');
        }
    }