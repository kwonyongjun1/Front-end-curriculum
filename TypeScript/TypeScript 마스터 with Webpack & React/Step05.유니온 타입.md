### 1. 유니온 타입으로 타입 좁히기

유니온 타입은 변수의 값이 여러 타입을 가지는 경우 주로 사용된다.

<br>

```javascript

function calculateTax (price:  number | string, tax: number){ // price는 number일 수도 있고 string일 수도 있다.
  if(typeof price === "string"){ // price 타입이 string 이란게 명확하므로 compile
     return price.replace("$", "");
  }else{
     return price * tax; // price 타입이 number란게 명확하므로 compile
  }
}

```

### 2. 유니온 타입과 배열

유니온 타입을 활용하여 배열에도 사용할 수 있다.

<br>


``` javascript

const stuff: (number| string)[] = [1,2,3,"gd"];

```

### 3. 리터럴 타입

리터럴 타입이은 고정된 값을 지정할 수 있다.

유니온 타입에 리터럴 타입을 활용하면 변수나 함수 파라미터에 여러 리터럴 타입을 선언할 떄 유용하다.

<br>


``` javascript
let zero: 0 = 0;

zero = 0; // compile
zero = 1; // error

type DayOfWeek = "Mon" | "Tue" | "Wed" | "Thur" | "Fri" | "Sat" | "Sun";

let today1: DayOfWeek = "monday" //error DayOfWeek 타입에서 monday를 지정하지 않았기 때문에 오류 

let yesterday: DayOfWeek = "Tue" //compile


```


