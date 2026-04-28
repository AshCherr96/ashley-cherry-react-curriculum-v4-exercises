import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      {/* FIX */}
      <Child onIncrement={increment} />
    </div>
  );
}

// Explanation: In this example, we have a Parent component that maintains a count state and an increment function to update that state. The Child component needs to be able to call the increment function when a button is clicked. To achieve this, we pass the increment function as a prop called `onIncrement` to the Child component. This allows the Child component to communicate with the Parent and trigger the state update when needed. By doing this, we enable proper communication between the Parent and Child components without causing any issues with state management or re-rendering.
