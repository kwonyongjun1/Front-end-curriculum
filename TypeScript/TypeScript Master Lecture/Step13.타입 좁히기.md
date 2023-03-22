### 1. Typeof 가드
<br>

타입 좁히기란 주로 명확하지 않은 타입이 있을때 사용한다. 그런 타입을 유니온 타입이라고 하며 이를 보다 명확하게 좁히는 것이다.

typeof는 string,number,boolean과 같은 원시 값을 처리할 때 유용하다.

``` javascript
function triple(value:number | string){
    if(typeof value === "string"){
        return value.repeat(3);
    }
    return value * 3;
}
```

### 2. Truthiness 가드
<br>

참인지 거짓인지 검사해서 타입 좁히기를 할 수 있다.

```javascript
const printLetters = (word?: string) => {
    if(word){
        for(let char of word){
            console.log(char);
        }
    }else{
        console.log('not Word')
    }
}
```


### 3. Equality(동등) 좁히기

<br>

비교 연산자를 사용하여  타입을 판별하고 좁히기를 할 수 있다.

```javascript
function seomDemo(x: string | number, y: string | boolean){
    if(x === y){
        x.toUpperCase();
    }
}
```


### 3. In 연산자로 좁히기

<br>
in연산자를 통해 타입을 좁힐수 있으며 대부분의 경우에는 인터페이스나 타입 별칭을 사용해 객체로 작업하기 때문에 흔하게 사용된다.

```javascript
interface Movie{
    title: string;
    duration: number;
}

interface TVShow{
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

function getRuntime(media: Movie|TVShow){
    if("numEpisodes" in media){
        return media.numEpisodes * media.numEpisodes;
    }
    return media.duration;
}
```

### 5. Instanceof 좁히기

<br>
Instanceof는 해당 프로토타입 체인 내에 존재하는지를 확인하는 연산자이다.
특정 클래스의 인스턴스에 값이 존재하는지 등을 확인할 수 있다.

``` javascript
function printFullDate(date: string | Date){
    if (date instanceof Date){
        console.log(date.toUTCString());
    }else{
        console.log(new Date(date).toUTCString());
    }
}

class User{
    constructor(public name: string){}
}

class Company{
    constructor(public name: string){}
}

function printName(entity: User | Company){
    if(entity instanceof User ){
        entity // User
    }else{
        entity // Company
    }
}
```

typeof를 사용할 수 없는 경우에 instanceof를 사용하게 되는데 그러한 경우는 new 키워드를 사용해 초기화한 클래스등으로 작업을 하는 경우 등이 있다.

### 6. 타입 명제(Predicate) 다루기
<br>

parameterName is Type 형식으로 사용된다.

```javascript
interface Cat{
    name: string;
    numberLives: number;
}

interface Dog{
    name: string;
    breed: string;
}

// 타입 명제는 isXX 형식의 이름으로 하는것이 일반적이다.
function isCat(animal: Cat | Dog): animal is Cat{ // 이 함수가 true를 반환하면 전달된 값이 Cat 타입이라는 뜻이다.
    return (animal as Cat).numberLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string{
    if(isCat(animal)){
        return "Meow"
    }else{
        return "wowo"
    }
}
```

### 7. 판별 유니온
<br>

타입 판별에 도움되는 패턴인데 공통적인 프로퍼티를 공유하는 여러 유형을 생성하고 해당 프로퍼티가 리터럴 타입 즉 리터럴 값이 되는 것이다.
모든 타입의 공통된 프로퍼티에 판별자를 추가한다.

```javascript

interface Rooster{
    name : string;
    weight: number;
    age: number;
    kind: "rooster"; // 판별자 프로퍼티
}

interface Cow{
    name : string;
    weight: number;
    age: number;
    kind: "cow"; // 판별자 프로퍼티
}

interface Pig{
    name : string;
    weight: number;
    age: number;
    kind: "pig"; // 판별자 프로퍼티
}

type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal){
    switch(animal.kind){
        case("pig"):
            return "Oink"
        case("cow"):
            return "Moooo"
        case("rooster"):
            return "Cockadoodle"
    }
}

```

### 8. 소진검사(Exhaustiveness check) 와 Never

<br>

오류 및 상태코드를 확실하게 처리할 때 사용한다.
never 타입은 어디든 할당되지만 never에는 어떤 타입도 할당할 수 없다

밑에 코드는 never가 있어서 default는 절대 true가 되면 안된다. 

```javascript

interface Rooster{
    name : string;
    weight: number;
    age: number;
    kind: "rooster"; // 판별자 프로퍼티
}

interface Cow{
    name : string;
    weight: number;
    age: number;
    kind: "cow"; // 판별자 프로퍼티
}

interface Pig{
    name : string;
    weight: number;
    age: number;
    kind: "pig"; // 판별자 프로퍼티
}

interface Sheep{
    name: string;
    weight: number;
    age: number;
    kind: "sheep";
}
type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal){
    switch(animal.kind){
        case("pig"):
            return "Oink"
        case("cow"):
            return "Moooo"
        case("rooster"):
            return "Cockadoodle"
        default:
            // never타입이 있는데 default가 true가 되어서 오류가 발생한다.
            const _exhaustiveCheck: never = animal; // error : Type 'Sheep' is not assignable to type 'never' 
            return _exhaustiveCheck;
    }
}

```