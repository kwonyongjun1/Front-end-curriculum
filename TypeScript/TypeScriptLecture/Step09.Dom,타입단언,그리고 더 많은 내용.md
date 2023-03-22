### 1. 선택적(Optional)

<br>

``` javascript
// TypeScript는 사전에 반환 요소를 제네릭 HTML 요소이거 null인 것만 인지
const btn = document.getElementById("btn");

btn?.addEventListener("click", function(){ // ?를 붙이면 bnt이 존재하면 실행, 존재하지 않으면 실행하지 않음
    alert("CLICKED!!!");
})

```


### 2. Non-Null 단언 

<br>

```javascript 
// TypeScript는 사전에 반환 요소를 제네릭 HTML 요소라고 인지
const btnNotNull = document.getElementById("btn")!; 

btnNotNull.addEventListener("click", function(){ 
    alert("CLICKED!!!");
})

```

### 3. 타입 단언

<br>

``` javascript
let mystery: unknown = "Hello World!!"; // unknown 타입

const numChars = (mystery as string).length; // string 타입


```

