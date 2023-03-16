### 1. 튜플 개요
배열 타입이지만 길이와 타입과 배열 순서가 고정된다. 

<br>

```javascript
let myTuple: [number, string] = [2342, "mytuple"];

```

### 2. 튜플 더 알아보기

<br>

``` javascript
type HTTPResponse = [number : string];

const goodRes: HTTPResponse = [200, "OK"]; // 1. 튜플은 생성된 시점에만 규칙을 따른다

const responses: HTTPResponse[] = [[404,"Not Found"], [200, "OK"]];

goodRes[0] = "200"; // compile 2. 설정한 타입이 아니여도 생성된 시점 이후에 조작하면 compile이 된다.
goodRes.push(123); // compile
goodRes.pop(); // compile

```

### 3. Enum

Enum은 명명된 상수 집합을 정의할 수 있다.
코드 전체에서 재사용할 수 있는 명명된 상수의 집합이다.
한 묶음의 이름을 enum에 지정하면 계속해서 참조가 가능하고 편리하게 자동 완성 기능도 사용가능하다.

<br>

``` javascript
enum OrderStatus {
PENDING,
SHIPPED,
DELIVERED,
RETURNED,
}
const myStatus = OrderStatus.DELIVERD;

function isDelivered(status: OrderStatus){
return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);


```


