import React, { useState } from 'react';
import usePrevious from './usePrevious';

const DayRotator2 = () => {
    const [day, setDay] = useState('Monday');
    const getNextDay = () => {
        if(day === 'Monday') setDay('Tuesday')
        else if(day === 'Tuesday') setDay('Wednesday')
        else if(day === 'Wednesday') setDay('Thursday')
        else if(day === 'Thursday') setDay('Friday')
        else if(day === 'Friday') setDay('Saturday')
        else if(day === 'Saturday') setDay('Sunday')
        else if(day === 'Sunday') setDay('Monday')
    }    
    const prevDay = usePrevious(day); // returned value is 'ref.current'.
    return (
        <div>
            <h1>Today is {day}.</h1>
            {prevDay ? <h2>The previous day is {prevDay}.</h2> : ''}
            <button onClick={getNextDay}>Get next day</button>
        </div>
    )
}


export default DayRotator2;