import React, {Component} from 'react';
import Counter from './Counter';

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const App = () => {
  return <Counter/>;
}

export default App;