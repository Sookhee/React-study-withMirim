import React from 'react';
import ColorBox from './components/ColorBox';
import {ColorProvider} from './contexts/color';

const App = () => {
  return (
    <div>
      <ColorProvider value={{ color: 'red'}}>
        <div>
          <ColorBox/>
        </div>
      </ColorProvider>
    </div>
  );
};

export default App;