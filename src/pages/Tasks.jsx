import { Link } from "react-router-dom";

function Tasks({ tasks, deleteTask, completeTask }) {
  return (
    <div>
      <h1>My Tasks</h1>
      <Link to="/add-task" className="btn">Add New Task</Link>

      {tasks.map((t) => (
        <div className="task" key={t.id}>
          <h3>{t.title}</h3>
          <span className={t.completed ? "badge done" : "badge pending"}>
            {t.completed ? "Completed" : "Pending"}
          </span>
          <p>{t.description}</p>

          <div>
            <Link to={"/tasks/" + t.id} className="btn btn-gray">View Details</Link>
            <button onClick={() => completeTask(t.id)}>Complete</button>
            <button className="btn-red" onClick={() => deleteTask(t.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
