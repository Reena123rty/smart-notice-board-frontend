import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask } from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const addTask = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tasks Manager</h2>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={removeTask} />
    </div>
  );
}

export default TasksPage;
