import React, { useState } from 'react';
import './style.css';

// Without using Formik
function FeedbackForm2() {
    const [rating, setRating] = useState('7');
    return (
        <div style={{maxWidth: 400, border: '1px solid black', padding: 20}}>
            <h1>FeedbackForm2</h1>
            <label for='rating'>Rating:</label>
            <span> {rating}</span>
            <br />
            <input 
                id='rating' 
                type='range' 
                value={rating} 
                list='markers' 
                min='1' 
                max='10' 
                style={{width: 200}}
                onChange={(e) => setRating(e.target.value)}
                /><br />
            <datalist id='markers'>
                <option value='1' label='1' />
                <option value='2' label='2' />
                <option value='3' label='3' />
                <option value='4' label='4' />
                <option value='5' label='5' />
                <option value='6' label='6' />
                <option value='7' label='7' />
                <option value='8' label='8' />
                <option value='9' label='9' />
                <option value='10' label='10' />
            </datalist><br />
            <label for='comment'>Comment:</label>
            <textarea id='comment' rows='10' cols='40' />
        </div>
    )
}

export default FeedbackForm2;