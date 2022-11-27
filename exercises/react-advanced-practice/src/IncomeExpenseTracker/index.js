import React, { useReducer } from 'react';
import './Styles.css';

const reducer = (state, action) => {
  if (action.type === 'buy_ingredients') return { money: state.money - 10 };
  if (action.type === 'sell_dishes') return { money: state.money + 10 };
  return state;
};

function IncomeExpenseTracker() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='container'>
      <p>Wallet: {state.money}</p>
      <div className='buttons'>
        <button onClick={() => dispatch({ type: 'buy_ingredients' })}>
          Buy Ingredients
        </button>
        <button onClick={() => dispatch({ type: 'sell_dishes' })}>
          Sell Dishes
        </button>
      </div>
    </div>
  );
}

export default IncomeExpenseTracker;
