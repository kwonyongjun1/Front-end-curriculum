```javascript
function test(){
	test = 10;
}
test();
console.log(test); // test = 10
```

암묵적 전역 특징을 갖고있는 javascript는 위와 같이 선언된 상황에도 프로퍼티를 동적으로 생성되어 오류가 발생하지 않는다. 이로 인해 오류 발생시키는 원인이 될 가능성이 있다. 

ES5부터 strict mode가 추가되었는데 

```javascript
'use strict';

function test(){
	test = 10; // ReferenceError: test is not defined
}
test();
console.log(test); 
```
strict mode는 **기존 javascript 에서 허용했던 문법들 중 오류 발생이 높거나 자바사크립트 엔진의 최적화 작업에 문제가 될 수 있는 코드들을 위와 같이 명시적으로 에러를 발생시킨다.**

ESLint와 같은 린트 도구를 사용하여도 strict mode와 유사한 효과를 얻을 수 있다. 린트 도구는 정적 분석(static analysis) 기능을 통해 소스 코드를 실행하기 전에 소스 코드를 스캔하여 문법적 오류만이 아니라 잠재적 오류까지 찾아내고 오류의 이유를 리포팅해주는 유용한 도구이다.

### strict mode 주의 사항 

````javascript
   (function(){
     'use strict';
     // strict mode
     // source code
   }());	

````
>
#### 전역에 strict mode를 적용하지말자
전역에 적용한 strict mode는 스크립트 단위로 적용되며  외부 서드 파티 라이브러리를 사용하는 경우, 라이브러리가 non-strict mode일 경우 strict mode와 non-strct mode가 혼용되어 오류를 발생할 수 있다. 이러한 경우, 위 코드와 같이 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다. 

````javascript

(function () {
  // non-strict mode
  test = 10; // no error

  function foo() {
    'use strict';

    let = 20; // error
  }
  foo();
}());

````
>
#### 함수 단위로 strict mode를 적용하지말자
일관성있지않게 함수 단위로 strict mode를 적용하지 않으면 strict mode와 non-strict mode가 혼용되어 문제가 발생할 수 있다.




### strict mode가 에러 발생시키는 경우
> 
- 암묵적 전역 변수
- 변수,함수,매개변수의 삭제 
- 매개변수 이름의 중복
- with문의 사용
- 일반 함수의 this

