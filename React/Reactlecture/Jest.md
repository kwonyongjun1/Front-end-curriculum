### Jest란
<br>
ReactTestingLibrary와 함께 사용되며 ReactTestingLibrary가 컴포넌트를 렌더링을 해주면

렌더링이된 컴포넌트를 Jest로 테스트를 한다.


FaceBook에 의해서 만들어진 테스팅 프레임 워크이며 최소한의 설정으로 동작하며 Test Case 를 만들어서 어플리케이션 코드가
잘 돌아가는지 확인해주며 단위 (Unit) 테스트를 위해서 이용한다.

### Jest 시작하기

1. Jest 라이브러리 설치     npm install jest --save-dev
2. Test 스크립트 변경        "test" : "jest"    or   "jest --watchAll
3. 테스트 작성할 폴더 및 파일 기본 구조 생성

![image](https://user-images.githubusercontent.com/70560755/230902852-83b46fb2-a271-4e04-b375-b21de45cae5e.png)



![image](https://user-images.githubusercontent.com/70560755/230902661-e199902a-dfc1-46ba-9629-9fc5f50f2454.png)


### Jest 파일 구조 및 사용법

![image](https://user-images.githubusercontent.com/70560755/230903771-a3a0aae6-85dd-40fa-bbfc-207e34c50430.png))


#### describe : 여러 관련 테스트를 그룹화하는 블록을 만든다.

#### it(=test) : 개별 테스트를 수행하는 곳. 각 테스트를 작은 문장처럼 설명한다. 

![image](https://user-images.githubusercontent.com/70560755/230903812-3a47d483-36a6-4c8f-a054-515b944f2e37.png)


#### expect : expect 함수는 값을 테스트할 때마다 사용되며 expect 함수 혼자서는 거의 사용되지 않으며 matcher와 함께 사용된다.

#### matcher : 다른 방법으로 값을 테스트 하도록 "matcher"를 사용한다.
<br>

### expect matcher 사용 예시

<br>

![image](https://user-images.githubusercontent.com/70560755/230904030-25836882-63ab-489d-8f0f-5a64b1d2a12e.png)

![image](https://user-images.githubusercontent.com/70560755/230904056-0c66b777-469f-47d4-bb7c-c06267b8551b.png)

