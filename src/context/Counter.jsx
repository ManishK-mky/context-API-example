import {createContext, useState} from 'react';
// createContext() is used to create a context

// below the context is created
export const CounterContext = createContext(null);//starting value null diye hai

// Ab ek ContextProvider banana hai jisko humlog app k around wrap kar denge

export const CounterProvider = (props) => {

    const [count , setCount] = useState(0);

    return (
      <CounterContext.Provider value={{count , name : "Manish" , setCount}}>
        {props.children}
      </CounterContext.Provider>
    );
  };
  