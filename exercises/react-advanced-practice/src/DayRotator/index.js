import React, { useState, useRef, useEffect } from 'react';

function DayRotator() {
  const [day, setDay] = useState('Monday');
  const changeDay = () => {
    if (day === 'Monday') setDay('Tuesday');
    if (day === 'Tuesday') setDay('Wednesday');
    if (day === 'Wednesday') setDay('Thursday');
    if (day === 'Thursday') setDay('Friday');
    if (day === 'Friday') setDay('Saturday');
    if (day === 'Saturday') setDay('Sunday');
    if (day === 'Sunday') setDay('Monday');
  };

  let prevDay = getPrevDay(day);

  function getPrevDay(val) {
    let ref = useRef();
    console.log('Step 1');

    useEffect(() => {
      ref.current = val;
      console.log('Step 3');
    }, [val]);
    console.log('Step 2');
    return ref.current;
  }

  return (
    <div>
      <h1>Weekly challenge</h1>
      <p>Today is: {day} </p>
      {prevDay && <p>Previous work day was: {prevDay}</p>}
      <button onClick={changeDay}>Next</button>
    </div>
  );
}

export default DayRotator;
