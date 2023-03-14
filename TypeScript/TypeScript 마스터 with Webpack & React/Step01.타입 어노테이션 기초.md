

기존 JS에 선택적으로 정적 타입 선언(Optional Static Type Notation)을 할 수 있는 표기법이 추가되었다.


선택적 정적 타입 선언 표기법 (Optional Static Type Notation)

-> TS를 이용하면 변수에 정적으로 미리 타입 선언하는 것이 가능하다

### Type Script Primitive 

Number
String
Boolean 

Null
Undefined
void

any
Never
Unknown


### 1. Type Annotation
<br>

> let 변수명: 변수형 = 변수값; 

<br>

``` javascript

let myString: string = "hello";

myString = 100; // error

myString = "bye"; // complete

```

### 2. Type Inference

 TypeScript에서 명시적인 타입 표기가 없을 때 타입 정보를 제공하기 위해 사용되는 것이다.

결론적으로 자동으로 타입을 결정해주는 것이라고 보면 된다.


``` javascript

let food = "chicken";

food = 100; // error

food = "pizza"; // complete

```

### 3. any Type

any Type은 어떠한 타입도 허용하는 타입이다.


``` javascript
let thing: any = "hi";
thing = 1; // complete
thig = false; // complete
thing(); // complete
```

### 4. 지연된 초기화 및 암묵적 Any (Type Annotation을 사용하는 경우)
 
``` javascript
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie; // 2. 이미 암묵적으로 Any Type으로 설정되어 

for(let movie of movies){
    if(movie === "Amadeus"){
        foundMovie = "Amadeus" // 1. foundMovie 변수가 String Type으로 추론할거라 예상되지만 
    }
}

foundMoive(); // compile
foundMovie = 1; // compile

// 3. 컴파일이되며 실행하게 되면 오류를 발생하게 된다. 
// TypScript의 핵심 기능인 타입에 관한 기능을 놓치게 된다.
```

###### goodExample
``` javascript
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string; // string ype으로 설정

for(let movie of movies){
    if(movie === "Amadeus"){
        foundMovie = "Amadeus" 
    }
}

foundMoive(); // error
foundMovie = 1; // error
```

