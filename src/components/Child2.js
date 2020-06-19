import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer";

const Child2 = () => {
  let [state, dispatch] = useReducer(CounterReducer, 10); // 10 is default

  return (
    <div>
      <h1>Using Reducer Hook: </h1>
      <h3>Counter: {state}</h3>
      <button onClick={() => dispatch("INCREMENT")}>Increment</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
    </div>
  );
};

export default Child2;
