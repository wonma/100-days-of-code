import React, { useRef } from 'react';

function FocusOnInput2() {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>useRef use case: access the DOM element</h1>
      <input type='text' ref={inputRef} />
      <button onClick={handleClick}>Click to focus on the input</button>
    </div>
  );
}

export default FocusOnInput2;
