import React, { useState, useRef } from 'react';

const GoalForm = ({handleListAddition}) => {
    const [ goal, setGoal ] = useState({title: '', by: ''}); // taking care of tracking input value

    const titleInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleListAddition(goal)
        setGoal({title: '', by:''})
        titleInputRef.current.focus();
    }

    const handleKeyPress = (e) => {
        setGoal((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' placeholder='Goal' value={goal.title} onChange={handleKeyPress} ref={titleInputRef} />
            <input type='text' name='by' placeholder='By...' value={goal.by} onChange={handleKeyPress} />
            <button type='submit'>Submit Goal</button>
        </form>
    )
}

export default GoalForm;
