## DOM(Document Object Model)
웹 문서를 브라우저에 렌더링하려면 웹 문서를 **브라우저가 이해할 수 있는 구조**로 메모리에 올려야 한다.
렌더링 과정 중 웹 문서를 로드 한 후 파싱하여 브라우저는 html 요소들을 트리 형태로 구조화하는데 이를 DOM이라 한다.


DOM은 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스이다.

## DOM tree

![](https://velog.velcdn.com/images/kyj96/post/fc712c1a-d8bc-497b-a0ae-ddbe042377c2/image.png)

DOM tree는 네 종류의 노드로 구성

> 문서 노드(Document Node)
- 트리의 최상위에 존재하며 각각 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다

>요소 노드(Element Node)
- HTML 요소를 표현하며 요소별 특성을 표현하기 위해 HTMLElement 객체를 상속한 객체로 구성

>어트리뷰트 노드(Attribute Node)
-  HTML 요소의 속성을 표현하며 요소 노드를 접근하면 어트리뷰트를 참조,수정할 수 있다.

> 텍스트 노드(Text Node)
- 트리의 최종단에 존재하며 HTML 요소의 텍스트를 표현한다. 요소 노드의 자식이며 자신의 자식 노드를 가질 수 없다
