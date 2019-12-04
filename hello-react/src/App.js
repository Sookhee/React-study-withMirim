import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent name="정민지" favoriteNumber={7}>리액트</MyComponent>;

  //name 값으로 string이 아닌 3을 넘겨줄 시 console을 확인해보면 경고 발생
  //return <MyComponent name={3}>리액트</MyComponent>;
}

export default App;