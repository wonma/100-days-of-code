import React from 'react';
import './App.css';
import GoalTracker from './GoalTracker';
import CouponRedeem from './CouponRedeem';
// import FeedbackForm from './FeedbackForm';
// import SignInForm from './SignInForm';
// import ReversTodos from './ReverseTodos';
// import ConditionalSubmit from './ConditionalSubmit';
// import SimpleBlog from './SimpleBlog';
// import ThemeSwitcher from './ThemeSwitcher';

function App() {
  return (
    <div className='App'>
      {/* <SignInForm />
      <ReversTodos />
      <ConditionalSubmit />
      <SimpleBlog /> 
      <ThemeSwitcher /> 
      <FeedbackForm />
      <GoalTracker />*/}
      <CouponRedeem />
    </div>
  );
}

export default App;
