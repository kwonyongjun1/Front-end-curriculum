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

### 8. protected 제어자

<br>

상속 작업 때 사용되며 protected를 사용하면 외부에서 액세스하는 게 불가능하지만 
자식 클래스는 액세스가 가능하다.

<br>

```javascript
class Player{
    constructor(
        public first: string,
        public last: string,
        protected _score: number){

    }
}

class SuperPlayer extends Player{
    public isAdmin:boolean = true;
    maxScore(){
        this._score = 999;
    }
}
```
<br>

public은 어디서나 액세스 가능하고 
private은 정의된 해당 클래스에서만 사용 가능하고
protected는 정의된 클래스와 그로부터 상속한 모든 클래스에서 액세스할 수 있다.

### 9. 클래스와 인터페이스

<br>

인터페이스를 구현하는 클래스는 간단하지만 아주 흔히 사용되는 방법이다.

```javascript
interface Colorful{
    color: string;
}

interface Printable{
    print(): void;
}

class Bike implements Colorful{
    constructor(public color: string){}
}

class Jacket implements Colorful, Printable{
    constructor(public brand:string, public color:string){}

    print(){
        console.log(` ${this.color} ${this.brand} jacket`);
    }
}
```

### 10. Abstract 클래스 
<br>

TypeScript에서의 Abstract은 이 자체로는 더 이상 새 클래스를 만들 수 없다는걸 의미한다.
abstract 클래스는 패턴을 정의하고 자식 클래스에서 시행돼야 하는 메서드를 정의하는데 사용된다.
인터페이스는 객체의 형태만 존재하고 abstract 클래스는 확장하는 클래스에 기능 즉, 패턴을 정의할 수 있다.

메서드 앞에 abstract를 붙이면 자식 클래스가 해당 메서드를 반드시 시행해야한다.

```javascript
abstract class Employee{
    constructor(public first: string, public last: string){}
    abstract getPay(): number; //Employee를 확장하는 모든 클래스에 존재해야한다
    greet(){
        console.log("hi");
    }
}

class FullTimeEmployee extends Employee{
    constructor(first: string, last: string, private salary: number){
        super(first,last);
    }
    getPay(): number {
        return this.salary;
    }
    
}

class PartTimeEmployee extends Employee{
    constructor(
        first: string, 
        last: string, 
        private hourlyRate: number, 
        private hoursWorked: number){
        super(first,last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 9500);
console.log(betty.getPay()); // 9500 
console.log(betty.greet());  // hi

```
확장할 abstract 클래스와 interface는 동시에 구현이 가능하다