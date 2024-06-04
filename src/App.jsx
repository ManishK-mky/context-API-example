import React, { useContext } from 'react'
import Counter from './components/Counter'
import { CounterContext } from './context/Counter'

const App = () => {

  const counterState = useContext(CounterContext)
  return (
    <div>
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
