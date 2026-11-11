import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function save() {
    if (title === "") {
      setError("Title is required");
      return;
    }
    addTask(title, desc);
    navigate("/tasks");
  }

  return (
    <div>
      <h1>Add New Task</h1>

      <div className="card">
        {error && <p className="error">{error}</p>}

        <input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          rows="5"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button onClick={save}>Save Task</button>
      </div>
    </div>
  );
}

export default AddTask;
