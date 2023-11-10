JavaScript에서는 함수를 호출할 때
매개변수로 전달되는 인자값 이외에, **arguments 객체와 this**를 암묵적으로 전달받는다.

>#### java에서의 this
인스턴스 자신(self)을 가리키는 참조변수이다. this가 객체 자신에 대한 참조 값을 가지고 있다는 뜻이다. 주로 매개변수와 객체 자신이 가지고 있는 멤버변수명이 같을 경우 이를 구분하기 위해서 사용

>#### javascript에서의 this
함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다. 즉, 함수 호출 방식에 따라 this에 바인딩되는 객체가 다르다.


### javascript에서의 함수 호출하는 방식


### 1. 함수 호출
````javascript
/*case 1*/
function testA() {
  console.log("foo's this: ",  this);  // window
  function testB() {
    console.log("bar's this: ", this); // window
  }
  testB();
}
testA();
````

````javascript
/*case 2 메소드의 내부함수일 경우*/
var value = 1;

var obj = {
  value: 10,
  testA: function() {
    console.log("testA's this: ",  this);  // obj
    console.log("testA's this.value: ",  this.value); // 10
    function testB() {
      console.log("testB's this: ",  this); // window
      console.log("testB's this.value: ", this.value); // 1
    }
    testB();
  }
};

obj.testA();
````
**기본적으로  this는 전역객체(Global object)에 바인딩된다.** 전역함수는 물론이고 심지어 내부함수의 경우도 this는 외부함수가 아닌 전역객체에 바인딩되며 내부함수는 일반 함수, 메소드, 콜백함수 어디에서 선언되었든 관계없이 this는 전역객체를 바인딩한다
##### \* 전역객체는 최상위 객체를 의미하며, Browser-side에서는 window , Server-side는 global 객체를 의미
### 2. 메소드 호출
````javascript
var obj1 = {
  name: 'Kim',
  sayName: function() {
    console.log(this.name);
  }
}

var obj2 = {
  name: 'kwon'
}

obj2.sayName = obj1.sayName;

obj1.sayName(); //결과값 kim
obj2.sayName(); //결과값 kwon
````
함수가 객체의 프로퍼티 값이면 메소드로서 호출된다. 이때 메소드 내부의 this는 해당 메소드를 호출한 객체에 바인딩된다.


### 3. 생성자 함수 호출
````javascript
// 생성자 함수
function Person(name) {
  this.name = name;
}

var person1 = new Person('kim');
console.log(person1); // Person&nbsp;{name: "kim"}

// new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수로 동작하지 않는다.
var person2 = Person('Kwon');
console.log(person2); // undefined
````
javascript의 생성자 함수는 java와 같은 객체지향 언어의 생성자 함수와는 다르게 그 형식이 정해져 있는 것이 아니라 기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.
