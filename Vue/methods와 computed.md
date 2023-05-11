### methods와 computed


``` javascript
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}

```

``` javascript 
computed: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
```
두 코드 모두 구조가 비슷하다 하지만 차이점은 

method는 재 렌더링 할때마다 항상 메소드를 호출한다.

하지만 computed 는 종속 대상을 캐싱하는 특징을 가지고 있다. 예제의 message 의 값이 변했을 경우에만 재 렌더링 한다.
즉, computed는 종속대상의 값이 변경되지 않는다면 다시 실행하지 않는다.


### 캐싱하는 이유

코드를 작성하다보면 자주 바뀌지는 않지만 중요한 계산이 필요할 때가 있다. 

그때 methods를 사용하면 렌더링 될때마다 계산을 진행해야한다. 따라서 이 경우에는 computed 를 사용해 변경시에만 호출하도록 하는 것이 좋다.
