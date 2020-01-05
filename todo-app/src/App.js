import React from 'react';
import TodoTemplete from './components/TodoTemplete';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <TodoTemplete>
      <TodoInsert/>
      <TodoList/>
    </TodoTemplete>
  );
};

export default App;