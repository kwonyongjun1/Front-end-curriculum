### 1. 제네릭 개요
<br>
제네릭은 여러 타입에서 사용할 수 있는 재사용 함수나 재사용 클래스를 정의할 수 있게 해주는 특수 구문이다.

입력 타입에 따라 그 타입으로 반환한다는 관계를 설정한다.

```javascript

interface Cat{
    name:string;
    age: number;
}

function identity<T>(item: T): T{
    return item;
}

identity<number>(5);
identity<string>("hi");
identity<Cat>({name : 'miya', age: 5})

```

### 2. 다른 제네릭 함수 작성하기
<br>

```javascript

function getRandom<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

getRandom<string>(["a","b","c"]);
getRandom<number>([32,12,4,6]);
```

### 3. 추론된 제네릭 타입 파라미터
<br>

제네릭 함수에 타입을 선언하지않아도 파라미터 혹은 인수를 통해 타입을 추론할 수 있다.

```javascript

function getRandom<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

getRandom(["a","b","c"]);
getRandom([32,12,4,6]);
```

### 4. 제네릭, 화살표 함수 및 TSX 파일
<br>

tsx : TypeScript를 사용할 수 있는 JSX 파일
JSX에선 javascript에 HTML 템플릿을 작성하는 방식으로 항상 홑화살괄호('<')를 사용해야한다
제네릭에도 같은 구문을 사용하여 화살표 함수를 작성하면 헷갈릴 수 있다

TSX 파일로 작업하면서 제네릭 함수인 화살표 함수를 작성할 땐 후행 쉼표를 붙이지 않으면 오류가 발생한다.

```javascript

const getRandom = <T,>(list: T[]): T =>{
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

```

### 5. 여러 타입을 가진 제네릭
<br>

두 개이상의 타입 파라미터를 갖을 수도 있다.
```javascript
function merge<T,U>(object1:T, object2:U){
    return {
        ...object1,
        ...object2
    }
}

const comboObj = merge({name: "colt"}, {pets: ["blue","elton"]});

```

### 6. 타입 제한 추가하기
<br>
extends를 사용하여 제네릭 타입을 제한 할 수 있다.

```javascript
function merge<T extends Object,U extends Object>(object1:T, object2:U){
    return {
        ...object1,
        ...object2
    }
}
const comboObj = merge({name: "colt"}, {num: 9});


interface Length{
    length : number;
}

function printDoubleLength<T extends Length>(thing: T): number{
    return thing.length * 2;
}
```

### 7. 기본 타입 파라미터

<br>

제네릭에 타입 파라미터에 기본값을 지정할 수 있다.

```javascript

function makeEmptyArray<T = number>(): T[]{
    return [];
}

const nums = makeEmptyArray(); // 기본 타입값이 number이기 때문에 number로 인식
const bools = makeEmptyArray<boolean>();

```

### 8. 제네릭 클래스 작성

<br>
클래스에 포함되는 다양한 메서드를 작성할 때 타입을 갖도록 구성할 수 있다.

```javascript
interface Song{
    title: string;
    artist: string;
}

interface Video{
    title: string;
    creator: string;
    resolution: string;
}

class PlayList<T>{
    public queue: T[] = [];
    add(el: T){
        this.queue.push(el);
    }
}

const songs = new PlayList<Song>();

const Videos = new PlayList<Video>();
```

