import React, { useState } from "react";

const HookCounter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Increment
      </button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
};

export default HookCounter;
