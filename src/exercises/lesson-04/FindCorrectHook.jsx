// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  // FIX: Use useRef without re-rendering
  const clickCount = useRef(0);

  const handleClick = () => {
    clickCount.current = clickCount.current + 1;
    console.log('Current clicks:', clickCount.current);
  };

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount.current} Clicks</button>
    </div>
  );
}

// Explanation: In this example, we want to keep track of the number of clicks without causing the component to re-render every time the count changes. Using `useState` would trigger a re-render on every click, which is unnecessary for this use case. Instead, `useRef` allows us to store the click count in a mutable object that persists across renders without causing any updates to the UI. This way, we can update the click count and log it to the console without affecting the component's rendering performance.
