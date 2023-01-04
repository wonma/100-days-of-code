import React, { useState, useRef } from 'react';

function GoalTracker2() {
    const [ goal, setGoal ] = useState({title: '', by: ''}); // taking care of tracking input value
    const [ goalList, setGoalList ] = useState([]);

    const titleInputRef = useRef(null);

    const keyPressHandler = (e) => {
        setGoal((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const addGoalToList = (e) => {
        e.preventDefault();
        const updatedList = goalList.concat(goal)
        setGoalList(updatedList);
        setGoal({title: '', by:''})
        titleInputRef.current.focus();
    }

    return (
        <div>
            <h1>My Little Lemon Goals</h1>
            <form onSubmit={addGoalToList}>
                <input type='text' name='title' placeholder='Goal' value={goal.title} onChange={keyPressHandler} ref={titleInputRef} />
                <input type='text' name='by' placeholder='By...' value={goal.by} onChange={keyPressHandler} />
                <button type='submit'>Submit Goal</button>
            </form>
            <ul>
                {goalList.length > 0 ? 
                goalList.map((goal) => {
                    return <li key={goal.title}>{goal.title}, by {goal.by}</li>
                }) : null

                }
            </ul>
        </div>
    )    
}

export default GoalTracker2;
