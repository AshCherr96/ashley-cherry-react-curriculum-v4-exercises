//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Ashley';
  const age = 30;
  const hobbies = ['Coding', 'Reading', 'Watching Movies', 'Gaming'];
  return (
    <div>
      <h2>About Me</h2>
      <p>
        Hello, my name is {name} and I am {age} years old.
      </p>

      <h3>My Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
