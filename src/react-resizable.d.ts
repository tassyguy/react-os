declare module 'react-resizable' {
    import * as React from 'react';
  
    interface ResizableBoxProps {
      width: number;
      height: number;
      onResize?: (width: number, height: number) => void;
      // Add other props as needed
    }
  
    export const Resizable: React.FC<ResizableBoxProps>;
  }
  
  declare module 'react-resizable/css';
  