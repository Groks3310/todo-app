import "./Todo.css";
import DarkModeToggle from "./DarkModeToggle";
import TodoProvider from "./TodoProvider";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function App() {
  return (
    <TodoProvider>
      <div className="todo-app">
        <DarkModeToggle />  {/* 👈 sits fixed top-right, outside the flow */}
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
}