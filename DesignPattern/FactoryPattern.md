### 상황에 따라 VO를 다르게 생성해야할 경우


Factory Pattern을 사용하면 VO 클래스의 생성과 사용을 캡슐화하여 클라이언트가 VO 객체를 직접 생성하지 않아도 되므로, VO 클래스가 변경되더라도 클라이언트 코드를 수정할 필요가 없습니다. 따라서, VO 클래스의 변경으로 인한 영향을 최소화하면서 VO 객체를 생성하는 방법을 제공합니다.


만약, 상황에 따라 다른 클래스를 사용해야 하는 경우, Factory Pattern을 사용하여 VO 객체의 생성을 위임할 수 있습니다. 이때, Factory 메소드의 반환형을 VO 인터페이스가 아닌, 다른 인터페이스로 정의하여 VO 클래스와 클라이언트 사이의 결합도를 낮출 수 있습니다. 또한, Factory 메소드에서 사용할 VO 클래스를 동적으로 선택할 수 있도록, Factory 클래스의 생성자 인자 등을 활용하여 구현할 수 있습니다.


다음은 Factory Pattern을 사용하여 VO 클래스를 동적으로 선택하는 예시

```
// VO interface
public interface MyVO {
    public void doSomething();
}

// Concrete VO implementation 1
public class MyVOImpl1 implements MyVO {
    public void doSomething() {
        System.out.println("MyVOImpl1.doSomething()");
    }
}

// Concrete VO implementation 2
public class MyVOImpl2 implements MyVO {
    public void doSomething() {
        System.out.println("MyVOImpl2.doSomething()");
    }
}

// Factory interface
public interface MyVOFactory {
    public MyVO createMyVO();
}

// Concrete Factory implementation
public class MyVOFactoryImpl implements MyVOFactory {
    private String voType;

    public MyVOFactoryImpl(String voType) {
        this.voType = voType;
    }

    public MyVO createMyVO() {
        if (voType.equals("1")) {
            return new MyVOImpl1();
        } else if (voType.equals("2")) {
            return new MyVOImpl2();
        } else {
            throw new IllegalArgumentException("Invalid VO type: " + voType);
        }
    }
}

// Client code
public class Client {
    public static void main(String[] args) {
        String voType = "1"; // or "2"
        MyVOFactory factory = new MyVOFactoryImpl(voType);
        MyVO myVO = factory.createMyVO();
        myVO.doSomething();
    }
}
```

MyVOFactoryImpl 클래스의 생성자에서 VO 타입을 인자로 받고, Factory 메소드에서 VO 타입에 따라 MyVOImpl1 또는 MyVOImpl2 클래스의 인스턴스를 생성합니다. 따라서, 클라이언트 코드에서는 MyVOImpl1 또는 MyVOImpl2 클래스의 존재를 알 필요가 없고, VO 타입에 따라 적절한 VO 객체를 생성하도록 Factory에 위임한다 


이와 같은 방법으로 Factory Pattern을 사용하면, VO 클래스의 변경으로 인한 클라이언트 코드 수정을 최소화하면서 VO 객체 생성을 제어할 수 있다.
