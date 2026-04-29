import { TodoContext } from "./TodoContext";
import { useState, useEffect, useMemo } from "react";

export default function TodoProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    const filtered = tasks.filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "active") return !task.completed;
      return true;
    });
    return [...filtered].sort((a, b) => a.completed - b.completed);
  }, [tasks, filter]);

  function toggleComplete(id) {
    setTasks((prev) =>
      prev.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
    );
  }

  function addTask() {
  if (newTask.trim() === "") return;
  const capitalized = newTask.trim().charAt(0).toUpperCase() + newTask.trim().slice(1);
  setTasks((prev) => [ { id: Date.now(), text: capitalized, completed: false }, ...prev]);
  setNewTask("");
}
  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

 function moveTaskUp(index) {
  setTasks((prev) => {
    const realIndex = prev.findIndex((t) => t.id === filteredTasks[index].id);
    if (realIndex <= 0) return prev;
    const updated = [...prev];
    [updated[realIndex], updated[realIndex - 1]] = [updated[realIndex - 1], updated[realIndex]];
    return updated;
  });
}

function moveTaskDown(index) {
  setTasks((prev) => {
    const realIndex = prev.findIndex((t) => t.id === filteredTasks[index].id);
    if (realIndex >= prev.length - 1) return prev;
    const updated = [...prev];
    [updated[realIndex], updated[realIndex + 1]] = [updated[realIndex + 1], updated[realIndex]];
    return updated;
  });
}

  function startEdit(task) {
    setEditingId(task.id);
    setEditText(task.text);
  }

  function saveEdit(id) {
    const trimmed = editText.trim();
    if (trimmed === "") return;
    setTasks((prev) =>
      prev.map((task) => task.id === id ? { ...task, text: trimmed } : task)
    );
    setEditingId(null);
    setEditText("");
  }

  function cancelEdit() {
    setEditingId(null);
    setEditText("");
  }

  return (
    <TodoContext.Provider value={{
      tasks, newTask, setNewTask, editingId, editText, setEditText,
      filter, setFilter, filteredTasks, toggleComplete, addTask,
      deleteTask, moveTaskUp, moveTaskDown, startEdit, saveEdit, cancelEdit
    }}>
      {children}
    </TodoContext.Provider>
  );
}