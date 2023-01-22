import React, { useState } from 'react';
import './style.css'

function SignupForm () {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ role, setRole ] = useState('individual');

    const handleInput = (e) => {
        const inputName = e.target.name;
        switch(inputName) {
            case 'firstName':
                setFirstName(e.target.value);
                break;
            case 'lastName':
                setLastName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'role':
                setRole(e.target.value);
                break;
        }
    }

    console.log(firstName, lastName, email, password, role)

    return (
        <div>
            <form className='Form'>
                <h1>Signup Form</h1>
                <div className='Field'>
                    <label htmlFor='firstName'>First name<span>*</span></label><br />
                    <input id='firstName' name='firstName' type='text' value={firstName} placeholder='First name' required 
                        onChange={handleInput}
                    />
                </div>
                <div className='Field'>
                    <label htmlFor='lastName'>Last name</label><br />
                    <input id='lastName' name='lastName' type='text' value={lastName} placeholder='Last name' 
                        onChange={handleInput}
                    />
                </div>
                <div className='Field'>
                    <label htmlFor='email'>Email address<span>*</span></label><br />
                    <input id='email' name='email' type='email' value={email} placeholder='Email address' required 
                        onChange={handleInput}
                    />
                </div>
                <div className='Field'>
                    <label htmlFor='password'>Password<span>*</span></label><br />
                    <input id='password' name='password' type='password' value={password} placeholder='Password' required
                        onChange={handleInput}
                    />
                </div>
                <div className='Field'>
                    <label htmlFor='role'>Role<span>*</span></label><br />
                    <select id='role' name='role' type='text' value={role} placeholder='Role'
                                            onChange={handleInput} >
                        <option value='role' disabled>Select Role</option>
                        <option value='individual'>Individual</option>
                        <option value='company'>Company</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default SignupForm;