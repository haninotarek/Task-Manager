import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";

const firstTasks = [
  { id: 1, title: "Learn React", description: "Study React components and JSX", completed: false },
  { id: 2, title: "Learn useState", description: "Practice state management", completed: true },
  { id: 3, title: "Learn React Router", description: "Practice navigation between pages", completed: false },
  { id: 4, title: "Build React Project", description: "Create a complete React application", completed: false },
];

function App() {
  const [tasks, setTasks] = useState(firstTasks);

  function addTask(title, desc) {
    const newTask = { id: Date.now(), title: title, description: desc, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function completeTask(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <h1>TaskFlow</h1>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/tasks">My Tasks</NavLink>
        <NavLink to="/add-task">Add Task</NavLink>
      </div>

      <div className="page">
        <Routes>
          <Route path="/" element={<Dashboard tasks={tasks} />} />
          <Route path="/tasks" element={<Tasks tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />} />
          <Route path="/add-task" element={<AddTask addTask={addTask} />} />
          <Route path="/tasks/:id" element={<TaskDetails tasks={tasks} completeTask={completeTask} />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
