###  1.객체 타입

TypeScript에서는 객체를 설명하는 어노테이션을 만들 수 있으며 변수 또는 객체를 선언할 때, 타입을 정의해야한다.

정의하는 방법은 interface와 type이 존재
일반적으로 확장성이 좋은 interface 사용을 권장한다.
타입이 심플하거나 절대 변경되지 않는 경우에는 type을 사용하여 객체의 타입을 정의한다.

##### interface 구현
<br>

```javascript

interface IUser {
  name: string,
  age : number
}

let obj: IUser = { name: 'NAME', age: 29 };
```


##### type 구현
<br>

```javascript
type UserType = {
  name: string,
  age : number
}

let obj: UserType = { name: 'NAME', age: 29 };
```

##### 어노테이션 구현.

``` javascript
const printName = (name : { first : string, last : string}){
  return Name : `${first} ${last}`;
}

printName({firstt : 'Will', last :  'Ferrell'})
```

### 2. 객체 타입 더 알아보기

###### 반환 타입 이나 변수에도 같은 작업을 할 수 있다.

``` javascript
let coordinate: {x: number, y: number} = {x : 34, y: 20};

function randomCoordinate(): {x: number, y: number}{
  return{ x: Math. };
}
```
객체 리터럴 형태의 반환 타입 어노테이션을 가지는 함수를 만들 수 있고
객체 타입을 사용하는 변수를 가질 수 있다.
함수에대한 파라미터 타입 애너테이션을 작성해 객체가 되게 할 수 있다.

### 3. 초과 프로퍼티

##### 직접 객체 리터럴을 전달하는 경우 오류를 띄우지만 사전에 별도의 변수로 정의하는 과정을 거치면 저장된 프로퍼티 외에는 그냥 무시하게된다.
``` javascript 

const printName = (name : { first : string, last : string}){
  return Name : `${first} ${last}`;
}

printName({first : 'Will', last :  'Ferrell' , age : 50}); // error

const person = {first : 'Will', last :  'Ferrell' , age : 50}

printName(person); // success 정의된 first, last 프로퍼티 외에는 무시한다.

```

### 4. 타입 별칭 생성하기

타입을 재사용하고 이름을 저장하는 방법이며 열 프로퍼티를 가지는 복잡한 객체 타입에 사용된다.

```javascript
type Point = {  
  x : number;
  y : number;
}

function doublePoint(point: Point): Point {
  return { x: point.x*2, y: point.y*2};
}

```

### 5. 중첩 객체





