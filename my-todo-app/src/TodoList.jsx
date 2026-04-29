import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { filteredTasks, setFilter } = useContext(TodoContext);

  return (
    <div className="todo-list-wrapper" >
      <div className="todo-filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
          <TodoItem key={task.id} task={task} index={index} />
        ))}
      </ul>
    </div>
  );
}
