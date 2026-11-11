import { useParams, Link } from "react-router-dom";

function TaskDetails({ tasks, completeTask }) {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div>
        <h1>Task Details</h1>
        <p>Task not found</p>
        <Link to="/tasks" className="btn">Back to Tasks</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Task Details</h1>

      <div className="card">
        <h3>{task.title}</h3>
        <span className={task.completed ? "badge done" : "badge pending"}>
          {task.completed ? "Completed" : "Pending"}
        </span>
        <p>{task.description}</p>
        <p>Task ID: {task.id}</p>

        <Link to="/tasks" className="btn btn-gray">Back to Tasks</Link>
        <button onClick={() => completeTask(task.id)}>Complete</button>
      </div>
    </div>
  );
}

export default TaskDetails;
