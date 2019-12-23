import React, {Component} from 'react';
import Info from './Info';

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const App = () => {
  return <Info/>;
}

export default App;