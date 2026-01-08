function TaskList({ tasks, onDelete }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: "15px" }}>
      {tasks.map((task) => (
        <li
          key={task._id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px",
            marginBottom: "6px",
            background: "#f1f3f5",
            borderRadius: "6px",
          }}
        >
          {task.title}
          <button
            onClick={() => onDelete(task._id)}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "#ff4d4d",
              fontSize: "16px",
            }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
