// FIX
export default function Child({ onIncrement }) {
  return (
    <div>
      {/* FIX */}
      <button onClick={onIncrement}>Increment Counter</button>
    </div>
  );
}

// Explanation: The Child component receives a prop called `onIncrement`, which is a function passed down from the Parent component. When the button in the Child component is clicked, it calls the `onIncrement` function, which triggers the state update in the Parent component to increment the counter. This allows for communication from the Child to the Parent, enabling the Child to affect the Parent's state without directly managing it.
