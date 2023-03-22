### 1. 네임스페이스에 대한 메모
<br>

네임스페이스는 파일 간 코드를 공유하는 다양한 방법이며

코드를 공유하고 TypeScript에서 코드를 구성하는 오래된 방식이다.

### 2. 모듈 없이 작업하기

<br>

javascript는 export나 최상위 await가 없는 파일을 모듈이 아닌 스크립트로 간주한다.

스크립트 안에서 작업할 떄 변수와 타입은 공유 전역 스코프 내부에 있다고 선언된다.

즉, export나 최상위 await 키워드를 사용하지 않으면 TypeScript는 모든 코드가 한 전역 스코프에 있다고 간주한다.


###### utils.ts
```javascript
function add(x: number,y: number){
    return x + y;
}

function sample<T>(arr: T[]):T{
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
```


###### index.ts
```javascript
sample([12, 3, 34]);
add(1,2);
```


지금은 모듈로 작업하지 않으므로 모두 전역 스코프 안에있다.


### 3. TypeScript 모듈 이용하기

<br>

export 키워드를 넣으면 TypeScript는 모듈에서 작업한다고 인식한다.
다른 모듈의 변수의 타입을 가져다 쓰고 싶을때 export와 import를 사용해 가져다 쓸 수 있다.

###### utils.ts
```javascript
export function add(x: number,y: number){
    return x + y;
}

export function sample<T>(arr: T[]):T{
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
```


###### index.ts
```javascript
import {add,sample} from "./utils.js" // javascript로 컴파일되기 때문에 함수명을 .js로 선언

sample([12, 3, 34]);
add(1,2);
```

### 4. 컴파일 모듈 시스템 변경하기

<br>


브라우저에서 export, import 모듈 구문을 사용하기 위해서는 ES모듈로 변경하고 script 태그에서 module 타입을 선언해줘야한다.


###### package.json

```javascript

"module" : "ES6" // 1. commonjs로 되어 있으면 ES로 시작되는 값으로 바꿔야한다.
 
```

###### index.html
``` html
<body>
    <script type="module" src="./dist/index.js"> </script> <!-- 2. type을 module이라고 선언해준다. -->
</body>

```

### 5. Import/Export 구문 자세히 알아보기

<br>

export는 함수, 클래스, 상수 등 뭐든 export를 할 수 있다.

export default 키워드로 기본 내보내기를 만들 수 있다.이 키워드는 파일이나 모듈마다 하나만 만들 수 있는데 기본 내보내기에 해당하는 값을 가져올 땐 {}를 사용할 필요가 없다.

###### User.ts
``` javascript

export default class User{
    constructor(public username: string, public email: string){}
    logOut(){
        console.log(`${this.username} logs out!!`);
    }
}

export function userHelper(){
    console.log("Help!");
}

```


###### index.ts
``` javascript
import {add,sample as randomsample} from "./utils.js" // as로 명칭을 바꿔줄 수 있다.
import User,{userHelper} from "./User.js"; // export default는 

randomsample([12, 3, 34]);
```

### 6. 타입 가져오기

<br>

타입을 가져올 때 Babel 같은 트랜스파일러를 사용하면  문제가 발생하는데 TypeScript 3.8버전 부터
import 문에 type을 추가하면 안전하게 타입을 가져올 수 있다. 

###### types.ts
```javascript 
export interface Person{
    username: string;
    email: string;
}

export type Color = "red" | "blue";
```

###### User.ts
```javascript 
import type {Person} from './types.js'; // type 이라고 명시하면 안전하게 type을 가져올 수 있음

export default class User implements Person{
    constructor(public username: string, public email: string){}
    logOut(){
        console.log(`${this.username} logs out!!`);
    }
}

export function userHelper(){
    console.log("Help!");
}
```

