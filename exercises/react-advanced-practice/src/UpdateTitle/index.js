import React, { useState, useEffect } from 'react';

function UpdateTitle() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.title = toggle ? 'Little Lemon' : 'using useEffect hook';
  }, []);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h1>Little Lemon</h1>
      <button onClick={handleClick}>Click Here</button>
      {toggle && <h2>Welcome to Little Lemon!</h2>}
    </div>
  );
}

export default UpdateTitle;
