import React from 'react';
import ColorBox from './components/ColorBox';
import {ColorProvider} from './contexts/color';
import SelectColors from './components/SelectColors';

const App = () => {
  return (
    <div>
      <ColorProvider value={{ color: 'red'}}>
        <div>
          <SelectColors/>
          <ColorBox/>
        </div>
      </ColorProvider>
    </div>
  );
};

export default App;