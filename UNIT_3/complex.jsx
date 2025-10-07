import React, { useState } from "react";

function Display({ count }) {
  return <h1> Current Count: {count} </h1>;
}

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", border: "2px solid gray", width: "220px" }}>
      <h1> Counter App </h1>
      {/* Using child component */}
      <Display count={count} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default CounterApp;
