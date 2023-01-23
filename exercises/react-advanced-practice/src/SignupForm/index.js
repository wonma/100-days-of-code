import React, { useState } from 'react';
import './style.css'
import useValidatePassword from './useValidatePassword';

function SignupForm () {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState({
        value: '',
        isTyped: false
    });
    const [ role, setRole ] = useState({
        value: 'Select Role',
        isSelected: false
    });

    const { checkCapital, checkSpecialCharacter, check8characters, 
        hasOneCapital, hasOneSpecialCharacter, has8characters } = useValidatePassword();

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
                setPassword({value: e.target.value, isTyped: true});
                checkCapital(e.target.value);
                checkSpecialCharacter(e.target.value);
                check8characters(e.target.value);
                break;
            case 'role':
                setRole({value: e.target.value, isSelected: true});
                break;
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }

    const isFormValid = () => {
        return firstName && hasOneCapital && hasOneSpecialCharacter && has8characters
        && validateEmail(email) && role.isSelected;
    }

    const clearForm = () => {
        setFirstName('')
        setLastName('')
        setPassword({value: '', isTyped: false})
        setRole({value: 'Select Role', isSelected: false})
        setEmail('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Successfully submitted!')
        clearForm()
    }

    return (
        <div>
            <form className='Form' onSubmit={handleSubmit}>
                <h1>Signup Form</h1>
                <div className='Field'>
                    <label htmlFor='firstName'>First name<sup>*</sup></label><br />
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
                    <label htmlFor='email'>Email address<sup>*</sup></label><br />
                    <input id='email' name='email' type='email' value={email} placeholder='Email address' required 
                        onChange={handleInput}
                    />
                </div>
                <div className='Field'>
                    <label htmlFor='password'>Password<sup>*</sup></label><br />
                    <input id='password' name='password' type='password' value={password.value} placeholder='Password' required
                        onChange={handleInput}
                    />
                    <div className='Error'>
                        {
                            password.isTyped && (
                                <div>
                                    { (<p style={{color: has8characters ? '#00cc00':'red'}}>At least 8 characters</p>) }
                                    { (<p style={{color: hasOneCapital ? '#00cc00':'red' }}>1 capital letter</p>) }
                                    { (<p style={{color: hasOneSpecialCharacter ? '#00cc00':'red'}}>1 special character</p>) }
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='Field'>
                    <label htmlFor='role'>Role<sup>*</sup></label><br />
                    <select id='role' name='role' type='text' value={role.value} placeholder='Role'
                                            onChange={handleInput} >
                        <option value='Select Role' disabled>Select Role</option>
                        <option value='individual'>Individual</option>
                        <option value='company'>Company</option>
                    </select>
                </div>
                <button disabled={!isFormValid()}>Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm;