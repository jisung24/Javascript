class User{
    #id = 0; // 외부에서 유져 id를 건들 수 없음. private으로! 
    #email;
    #password; // email과 password는 private으로 => 외부에서 건들 수 없게...!! 
    constructor(name, age, email, password){ // 이름 나이 이메일 비밀번호
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        // javascript공부 시작!
    }

    // getter setter로 예외처리
    get _age(){
        return this.age; // 입력받은 나이 return해줌. 
    }
    set _age(age){
        age > 19 ? this.age = age : console.log('미성년자는 가입할 수 없습니다.');
    }

    // method
    intro = () => {
        console.log(`제 이름은 >> ${this.name}이고 나이는 ${this.age}입니다.!!`);
    }
    
}