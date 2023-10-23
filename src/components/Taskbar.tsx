import React from 'react';

import './Taskbar.css';

const Taskbar: React.FC = () => {
  return (
    <div className="taskbar">
      <button className="taskbar-button">App 1</button>
      <button className="taskbar-button">App 2</button>
      <button className="taskbar-button">App 3</button>
    </div>
  );
};

export default Taskbar;
