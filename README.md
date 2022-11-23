# Javascript

## 2022-10-20

- clonesdsd

### -1) Javascript역사

        1. 1995년 `넷스캐이프`에서 NetScape Navigator(넷 스케이프가 개발한 웹 브라우져)내에서만 웹 페이지의 html요소를 조작하기 위해 만들어짐.
        2. 이후에는 딱히 인기가 없다가....
        3. 2005년 googleMap의 등장으로 Javascript의 가능성이 생김.
        4. 2008년 9월 크롬에서 c++기반으로 만들어진 V8엔진을 개발함.
        5. 2009년 V8엔진이 강력해지자, 라이언 다히는 브라우져 밖에서도 컴퓨터에서도 v8엔진을 사용하고 싶어서 node.js라는 런타임을 발명함.
        6. 노드의 개발로 Javascript로 백엔드까지 할 수 있게 됨.

### -2) Javascript엔진이란?

    - 정의 : Run Time때 자바스크립트 코드를 한 줄씩 컴퓨터가 알아들을 수 있는 언어로 해석해주는 친구.
    (js는 인터프리터 언어이다)

    - 브라우져 엔진 종류
        1. chrome(V8 Engine) => 가장 해석 속도가 빠르고 성능이 좋다!(다른 브라우져도 v8을 사용하기 시작함)
        2. 인터넷 익스플로러(Chakra)
        3. FireFox(SpiderMonkey)
        4. 사파리(Javascript Core)

### -3) ECMAScript란?

    정의 : Javascript의 문법을 정의한 스크립트 언어(새로운 버젼이 나오고 js문법은 계속 발전함).

    예시 : 반복문은 이렇게, 제어문은 저렇게, 변수 선언은 이렇게.. 등등

    현황 : ES6까지 나왔으며 계속 발전해나감.

### -4) 자바스크립트 공부방법 및 계획?

    1. 자바스크립트는 프로그래밍 언어
        자바스크립트는 로직을 표현하기 위한 그냥 문법이야!
    2. 결국 우리가 해야하는 건 js외부에 있는 브라우져, 노드api를 통해서 화면에 보여주고 네트워크 통신을 해야 함.
    3. 웹 지식 + js를 이해한다면 브라우져 node환경을 넘나들 수 있음.
    정리 : 자바스크립트 문법을 익혀서 필요한 로직을 처리하는 방법을 배우고(다양한 문제풀기) + web apis, node API들을 배워야 한다!!!

### -5) js개발툴

    1. 브라우져(F12)
    2. 브라우져 밖(NodeJS)

### -5) 브라우져 apis

    - 자바스크립트 문법 아니야!
    1. console.log()
