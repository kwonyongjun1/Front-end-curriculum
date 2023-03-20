### 1. TypeScript에서 클래스 어노테이션 처리하기 

<br>

```javascript
// TypeScript에서의 클래스 어노테이션 처리

class Player{
    first: string;
    last: string;
    score: number = 0;
    constructor(first: string, last: string){
        this.first = first;
        this.last = last;
    }
}

const elton = new Player("Elton", "Steele");
```

### 2. readonly 클래스 프로퍼티

<br>


```javascript

class Player{
    readonly first: string;
    readonly last: string;
    score: number = 0;
    constructor(first: string, last: string){
        this.first = first;
        this.last = last;
    }
}

const elton = new Player("Elton", "Steele");
elton.first = "elton"; //error

```

### 3. public

<br>

기본적으로 public이므로 따라서 public 접근 제어자는 필수는 아니지만, 다른 개발자가 클래스 외부에서도 변경, 접근,쓰기를 할 수 있다고 명확히 알리기위해 public을 사용하며 어디에서든 쓸 수 있다. 

```javascript

class Player{
    public readonly first: string;
    public readonly last: string;
    public score: number = 0;
    constructor(first: string, last: string){
        this.first = first;
        this.last = last;
    }
}

const elton = new Player("Elton", "Steele");

```

### 5. private

<br>

private은 해당 프로퍼티 또는 메서드가 오직 클래스의 내부에서만 접근 및 사용할 수 있다.

private을 하는 방법은 2가지 방법이 있다.

프로퍼티 또는 메서드 앞에 
 1. private을 추가
 2. #추가


```javascript

class Player{
    public readonly first: string;
    public readonly last: string;
    private score: number = 0; // 1. private
    #score: number = 0; // 2. private 
    constructor(first: string, last: string){
        this.first = first;
        this.last = last;
    }
}

const elton = new Player("Elton", "Steele");
elton.score; // error 1. private
elton.#score; // error 2. private
```

### 6. 파라미터 프로퍼티 단축 구문

<br>

5. private의 소스코드와 같은 효력을 발생한다. 
이렇게 단축하여 사용할 수 있다는 사실을 알고있자

```javascript

class Player{
    // public readonly first: string;
    // public readonly last: string;
    // private score: number = 0;
    constructor(
        public first: string,
        public last: string,
        private score: number){

    }
}

const elton = new Player("Elton", "Steele", 100);
```

### 7. Getter와 Setter


```javascript

class Player{
    public readonly first: string;
    public readonly last: string;
    private _score: number = 0;
    constructor(
        public first: string,
        public last: string,
        private _score: number){}

    get score(): number{
        return this._score;
    }

    set score(newScore: number){
        if(newScore < 0){
            throw new Error("Can not");
        }
        return this._score;
    }
}

const elton = new Player("Elton", "Steele", 100);

elton.score = 99;
console.log(elton.score); // 99
```

