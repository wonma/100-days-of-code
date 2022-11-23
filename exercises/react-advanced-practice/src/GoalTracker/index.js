import React, { useState } from 'react';

function GoalList({ goalList }) {
  return (
    <ul>
      {goalList.map(goal => {
        return <li key={goal.title}>{`${goal.title} by ${goal.by}`}</li>;
      })}
    </ul>
  );
}

function GoalForm(props) {
  const [goal, setGoal] = useState({
    title: '',
    by: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.handleListUpdate(goal);
    setGoal({
      title: '',
      by: ''
    });
  };

  const handleInputChange = e => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={goal.title}
        name='title'
        placeholder='Type a goal'
        onChange={handleInputChange}
      />
      <input
        type='text'
        value={goal.by}
        name='by'
        placeholder='By...'
        onChange={handleInputChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

function GoalTracker() {
  const [goalList, setGoalList] = useState([]);
  console.log(goalList);

  const handleListUpdate = goal => {
    let goals = [...goalList];
    goals.push(goal);
    setGoalList(goals);
  };

  return (
    <div>
      <h1>Little Lemon Goals</h1>
      <GoalForm goalList={goalList} handleListUpdate={handleListUpdate} />
      <GoalList goalList={goalList} />
    </div>
  );
}

export default GoalTracker;
