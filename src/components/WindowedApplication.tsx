import React from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';

import './WindowedApplication.css';

interface WindowedApplicationProps {
  title: string;
  initialWidth: number;
  initialHeight: number;
}

const WindowedApplication: React.FC<WindowedApplicationProps> = ({
  title,
  initialWidth,
  initialHeight,
}) => {
  return (
    <Draggable handle=".window-title-bar">
      <div className="window-container">
        <Resizable width={initialWidth} height={initialHeight} handleSize={[8, 8]}>
          <div className="window">
            <div className="window-title-bar">
              <span>{title}</span>
              <button className="window-close-button">×</button>
            </div>
            <div className="window-content"></div>
          </div>
        </Resizable>
      </div>
    </Draggable>
  );
};

export default WindowedApplication;
