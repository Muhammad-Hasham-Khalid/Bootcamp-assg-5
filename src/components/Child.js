import React, { useContext } from "react";
import counterContext from "./CounterContext";

const Child = (props) => {
  let counterValue = useContext(counterContext);

  return (
    <div>
      <h1>Using Context API:</h1>
      <h2>This is first Child</h2>
      <h2>This is {props.name}</h2>
      <h2>Counter Value: {counterValue[0]}</h2>
      <button
        onClick={() => {
          counterValue[1](++counterValue[0]);
        }}
      >
        Increment
      </button>

      {/* if we don't give value in parent component then it will use default value */}
    </div>
  );
};

export default Child;

// child
