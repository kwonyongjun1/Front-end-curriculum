### React.memo

컴포넌트가 동일한 props로 동일한 결과를 렌더링해낸다면, React.memo를 호출하고 결과를 메모이징(Memoizing)하도록 래핑하여 경우에 따라 성능 향상을 누릴 수 있다. 즉, React는 컴포넌트를 렌더링하지 않고 마지막으로 렌더링된 결과를 재사용한다.


부모 컴포넌트가 렌더링 되면 모든 자식 컴포넌트 또한 렌더링 되는데 props가 변경되지 않았다면 자식 컴포넌트는 렌더링 될 필요가 없다. 이때 React.memo 함수를 사용해 불필요한 렌더링을 방지해 준다.


사용법은 react.memo를 감싸주면된다.

```
// case 1 
const Test = () =>{

}

export default react.memo(Test)

// case 2

const Test = react.memo(() =>{

}
)
export default Test

```

#### 사용하는경우 

1. 함수형 컴포넌트인 경우
2. 컴포넌트가 같은 props로 자주 렌더링 되는 경우
3. 무겁고 복잡한 연산이 있는 경우

#### 사용할 필요가 없는 경우

1. 컴포넌트가 다른 props로 자주 렌더링 되는 경우
2. 가벼운 프로젝트인 경우

