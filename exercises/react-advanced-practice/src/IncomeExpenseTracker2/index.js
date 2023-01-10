import React, { useReducer } from 'react';

const initialState = { money: 0 }
const reducer = (state, action) => {
    if(action.type == 'buy_ingredient') {
        return { money: state.money - 50}
    } else if(action.type == 'serve_a_customer') {
        return { money: state.money + 50}
    } else if(action.type == 'serve_a_celebrity')  {
        return  { money: state.money + 1000}
    }
    return state;
} 

function IncomeExpenseTracker2() {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({type: 'buy_ingredient'})}>Buy Ingredients</button>
                <button onClick={() => dispatch({type: 'serve_a_customer'})}>Serve a customer</button>
                <button onClick={() => dispatch({type: 'serve_a_celebrity'})}>Serve a celebrity</button>
            </div>
        </div>
    )
}

export default IncomeExpenseTracker2