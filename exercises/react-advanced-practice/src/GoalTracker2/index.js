import React, { useState } from 'react';
import GoalForm from './GoalForm';
import GoalList from './GoalList';

function GoalTracker2() {
    const [ goalList, setGoalList ] = useState([]);

    const handleListAddition = (goal) => {
        const updatedList = [...goalList, goal]
        setGoalList(updatedList);
    }

    return (
        <div>
            <h1>My Little Lemon Goals</h1>
            <GoalForm handleListAddition={handleListAddition} />
            <GoalList goalList={goalList}/>
        </div>
    )    
}

export default GoalTracker2;
