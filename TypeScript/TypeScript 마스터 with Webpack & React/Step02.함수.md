### 1. 함수 파라미터 어노테이션

TypeScript의 함수는 JavaScript처럼 함수를 생성할 수 있지만, 매개변수의 타입과 반환 타입을 설정해야 한다.

<br>

> function 변수명(매개변수 : 매개변수 타입) : 반환값의 타입 { }
<br>

``` javascript
function square(num: number): number{  

    return num*num;
}
```

###### 함수의 반환 타입은 타입 추론에 의해 생략 가능하지만, 명시하는 것을 권유된다.

#### 반환 타입을 명시하는 걸 권유하는 이유

만약 밑에 함수가 return 을 해야될 경우 
```javascript
function square(num: number): number{
   num*num // error  
}

```
return할 타입이 명시 되었지만 return을 하지 않아 오류를 잡아준다. 
복잡한 함수여서 반환문이 찾기 힘들경우 <br>
함수가 파라미터로서 예측하는 것과 반환되는걸 명시해두면 쉽게 알 수있고 오류를 예방할 수 있다.


### 2. 함수 파라미터 어노테이션 더 알아보기


``` javascript
const doSomething = (name: string, age: number, isFunny: boolean) =>{  };

doSomething("kyj", 28 , true); 

```

###### 원하는 만큼 파라미터를 설정할 수 있다.

### 3. 기본 파라미터를 이용해 작업하기

```javascript

function greet(person: string = "stranger"){ 
    return `Hi there, ${person}`
}
```

###### default값은 전체 어노테이션 뒤에 와야한다.

### 4. 익명 함수 문맥상 타입 지정

```javascript
const colors = ["red", "orange", "yellow"];

colors.map(color => { // type을 지정하지 않았지만 문맥상 colors 값들이 string이란 걸 인지하여 color의 type을 string이라 지정한다.
  return color.toUpperCase(); 
})
```

### 5. Void 타입


```javascript
function print(msg: string): void {
  console.log(msg);
}
```

함수에 아무것도 반환하지 않는다는걸 명시하기위해 사용된다.


### 6. Never 타입

함수의 반환 타입으로 쓰이거나 절대 반환되지 않아야 할 함수를 어노테이션 처리할 때 쓰인다.

```javascript
function test(input:string): never{
  console.log(input);
  
  return input ; // error  return 값이 있기 때문에 error
}
```

#### void 와 never의 차이점 

void는 엄밀히 값이다. void를 반환한 함수고 undefined 상태로 반환된다.

never는 절대 반환할 값이 있으면 안되는 미묘한 차이가 있다.
