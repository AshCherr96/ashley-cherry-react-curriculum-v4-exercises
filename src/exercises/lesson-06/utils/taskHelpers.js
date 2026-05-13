export const getVisibleTasks = (tasks, filter) => {
  if (filter === 'completed') return tasks.filter((t) => t.completed);
  if (filter === 'pending') return tasks.filter((t) => !t.completed);
  return tasks;
};
