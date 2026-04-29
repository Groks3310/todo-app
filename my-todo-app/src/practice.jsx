import React,{useState,useEffect,useMemo,useCallback} from "react";



export default function TodoProvider({children}) {
  const [filter, setFilter] = useState("all")

const filteredTasks = useMemo(()=>{
  const filtered = tasks.filter(task =>{
    if( filter === "completed") return task.completed;
    if (filter === "active ") return !task.completed;
    return true
  })
  return [...filtered].sort((a,b)=> a.completed - b.completed)
},[tasks, filter])

  return (
    <div>practice</div>
  )
}
