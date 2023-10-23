import React, { useState } from 'react';

import './StartMenu.css';

const StartMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleStartMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`start-menu ${isOpen ? 'open' : ''}`}>
      <button className="start-button" onClick={toggleStartMenu}>
        Start
      </button>
      {isOpen && (
        <div className="start-menu-content">
          <ul>
            <li>Program 1</li>
            <li>Program 2</li>
            <li>Program 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default StartMenu;
