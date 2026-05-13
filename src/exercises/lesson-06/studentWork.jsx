import { useState } from 'react';
import UserProfile from './components/UserProfile';
import FilterButtonGroup from './components/FilterButtonGroup';
import TaskItem from './components/TaskItem';
import { useTasks } from './hooks/useTasks';
import { getVisibleTasks } from './utils/taskHelpers';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');

  if (loading) return <p>Loading tasks...</p>;

  const visibleTasks = getVisibleTasks(tasks, filter);

  return (
    <div>
      <UserProfile name="Student" />
      <FilterButtonGroup currentFilter={filter} onFilterChange={setFilter} />
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
