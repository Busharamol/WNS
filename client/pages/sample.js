import React, { useState } from 'react'; // <--- import the hook

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0); // <--- useState is the hook

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count +  1)}>
        Click me
      </button>
    </div>
  );
}
export default Example;