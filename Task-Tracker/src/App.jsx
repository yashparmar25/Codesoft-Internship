import { useState } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (taskText.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    setTaskText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
    setEditingTask(null);
  };

  return (
    <div className="task-tracker">
      <h2 className="title">Task Tracker</h2>
      <div className="input-container">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
            {editingTask === task.id ? (
              <input
                type="text"
                defaultValue={task.text}
                onBlur={(e) => updateTask(task.id, e.target.value)}
                autoFocus
              />
            ) : (
              <span onClick={() => toggleTask(task.id)}>{task.text}</span>
            )}
            <button className="edit-btn" onClick={() => setEditingTask(task.id)}>✏️</button>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
