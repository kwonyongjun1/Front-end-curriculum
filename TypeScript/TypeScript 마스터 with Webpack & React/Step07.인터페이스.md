
### 5. 인터페이스 vs 타입별칭

대부분의 작업의 경우 이 둘의 역할은 동일하지만 핵심적인 차이가 있다.

1. 인터페이스는 오직 객체 형태만 묘사할 수 있다. 타입 별칭은 모든 타입을 묘사 할 수 있다.
즉, 모든 종류의 타입 별칭을 인터페이스로 대체할 수는 없으므로
객체의 형태를 묘사하는 경우가 아니라면 타입 별칭을 사용해야만 한다.

2. 인터페이스는 이미 생성되었어도 추가할 수 있다.
인터페이스가 개별 사용 사례에 적용될 수 있고, 전체 인터페이스를 다시 작성해야 할 필요가 없다.

3. 인터페이스는 상속이 가능하다.

#### 객체 타입을 묘사할 때는 인터페이스를 쓰는게 유용하다.


(강의에 젤 중요한 요점이라 올려두었다.)


### 1. 인터페이스 개요

타입 별칭과 인터페이스는 유사하다.

오직 객체의 형태를 묘사하는 데에 사용된다.


```javascript
interface Point {
  x: number,
  y: number
}

const pt: Point = {x: 123, y: 1234};

```

### 2. readonly와 선택적 인터페이스

readonly인 프로퍼티는 변경할 수 없다.

```javascript

interface Person{
  readonly id : number;
  first : string;
  last : string;
  nickname?; string;
}

let paul: Person = { id : 23 , first : "kwon" , last : "paul };

paul.id = 213 ; // error
```

### 3. Interface 메서드

``` javascript
interface Person{
  readonly id : number;
  first : string;
  last : string;
  nickname?; string;
  sayHi: () => string; // string을 리턴하는 메서드 
  //sayHi(): string;  // string을 리턴하는 메서드
  say(hi:string): string; 
}

let paul: Person = { id : 23 , first : "kwon" , last : "paul , 
  sayHi: ()=>{
    return "Hello";
  },
  say(hello:string){
    return hello;
  }
  
  console.log(paul.say("nice to meet u"));
};
```

### 4. 인터페이스 확장

1. 타 인터페이스로부터의 상속할 수 있으며 다중 상속도 가능하다.
2. 이미 생성된 인터페이스를 다시 추가할 수 있다.

``` javascript


interface Dog { // 1. 이미 생성되었지만
  name: string;
}

interface Dog { // 2. 추가할 수 있다.
  age: number;
}

interface info{
  height: number,
  weight: number
}

interface ServiceDog extends Dog{ // 단일 상속
  job: "drug"|"bomb"|"guide dog"
}

interface DogInfo extends Dog,info // 다중 상속 

const chewy: ServiceDog = {
  name : "Chewy",
  age : 3,
  job : "drug"
}

```


