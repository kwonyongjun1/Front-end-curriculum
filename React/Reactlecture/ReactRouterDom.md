### React Router Dom

React Router Dom을 사용하면 웹 앱에서 동적 라우팅을 구현할 수 있다. 라우팅이 실행 중인 앱 외부의 구성에서 처리되는 기존 라우팅 아키텍처와 달리 React Router DOM은 앱 및 플랫폼의 요구 사항에 따라 컴포넌트 기반 라우팅을 용이하게 한다.


리액트는 SPA이기 떄문에 하나의 index.html 템플릿 파일을 가지고 있는데 이 하나의 템플릿에 자바스크립트를 이용해서 다른 컴포넌트를 이 index.html 템플릿에 넣으므로 페이지를 변경해주게 된다. 
이 떄 이 React Router DOM 라이브러리가 새 컴포넌트로 라우팅/탐색을 하고 렌더링하는데 도움을 주게 된다.

![image](https://user-images.githubusercontent.com/70560755/229807055-944afa79-2869-4f3d-bafa-0e9598fd1bde.png)



### React Router Dom APIs

##### 1. 중첩 라우팅(Nested Routes)

이것은 React Router의 가장 강력한 기능 중 하나이며 복잡한 레이아웃 코드를 어지럽힐 필요가 없다. 

대부분의 레이아웃은 URL의 세그먼트에 연결되며 React Router는 이를 완전히 수용한다.

![image](https://user-images.githubusercontent.com/70560755/229804165-740be1db-c8ed-47af-961d-96d760e257d8.png)


##### 2. Outlet

자식 경로 요소를 렌더링하려면 부모 경로 요소에서 <Outlet>을 사용해야 한다. 이렇게 하면 하위 경로가 렌더링될 때 중첩된 UI가 표시될 수 있고
    
부모 라우트가 정확히 일치하면 자식 인덱스 라우트를 렌더링하거나 인덱스 라우트가 없으면 아무것도 렌더링하지 않는다.
![image](https://user-images.githubusercontent.com/70560755/229804904-ff396e37-b354-40b4-9bf3-53b027a31469.png)

##### 3. useNavigate
    
경로를 바꿔준다. 
    
![image](https://user-images.githubusercontent.com/70560755/229805254-5cc6cce5-cefd-462e-9251-5508395b196d.png)
    
    
##### 4. useParams
    
:style 문법을 path 경로에 사용하였다면 useParams()로 읽을 수 있다.
아래는 :invoiceId가 무엇인지 알기위해 usePrams를 사용
    
![image](https://user-images.githubusercontent.com/70560755/229805770-bea8ca12-11b9-47a5-891a-f03451b4dd8f.png)

    
##### 5. useLocation
    
이 Hooks 는 현재 위치 객체를 반환하며 현재 위치가 변경될 때마다 일부 side effect를 수행하려는 경우에 유용하다.
 
![image](https://user-images.githubusercontent.com/70560755/229806314-1ab5f117-8ec4-4a29-b00e-fa132ff572c8.png)

    
##### 6. useRoutes
    
useRoutes Hooks는 와 <Routes>와 기능적으로 동일하지만 <Route> 요소 대신 JavaScript 객체를 사용하여 경로를 정의한다.

이러한 객체는 일반 <Route> 요소와 동일한 속성을 갖지만 JSX가 필요하지 않다.
    
![image](https://user-images.githubusercontent.com/70560755/229806857-5002f8c1-1521-4991-ad48-5c11415d5660.png)
