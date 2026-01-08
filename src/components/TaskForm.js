import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title });
    setTitle("");
  };

  return (
    <form style={{ display: "flex", marginTop: "15px" }} onSubmit={submitHandler}>
      <input
        style={{
          flex: 1,
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter new task"
      />
      <button
        style={{
          marginLeft: "8px",
          padding: "8px 12px",
          borderRadius: "6px",
          border: "none",
          background: "#667eea",
          color: "white",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;
