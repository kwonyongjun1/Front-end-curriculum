
### 1. JSX(Javascript syntax extension)란

자바스크립트의 확장 문법이며 리액트에서는 이 JSX를 이용해서 화면에서 UI가 보이는 모습을 나타낸다.

![image](https://user-images.githubusercontent.com/70560755/227760849-6402972e-2791-4465-8c96-1a469fa2aed3.png)

JSX를 이용하면 UI를 나타낼 때 자바스크립트와 HTML 구조를 같이 사용할 수 있기 떄문에 기본 UI에 데이터가 변하는 것들이나 이벤트들이 처리되는 부분을 쉽게 구현할 수 있다.

##### 리액트에서 JSX 사용은 의무는 아니지만 자바스크립트 안에서 UI 작업을 하는데 너무 유용하여 React를 사용할 떄 대부분 사용한다.


### 2. JSX를 사용하지 않고 원래 리액트에서 화면을 그리는 방식

React.createElement API를 사용해서 엘리먼트를 생성한 후 ReactDOM.render 함수를 사용해 실제 웹 브라우저에 그려준다.

![image](https://user-images.githubusercontent.com/70560755/227760995-177a2b5c-10f4-47c8-883b-6b07bef5433b.png)

##### JSX는 createElement를 쉽게 사용하기 위해 사용한다.

### 3. JSX를 사용하면서 주의해야 할 문법들(문법 규칙)

JSX를 사용하면서 지켜줘야할 규칙이 있는데

처음으로 JSX는 컴포넌트에 여러 엘리먼트 요소가 있다면 반드시 부모 요소 하나로 감싸줘야 한다.

![image](https://user-images.githubusercontent.com/70560755/227761104-58b86df7-6a0c-4509-bc79-02dcd5f15fab.png)

### 4. JSX Key 속성


``` javascript
{this.todoData.map((data, index) => (
            <div style={this.getStyle()} key={data.id}>
            <input type= "checkbox" defaultChecked={data.isCompleted}/>
            {data.title}
            <button style={this.btnStyle}>X</button>
          </div>
          ))}
```
리액트에서 요소의 리스트를 나열할 때는 Key를 넣어줘야한다.

키는 React가 변경, 추가 또는 제거된 항목을 식별하는 데 도움이 됩니다. 요소에 안정적인 ID를 부여하려면 배열 내부의 요소에 키를 제공해야한다.

###### key에는 유니크한 값을 넣어줘야하며 index도 0부터 시작해서 유니크한 값을 가지지만 만약 리스트가 추가되거나 제거되면 해당 리스트들의 key값도 바뀌게 되어 key 속성으로 적절하지 않다.

