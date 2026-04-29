import "./Todo.css";
import TodoProvider from "./TodoProvider";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function App() {
  return (
    <TodoProvider>
      <div className="todo-app">
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
}