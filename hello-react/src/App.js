import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //const name = "리액트";
  const name = "React";
  const number = 0;
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : '48px',
    fontWeight : 'bold',
    padding : 16
  }
  return (
    //컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다.
    // <Fragmant>
    //   <h1>hello, {name}!</h1>
    //   <h2>잘 작동하니?</h2>
    // </Fragmant>

    //조건부 연산자
    // <div>
    //   {name === "리액트" ?
    //   <h1>리액트 입니다</h1> : 
    //   <h1>리액트가 아닙니다</h1>}
    // </div>

    //AND 연산자(&&)를 사용한 조건부 렌더링
    //<div>{name === '리액트' ? <h1>리액트 입니다</h1> : null}</div>
    //<div>{name === '리액트' && <h1>리액트입니다</h1>}</div>

    //0값은 예외적으로 화면에 나타남
    // <div>{number && <div>내용</div>}</div>

    //undifined를 반환하면 안됨
    // name

    //OR연산자를 사용하여 해당 값이 undefined일 때 사용할 값을 지정할 수 있으므로 간단히 오류 방지
    // name || '값이 undefined입니다'

    //인라인 스타일링
    // <div style={style}>{name}</div>
    // <div style={{
    //   backgroundColor : 'black',
    //   color : 'aqua',
    //   fontSize : '48px',
    //   fontWeight : 'bold',
    //   padding : 16
    // }}>{name}</div>

    //className
    // <div className="react">{name}</div>

    //태그를 닫아야함
    // <>
    // <div className="react">{name}</div>
    // <input/>
    // </>

    //주석
    <>
    {/* 주석은 이렇게 작성합니다 */}
    <div className="react" //시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
    >
      {name}
    </div>
    //하지만 이런 주석이나
    /* 이런 주석은 페이지에 그대로 나타나게 됩니다 */
    <input/>
    </>
  );
}

export default App;
