import React from "react";
import { useState } from "react";
import "./Styles.css"
import { ReactComponent as Star } from "./star.svg"

function FeedbackForm() {
    const [ score, setScore ] = useState(5)
    const [ comment, setComment ] = useState('')

    const generateStars = (numStars) => {
        let stars = [];
        for (let i = 1; i <= numStars; i++ ) {
            stars.push(<Star />)
        }
        return (
            <div className="stars">
                {stars}
            </div>
        )
    }

    const isFormValid = () => {
        if (score >= 4) { return true } 
        else if (score <= 3 && comment) { return true}
        else if(score <= 3 && !comment) { return false }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thanks for your feedback!')
        setScore(5)
        setComment('')
    }

    return (
        <div className="feedback-form">
            <h1>Feedback Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="score">Score:</label>{generateStars(score)}<br />
                    <input id="score" type="range" min="1" max="5" value={score} onChange={(e)=>setScore(e.target.value)} steps list="tickmarks"/>
                    <datalist id="tickmarks">
                        <option value="1" label="1"></option>
                        <option value="2" label="2"></option>
                        <option value="3" label="3"></option>
                        <option value="4" label="4"></option>
                        <option value="5" label="5"></option>
                    </datalist>
                </div>
                <div>
                    <label for="comment">Comment:</label><br />
                    <textarea id="comment"  rows="5" cols="33" value={comment} onChange={(e)=>setComment(e.target.value)}/>
                </div>
                <button type="submit" disabled={!isFormValid()}>Submit</button>
            </form>
        </div>
    )
}

export default FeedbackForm;