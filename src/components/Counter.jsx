import React, { useContext } from 'react';
import { CounterContext } from '../context/Counter';

const Counter = () => {

    const counterState = useContext(CounterContext)
    console.log(counterState);

  return (
    <div>
      <button onClick={() => counterState.setCount(counterState.count++)}>Increment</button>
      <button onClick={() => counterState.setCount(counterState.count--)}>Decrement</button>
    </div>
  )
}

export default Counter
