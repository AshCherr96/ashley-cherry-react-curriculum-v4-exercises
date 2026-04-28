// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick() {
    alert('Button Clicked ✅');
    // FIX: Stop the click event from bubbling up to the outer div
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

// Explanation: In this example, we have an outer div with a click handler that shows an alert when the red box is clicked. Inside this div, there is a button with its own click handler that shows a different alert when the button is clicked. The issue arises because of event bubbling, where clicking the button also triggers the click event on the outer div, causing both alerts to show. To fix this, we need to stop the propagation of the click event from the button to the outer div by calling `event.stopPropagation()` in the `handleInnerClick` function. This way, only the inner button's action will trigger its alert, and the outer div's alert will not be shown when the button is clicked.
