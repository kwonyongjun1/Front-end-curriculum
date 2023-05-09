React에서 이벤트 핸들러를 등록할 때는 이벤트 핸들러 함수를 전달하는 것이 아니라, 함수를 호출하는 새로운 함수를 만들어서 전달해야 합니다. 

이것은 JavaScript의 클로저 개념을 활용하여 이벤트 핸들러 함수에서 컴포넌트의 상태를 참조할 수 있도록 하기 위해서입니다.

``` javascript
// error
<button key={item.key} onClick={searchWebtoon(item.key)}>{item.value}</button>
// success
<button key={item.key} onClick={() => searchWebtoon(item.key)}>{item.value}</button>
```
