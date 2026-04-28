import React from 'react';
import BugStrictMode from './BugStrictMode';
import FindCorrectHook from './FindCorrectHook';
import BugEventPropagation from './BugEventPropagation';
import FillRefFocus from './FillRefFocus';
import Parent from './BugChildParentCommuncation/Parent';

export default function studentWork() {
  return (
    <div>
      <h1>Lesson 04 - Student Work</h1>
      <hr />

      <BugStrictMode />
      <hr />

      <FindCorrectHook />
      <hr />

      <BugEventPropagation />
      <hr />

      <FillRefFocus />
      <hr />

      <Parent />
    </div>
  );
}
