import React, { useContext } from 'react'
import Counter from './components/Counter'
import { CounterContext } from './context/Counter'
import Trial from './components/Trial'

const App = () => {

  const counterState = useContext(CounterContext)
  return (
    <div>
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Trial />
      {/* <Counter />
      <Counter /> */}
    </div>
  )
}

export default App

// using REDUX


// import React from 'react';
// import Counter from './components/Counter';
// import Trial from './components/Trail';

// const App = () => {
//   return (
//     <div>
//       <Counter />
//       <Trial />
//       {/* <Counter />
//       <Counter /> */}
//     </div>
//   );
// };

// export default App;
