import React, {useContext} from "react";
import { TodoContext } from "./TodoContext";

export default function TodoInput() {
  const { newTask, setNewTask, addTask} =useContext(TodoContext)
  return (
    <div className="todo-input-wrapper">
      <h1>YOUR ACTIVITIES LIST</h1>
      <p className="todo-input-subtitle">Your tasks, beautifully organized</p>
      
<div className="todo-input-row" >
 <input type="text"
      value={newTask}
       placeholder="What needs doing?" 
      onChange={(e)=> setNewTask(e.target.value)} 
       onKeyDown={ (e)=>{
        if(e.key ==="Enter") return addTask()
       }}/>
       <button
       onClick={addTask}>ADD</button>

</div>

     
    </div>
  )
}
