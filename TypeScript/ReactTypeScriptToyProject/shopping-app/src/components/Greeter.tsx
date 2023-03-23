import React from "react";

interface GreeterProps{
    person: string;
}
// 1. React로 함수형 컴포넌트를 다룰 땐 프로퍼티를 구조 분해하기도 한다.
function Greeter({person} : GreeterProps): JSX.Element{ // 1. props => {person} 
    return <h1>Hello! , {person}</h1>; // 1. props.person => person
}

export default Greeter;
