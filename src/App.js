import React from "react";
import "./index.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div class="center">
      <h1 class="title">Counter App</h1>
      <p class="desc">You cliked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      <button onClick={() => setCount(count - 1)}>Decrement </button>
    </div>
  );
};

export default App;
