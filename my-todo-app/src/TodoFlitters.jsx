import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

export default function TodoFilters() {
  const { setFilter } = useContext(TodoContext);

  return (
    <div className="todo-filters">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
}