import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <p>{count}</p>
      <button
        onClick={() => {
          setTimeout(() => setCount((prevCount) => prevCount + 1), 1000);
        }}
      >
        +
      </button>
    </React.Fragment>
  );
};

export default Counter;
