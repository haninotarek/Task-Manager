import { Link } from "react-router-dom";

function Dashboard({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card stat">
          <p>Total Tasks</p>
          <h2>{total}</h2>
        </div>
        <div className="card stat">
          <p>Completed</p>
          <h2>{completed}</h2>
        </div>
        <div className="card stat">
          <p>Pending</p>
          <h2>{pending}</h2>
        </div>
      </div>

      <div className="card">
        <h3>All Tasks</h3>
        {tasks.map((t) => (
          <p key={t.id}>
            {t.title} - {t.completed ? "Completed" : "Pending"}
          </p>
        ))}
      </div>

      <Link to="/add-task" className="btn">Add Task</Link>
    </div>
  );
}

export default Dashboard;
