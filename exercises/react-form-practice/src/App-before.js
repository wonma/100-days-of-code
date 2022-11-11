import './App.css';
import React, { useState } from 'react';

// 아래는 React Component가 아닌 
// DOM에서 internal state 시스템을 이용해 form data를 다루는 경우


function App() {
    return (
    <div className="App">
      <form className="form" method="GET">
        <h1>Sign Up</h1>
        <field>
          <label>First name<span>*</span></label><br/>
          <input name="firstName" type="text" placeholder="First name" />
        </field><br/>
        <field>
          <label>Last name</label><br/>
          <input name="lastName" type="text" placeholder="First name" />
        </field><br/>
        <field>
          <label>Email<span>*</span></label><br/>
          <input name="email" type="email" placeholder="First name" />
        </field><br/>
        <field>
          <label>Password<span>*</span></label><br/>
          <input name="password" type="password" placeholder="First name" />
        </field><br/>
        <field>
          <label>Role<span>*</span></label><br/>
          <select name="role">
            <option value="role">Role</option>
            <option value="individual">Individual</option>
            <option value="company">Company</option>
          </select>
        </field><br/>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default App;
