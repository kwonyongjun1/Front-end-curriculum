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

중첩된 객체인 경우 어노테이션 처리를 어떻게 할까?
같은 형식으로 중첩하여 타입을 정의하면 된다.

```javascript
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string};
};

const mySong: Song = {
  title : "Melody",
  artist : "eminem",
  numStreams : 123,
  credits: {
    producer : "Paul",
    writer : "Alex"
  }
}
```

### 6. 선택적 프로퍼티

객체와 객체 타입 설정에 관한 것 중 선택적 프로퍼티 생성 방법도 있다.
즉, 일부 프로퍼티를 선택적 요소로 만들 수 있다. 

프로퍼티 뒤에 ?를 붙이면된다.
```javascript
type Point = {
  x: number;
  y: number;
  z?: number; // 선택적 프로퍼티
}

const myPoint: Point = {x: 1,y: 2}; // compile
```


### 7. readonly 제어자

객체 내의 특정 프로퍼티를 표시하거나 배열이나 클래스에 접근할 때 사용되며

객체의 프로퍼티를 readonly로 표시하면 TypeScript에서는 프로퍼티를 변경할 때 경고를 해준다.

``` javascript
type User = {
  readonly id: number;
  username: string;
};
  
const user: User = {
  id : 123,
  username : "catgurl"
}

console.log(user.id); // compile
user.id = 789; // error

```

### 8. 교차 타입

2개 이상의 타입을 교차하여 사용할 수 있다.

``` javscript
type Circle = {
  radius : number;
}

type Colorful = {
  color : string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow" 
};
```
