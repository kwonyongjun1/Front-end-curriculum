### React Testing Library란


<br>

React Testing Library는 React 구성 요소 작업을 위한 API를 추가하여 DOM Testing Library 위에 구축되며

Dom 노드(Node)를 테스트하기 위한 매우 가벼운 솔루션입니다.

Create React App으로 생성된 프로젝트는 즉시 React Testing Library를 지원하고 그렇지 않은 경우 다음과 같이 npm을 통해 추가할 수 있다.

<br>

```
npm install --save-dev @testing-library/react
```
<br>

리액트 컴포넌트를 테스트하는 가벼운 솔루션이며 React Testing Library는  에어비앤비에서 만든 Enzyme을 대처하는 솔루션이다.


Enzyme이 구성 요소의 구현 세부 정보를 테스트하는 대신 React Testing Library는 개발자를 React 애플리케이션의 사용자 입장에 둔다.

<br>
즉, Enzyme은 구현 주도 테스트(Implementation Driven Test)를

React TestingLibrary는 행위 주도 테스트(Behavior Driven Test)를 한다.
