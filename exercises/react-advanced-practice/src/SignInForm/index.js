import React, { useState } from 'react';
import { validateEmail } from './utils';

function ShowPasswordErrorMessage() {
  return (
    <p>please type at least 8 characters for your password.</p>
  )
}

function SignInForm() {
  
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState({
    value: '',
    hasTyped: false
  });
  const [ role, setRole] = useState('role');

  function isFormValid () {
    return (
      firstName && 
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== 'role'
    )
  }

  function clearForm (){
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword({...password, value: '', hasTyped: false})
    setRole('role')
  }

  function handleSubmit (e){
    e.preventDefault();
    alert('Account has been created!')
    clearForm()
  }

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <field>
          <label>First name<span>*</span></label><br/>
          <input name="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" />
        </field><br/>
        <field>
          <label>Last name</label><br/>
          <input name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="First name" />
        </field><br/>
        <field>
          <label>Email<span>*</span></label><br/>
          <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="First name" />
        </field><br/>
        <field>
          <label>Password<span>*</span></label><br/>
          <input name="password" type="password" value={password.value} onBlur={(e) => setPassword({...password, hasTyped: true})} onChange={(e) => setPassword({...password, value: e.target.value})} placeholder="First name" />
          { password.value.length < 8 && password.hasTyped ? <ShowPasswordErrorMessage /> : '' }
        </field><br/>
        <field>
          <label>Role<span>*</span></label><br/>
          <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="role">Role</option>
            <option value="individual">Individual</option>
            <option value="company">Company</option>
          </select>
        </field><br/>
        <button type="submit" disabled={!isFormValid()}>Create Account {console.log('button is rendering!')}</button>
      </form>
    </div>
  );
}

export default SignInForm;
