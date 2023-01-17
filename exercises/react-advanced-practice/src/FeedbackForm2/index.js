import React, { useState } from 'react';
import './style.css';

// Without using Formik
function FeedbackForm2() {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');

    // 버튼 보이지 않게 해라. 5점보다 작은데 10자보다 짧게 쓰기까지하면. 
    const isDisabled = Number(rating) < 5 && comment.length <= 10; // 바른 코드
    // const isDisabled = () => rating < 5 && comment.length <= 10 ? true : false; // 복잡한 코드

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('callback has been called' + rating + comment)
    }

    return (
        <form onSubmit={handleSubmit} style={{maxWidth: 400, border: '1px solid black', padding: 20}}>
            <h1>FeedbackForm2</h1>
            <label htmlFor='rating'>Rating:</label>
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
            <label htmlFor='comment'>Comment:</label>
            { rating < 5 && <span>(Please write your feedback.)</span> }
            <textarea id='comment' rows='10' cols='40' value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Type something..'/>
            <button disabled={isDisabled} >Submit</button>
        </form>
    )
}

export default FeedbackForm2;