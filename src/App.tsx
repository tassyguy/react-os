import React from 'react';
import './App.css';
import WindowedApplication from './components/WindowedApplication';
import StartMenu from './components/StartMenu';
import Taskbar from './components/Taskbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactOS Desktop</h1>
      </header>

      {/* Render Windowed Applications */}
      <WindowedApplication title="Notepad" initialWidth={300} initialHeight={200}>
        {/* Add your Notepad content here */}
      </WindowedApplication>

      <WindowedApplication title="Calculator" initialWidth={400} initialHeight={300}>
        {/* Add your Calculator content here */}
      </WindowedApplication>

      {/* Add more WindowedApplication components for other applications */}

      {/* Start Menu */}
      <StartMenu />

      {/* Taskbar */}
      <Taskbar />
    </div>
  );
}

export default App;
