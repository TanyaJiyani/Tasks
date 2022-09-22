import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
import { setCounter } from '../store/actions/counter';


function Counter() {

    const count = useSelector(state => state.counter);
    const dispatch = useDispatch()

    return (
        <div >
            <h1>Counter </h1>
            <h3 data-testid='counter-val'>{count}</h3>
            <button data-testid='increment' onClick={() => dispatch(setCounter('INCREMENT'))}>Increment</button>
            <button data-testid='decrement' onClick={() => dispatch(setCounter('DECREMENT'))} disabled={count === 0}>Decrement</button>
            <button data-testid='reset' onClick={() => dispatch(setCounter('RESET'))} disabled={count === 0}>Reset</button>

        </div>
    );
}

export default Counter;