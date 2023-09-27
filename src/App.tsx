import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/globals.css'
import PlateEditor from './Plate';
import { TooltipProvider } from './@/components/plate-ui/tooltip';

function App() {
  return (
    <TooltipProvider>
      <div className="App">
        <PlateEditor />
      </div>
    </TooltipProvider>
  );
}

export default App;
