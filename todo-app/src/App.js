import React from 'react';
import TodoTemplete from './components/TodoTemplete';
import TodoInsert from './components/TodoInsert';

const App = () => {
  return (
    <TodoTemplete>
      <TodoInsert/>
    </TodoTemplete>
  );
};

export default App;