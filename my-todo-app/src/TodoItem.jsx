import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

export default function TodoItem({ task, index }) {
  const {
    editText,
    toggleComplete,
    setEditText,
    editingId,
    deleteTask,
    moveTaskUp,
    moveTaskDown,
    startEdit,
    cancelEdit,
    saveEdit,
  } = useContext(TodoContext);

  const isEditing = editingId === task.id;

  return (
    <li className={isEditing ? "todo-item editing" : "todo-item"}>

      {/* Checkbox — hidden while editing to save space */}
      {!isEditing && (
        <input
          type="checkbox"
          className="todo-item-checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
      )}

      <div className="todo-item-body">

        {/* Text or Edit Input */}
        {isEditing ? (
          <div className="todo-item-edit-row">
            <span className="todo-edit-label">Editing</span>
            <input
              className="todo-item-edit-input"
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") saveEdit(task.id);
                if (e.key === "Escape") cancelEdit();
              }}
              autoFocus
            />
          </div>
        ) : (
          <span className={`todo-item-text ${task.completed ? "completed" : ""}`}>
            {task.text}
          </span>
        )}

        {/* Actions */}
        <div className="todo-item-actions">
          {isEditing ? (
            <>
              <button className="btn-save" onClick={() => saveEdit(task.id)}>Save</button>
              <button className="btn-cancel" onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <button className="todo-item-move-btn" onClick={() => moveTaskUp(index)}>↑</button>
              <button className="todo-item-move-btn" onClick={() => moveTaskDown(index)}>↓</button>
              <button className="btn-edit" onClick={() => startEdit(task)}>Edit</button>
              <button className="btn-delete" onClick={() => deleteTask(task.id)}>Delete</button>
            </>
          )}
        </div>

      </div>
    </li>
  );
}