### Constructor Pattern


```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
}

var person1 = new Person("John", 30);
person1.sayHello(); // 출력 결과: "Hello, my name is John and I am 30 years old."

```

constructor 패턴은 객체 생성과 초기화를 동시에 수행하며, 객체를 생성할 때마다 새로운 메모리 공간을 할당된다. 

따라서 객체를 생성할 때마다 메모리 사용량이 늘어나는 단점이 있다.

이를 해결 하기 위해서는 'prototype'을 사용하는것이 좋다.


<br>

### Constructor Pattern with Prototype

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
}

var person1 = new Person("John", 30);
person1.sayHello(); // 출력 결과: "Hello, my name is John and I am 30 years old."

```


이렇게 prototype에 메소드를 추가하면, 해당 메소드는 생성된 객체들이 공유할 수 있게 된다. 

이는 constructor 패턴에서와는 달리, 객체를 생성할 때마다 메모리를 할당하지 않고, 메소드를 한번만 정의하면 모든 객체가 이를 참조할 수 있게 된다.

prototype을 사용하면 객체 생성과 메소드 정의를 분리하여 코드를 더욱 깔끔하게 작성할 수 있으며,

상속 구조를 구현할 때 prototype을 사용하면 객체 간의 상속 구조를 구현하기도 쉬워진다.
