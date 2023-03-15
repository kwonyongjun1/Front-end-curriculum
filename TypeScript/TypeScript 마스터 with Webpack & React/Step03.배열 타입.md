### 1. 배열 타입 다루기

TS에서는 함수 파라미터, 반환 값, 변수를 어노테이션 처리함으로 배열이라고 알 수 있다.

```javascript
const activeUsers: string[] = []; // == const activeUsers: Array<string> = [];

activeUsers.push("Tony")

const ageList: number[] = [45, 56, 130];
ageList[0] = 9;
ageList[0] = "gd"; // error
```

### 2. 배열 구문 더 알아보기

```javascript

type Point = {
  x: number,
  y: number
}

const coords: Point[] = [];
coords.push({x: 4, y: 12});

```

### 3. 다 차원 배열

```javascript

const board: string[][] = [
  ["X","O","X"],
  ["X","O","X"],
  ["X","O","X"],
];

```
