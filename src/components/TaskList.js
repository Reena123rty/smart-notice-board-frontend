function TaskList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.title}
          <button onClick={() => onDelete(task._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
