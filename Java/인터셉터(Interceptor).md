인터셉터는 controller에 들어오는 요청 HttpRequest와 컨트롤러가 응답하는 HttpResponse를 **가로채어 Handler에 도달하기 전 원하는 작업을 수행 한 후  Handler에 보내는 Module**이며 사용자 접근 권한을 인증하는 용도로 활용된다.
![](https://velog.velcdn.com/images/kyj96/post/c0330e92-a8c0-4d74-8e68-93b02b424720/image.png)
**Dispatcher Servlet**은 **HandlerMapping**에게 Client **request**를 수행 할 **Handler 요청**한다.

이때  **하나 이상의 Handler Interceptor를 거쳐 Controller가 실행되도록 구성된HandlerExecutionChain(핸들러 실행 체인)이 동작**한다.

***Handler Interceptor를 등록하지 않은 경우 바로 Controller가 실행된다.**

Handler Interceptor에선 Request에 대해 원하는 작업이나 로직을 수행 후 Controller로 Request 객체를 전달한다.

*Login Session 검증, Header 검증, Token 검증, URL Handling 등 여러가지에 사용된다.*

## Interceptor 활용 장점

- **공통 코드 사용으로 코드 재사용성 증가**
- **메모리 낭비, 서버 부하 감소**
- **코드 누락에 대한 위험성 감소**
