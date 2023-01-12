import React, { useEffect, useState } from 'react';

const withCursorPositionProvider = TargetComp => {
  return props => {
    const [cursorPosition, setCursorPosition] = useState({
      x: 0,
      y: 0
    });

    const handleMouseMove = event => {
      const x = event.clientX;
      const y = event.clientY;
      setCursorPosition({
        x,
        y
      });
    };

    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
    }, []);
    return <TargetComp position={cursorPosition} {...props} />;
  };
};

function Displayer1(props) {
  return (
    <div>
      <h1>Track the position of the cursor using HOC</h1>
      <div style={{ padding: 20, width: 200, border: '2px solid green' }}>
        <p>X: {props.position.x}</p>
        <p>Y: {props.position.y}</p>
      </div>
    </div>
  );
}

const CursorPosition1 = withCursorPositionProvider(Displayer1);

export default CursorPosition1;

// What to track? This means what state do we need?
// We decide to track x and y position of the cursor.
// We need to use useState {x:0, y:0}
// We need to listen to the cursor movement.
// To use addEventListener, we need to use useEffect.
