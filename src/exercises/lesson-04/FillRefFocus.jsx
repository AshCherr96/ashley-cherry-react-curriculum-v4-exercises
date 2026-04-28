// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';

export default function FillRefFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Explanation: In this example, we use the `useRef` hook to create a reference to the input element. The `inputRef` variable holds a mutable object with a `current` property that points to the DOM element. When the button is clicked, the `focusInput` function checks if `inputRef.current` is not null (which means the input element is mounted) and then calls the `focus()` method on it to set the focus on the input field. This allows us to interact with the DOM element directly without causing a re-render of the component.
