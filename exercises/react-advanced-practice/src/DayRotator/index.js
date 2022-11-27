import React, { useState, createContext } from 'react';

function DayRotator() {
  const [day, setDay] = useState('Monday');
  const changeDay = () => {
    if (day === 'Monday') setDay('Tuesday');
  };
  return (
    <div>
      <h1>Weekly challenge</h1>
      <p>Today is: {day} </p>
      <p>Previous day is: </p>
      <button onClick={changeDay}>Next</button>
    </div>
  );
}

export default DayRotator;
createContexta  1