import { useState } from "react"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"


function App() { 
  const [ todo , setTodo] = useState(["goto gym", "eat", "sleep", "repeat"])
  const[value , setValue]= useState("")


  function addTodo(newTodo){
    setTodo([...todo,newTodo])
  }

  function deleteTodo(index){
    const newTodo = todo.filter((val,currIndex)=>{
      return currIndex !== index
    })
    setTodo(newTodo)

  }
  function editTodo(index){
   const todoToBeEdited = todo[index]
   setValue(todoToBeEdited);
   deleteTodo(index)

  }
  return (
    <>
    
    <Todoinput value = {value} setValue = {setValue} addTodo={addTodo}/>
    <Todolist  todo = {todo}  deleteTodo={deleteTodo} editTodo={editTodo}/>
    
    </>
  )
}

export default App
