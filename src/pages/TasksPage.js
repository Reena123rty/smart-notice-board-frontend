import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask } from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import "./TasksPage.css";

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

  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h2>📝 Tasks Manager</h2>
          <button className="logout" onClick={logoutHandler}>
            Logout
          </button>
        </div>

        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={removeTask} />
      </div>
    </div>
  );
}

export default TasksPage;
