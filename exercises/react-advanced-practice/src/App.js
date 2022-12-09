import React from 'react';
import './App.css';
import GoalTracker from './GoalTracker';
import CouponRedeem from './CouponRedeem';
import IncomeExpenseTracker from './IncomeExpenseTracker';
import LoadUserProfile from './LoadUserProfile';
import FocusOnInput from './FocusOnInput';
import DayRotator from './DayRotator';
import CursorTracker1 from './CursorTracker1';
import CursorTracker2 from './CursorTracker2';
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
      <CouponRedeem />
      <GoalTracker />
      <IncomeExpenseTracker />
      <LoadUserProfile />
      <FocusOnInput />
      <DayRotator />
      <CursorTracker1 />*/}
      <CursorTracker2 />
    </div>
  );
}

export default App;
