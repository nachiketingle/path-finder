import React from 'react';
import ControlPanel from './components/ControlPanel';
import { RecoilRoot } from 'recoil';
import CellGrid from './components/CellGrid';

function App() {
  return (
    <RecoilRoot>
      <div>
        <ControlPanel />
        <CellGrid />
      </div>
    </RecoilRoot>
  );
}

export default App;
