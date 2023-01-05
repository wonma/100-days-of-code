const GoalList = ({goalList}) => {
    return (
        <ul>
            {goalList.length > 0 ? 
            goalList.map((goal) => {
                return <li key={goal.title}>{goal.title}, by {goal.by}</li>
            }) : null

            }
        </ul>
    );
}

export default GoalList;