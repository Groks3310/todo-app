import "./Todo.css";
import TodoProvider from "./TodoProvider";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFlitters";

export default function App() {
  return (
    <TodoProvider>
      <div className="todo-app">
         <div className="todo-top-stack">
          <TodoInput />
          <TodoFilters/>
         </div>
        
        <TodoList />
      </div>
    </TodoProvider>
  );
}

      