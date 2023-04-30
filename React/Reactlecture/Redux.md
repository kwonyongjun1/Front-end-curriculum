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


### Provider
  Redux 스토어를 React 애플리케이션에 제공하는 최상위 컴포넌트이다. 
  Provider를 사용하면 모든 하위 컴포넌트에서 Redux 스토어에 접근할 수 있습다. Provider는 React Redux 라이브러리에서 제공한다.
  
  ``` javascript
  import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
  ```
  
  
### useSelector
 Redux 스토어에서 상태를 선택하는 데 사용되는 훅이며 
 
 useSelector 함수는 셀렉터(selector) 함수를 전달받아 스토어에서 필요한 상태를 선택한다. 
 
 이 함수는 상태를 반환한다.
 
 ``` javascript
 import { useSelector } from 'react-redux';

function MyComponent() {
  const count = useSelector(state => state.count);
  return <div>{count}</div>;
}
 ```
 
 
### useDispatch

Redux 액션을 발생시키는 데 사용되는 훅이며

useDispatch 함수는 dispatch 함수를 반환합니다. 

이 함수를 사용하면 액션 객체를 생성하고 dispatch 함수를 호출하여 액션을 발생시킬 수 있다.

``` javascript
import { useDispatch } from 'react-redux';
import { increment } from './actions';

function MyComponent() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(increment());
  };
  return <button onClick={handleClick}>Increment</button>;
}
```
