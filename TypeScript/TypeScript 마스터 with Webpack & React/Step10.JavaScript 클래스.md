### 1. Class 생성자

<br>

자바 스크립트는 원래 클래스는 없었고 프로토타입 시스템과 생성자 함수만 있었다.

생성자 정의는 필수는 아니지만 대개 클래스를 정의할 떄 사용한다.
constructor라고 정의해야 자동으로 호출된다.

```javascript
class Player{
    //생성자
    constructor(first, last){
        this.first = first;
        this.last = last;
        console.log("IN CONSTRUCTOR!")
    }
    taunt(){
        console.log("YEAH!!")
    }
}

const player1 = new Player("blue", "steele");
console.log(player1.taunt()); // IN CONSTRUCTOR! YEAH!!
console.log(player1.first); // blue
console.log(player1.last); // steele

```

### 2. 클래스 필드

<br>


클래스 필드는 필드와 프로퍼티를 빠르게 정의하게 해주는 구문으로서 클래스 안에서 자유롭게 바꿔가며 사용할 수 있다.

```javascript
class Player{
    score = 0; // class field
    numLives = 10; // class field
    //생성자
    constructor(first, last){
        this.first = first;
        this.last = last;
        console.log("IN CONSTRUCTOR!");
    }
    taunt(){
        console.log("YEAH!!");
    }
    loseLife(){
        this.numLives -= 1;
    }
}

const player1 = new Player("blue", "steele");
console.log(player1.numLives); // 10
plyaer1.loseLife();
console.log(player1.numLives); // 9

```

### 3. 프라이빗 필드

<br>

프라이빗 필드를 설정하기 위해서는 프로퍼티나 필드 앞에 # 기호를 추가하면 된다.

프라이빗 필드는 클래스 안에서만 사용가능하며 밖에서는 접근할 수 없다.

``` javascript

class Player{
    #score = 0; // private field  Player 클래스 안에서만 사용가능
    numLives = 10; 
    //생성자
    constructor(first, last){
        this.first = first;
        this.last = last;
        console.log("IN CONSTRUCTOR!");
    }
    getScore(){
        return this.#score;
    }
    setScore(newScore){
        this.#score = newScore;
    }
}

const player1 = new Player("blue", "steele");
console.log(player1.#score); // error
console.log(player1.getScore); // 0
console.log(player1.setScore(28)); 
console.log(player1.getScore); // 28

```

### 4. Getters, Setters

<br>


```javascript

class Player{
    #score = 0; // private field  Player 클래스 안에서만 사용가능
    numLives = 10; 
    //생성자
    constructor(first, last){
        this.first = first;
        this.last = last;
        console.log("IN CONSTRUCTOR!");
    }
    get fullName(){ // getters
        return `${this.first} ${this.last}`
    }

    get score(){ // getters
        return this.#score; 
    }

    set score(newScore){ // setters 
        if(newScore < 0){
            throw new Error("Score must be positive!");
        }
        this.#score = newScore;
    }

}

const player1 = new Player("blue", "steele");
console.log(player1.score); // 0
console.log(player1.score(5)); 
console.log(player1.score); // 5


```

### 4. 정적 프로퍼티와 메서드

<br>

특정 인스턴스와 관련 없으면서 클래스 자체와 연관된 기능을 클래스로 그룹화할 수 있게해준다.
즉, static은 프로퍼티나 메서드가 클래스에만 있다고 알려주는 역할을 한다.
주로 생성 메서드 혹은 새로운 인스턴스나 여러 인스턴스를 생성하는 헬퍼 등을 만들때 쓰인다.

```javascript

class Player{
    static description = "Player In Our Game";
    #score = 0; // private field  Player 클래스 안에서만 사용가능
    numLives = 10; 
    //생성자
    constructor(first, last){
        this.first = first;
        this.last = last;
        console.log("IN CONSTRUCTOR!");
    }
    
    static randomPlayer(){
        return new Player("Andy", "Samberg");
    }
}

const player1 = new Player("blue", "steele");
console.log(player1.description); // undefined
console.log(Player.description); // Player In Our Game


```

### 5. 클래스 확장(extends) 와 super

<br>

extends로 기본 클래스와 부모 클래스를 확장 할 수 있다.

생성자가 여럿이라면 super로 부모 생성자를 먼저 호출한 다음 원하는 값을 전달해야 자식 클래스에서 원하는 일을 할 수 있다.
```javascript

class Player{
    static description = "Player In Our Game";
    #score = 0; // private field  Player 클래스 안에서만 사용가능
    numLives = 10; 
    //생성자
    constructor(first, last){
        this.first = first;
        this.last = last;
        console.log("IN CONSTRUCTOR!")
    }
    
    static randomPlayer(){
        return new Player("Andy", "Samberg");
    }

    taunt(){
        console.log("YEAH!!")
    }
}

class AdminPlayer extends Player{ // 클래스 확장
    constructor(first, last, powers){
        super(first,last) // Player constructor를 의미
        this.powers = powers
    }
    isAdmin = true;
}

const admin = new AdminPlayer("admin", "mCadmin", ["delete", "restore"]);

```
