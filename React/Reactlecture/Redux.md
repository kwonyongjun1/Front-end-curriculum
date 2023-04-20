### Redux

자바스크립트 애플리케이션 상태 관리 라이브러리이다.

애플리케이션의 상태를 예측 가능하고 디버깅 가능하게 만들어주며, 복잡한 상태 관리 문제를 해결하는 데 도움된다.

![image](https://user-images.githubusercontent.com/70560755/232972620-a0121399-cd7e-4f4f-98bc-1a6b2561b9cd.png)


### Redux 데이터 흐름

![image](https://user-images.githubusercontent.com/70560755/232973290-c691f574-6f0c-48aa-a2f4-7f847b9628d7.png)


#### ACTION

Action은 간단한 JavaScript 객체이다. 

여기에는 우리가 수행하는 작업의 유형을 지정하는 'type' 속성이 있으며 선택적으로 redux 저장소에 일부 데이터를 보내는 데 사용되는 'payload' 속성을 가질 수도 있다.

#### REDUCER

애플리케이션 상태의 변경 사항을 결정하고 업데이트된 상태를 반환하는 함수이다.

인수로 조치를 취하고 store 내부의 상태를 업데이트한다.

#### Redux Store

이들을 하나로 모으는 객체 저장소는 애플리케이션의 전체 상태 트리를 보유한다.
내부 상태를 변경하는 유일한 방법은 해당 상태에 대한 Action을 전달하는 것이다.
Redux Store는 클래스가 아니며 몇 가지 Methods가 있는 객체일 뿐이다.
