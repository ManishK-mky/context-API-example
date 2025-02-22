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

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../redux/counterSlice';

// const Counter = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   console.log(count , "from" );
  

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;
