### useCallback

특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용된다.


```javascript
const handleClick = useCallback((id) =>{
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData)
  }, [todoData])
```

useCallback 적용은 useCallback 안에 콜백함수와 의존성 배열을 순서대로 넣어주면 된다.


함수 내에서 참조하는 state, props가 있다면 의존성 배열에 추가해주시면 되고 useCallback으로 인해서 todoData가 변하지 않는 다면 함수는 새로 생성되지 않는다. 

새로 생성되지 않기에 메모리에 새로 할당되지 않고 동일 참조 값을 사용하게 되며 의존성 배열에 아무것도 없다면 컴포넌트가 최초 렌더링 시에만 함수가 생성되며 그 이후에는 동일한 참조 값을 사용하는 함수가 된다. 
