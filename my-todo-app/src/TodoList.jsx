import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { filteredTasks, setFilter } = useContext(TodoContext);

  return (
    <div className="todo-list-wrapper" >
      <ul>
        {filteredTasks.map((task, index) => (
          <TodoItem key={task.id} task={task} index={index} />
        ))}
      </ul>
    </div>
  );
}
