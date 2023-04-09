### useMemo

Component 내의 compute 함수가 만약 복잡한 연산을 수행하면 결과 값을 리턴하는데 오랜 시간이 걸리게 될 때 컴포넌트가 계속 리 렌더링 된다면 연산을 계속 수행하는데 오랜 시간이 걸려서 성능에 안 좋은 영향을 미치게 되며, UI 지연 현상도 일어나게 된다. 

이러한 현상을 해결해주기 위해서 사용하는 것이 useMemo 이다.

compute 함수에 넘겨주는 a, b의 값이 이전과 동일하다면 컴포넌트가 리 렌더링 되더라도 연산을 다시 하지 않고 이전 렌더링 때 저장해두었던 값을 재활용하게 됩니다. 

```javascript
function Component({a,b}){
    const result = useMemo( () => compute(a,b), [a,b])
    return <div>{result}</div>
}
```

적용법은 useMemo로 감싸준 후에 첫번째 인수에  의존성 배열에 compute 함수에서 사용하는 값을 넣는다.
