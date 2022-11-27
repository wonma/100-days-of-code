import React, { useRef } from 'react';

function FocusOnInput() {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type='text' />
      <button onClick={handleClick}>Click to focus on input</button>
    </div>
  );
}

export default FocusOnInput;
