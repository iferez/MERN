import React from "react";

function TaskCard({task}) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "OK" : "Done"}</span>
      <span>{task.createAt}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default TaskCard;
