import { useState } from "react";

const Todoinput = (props) => {
  const {addTodo,value,setValue} =props

  
  return (
    <>
      <header>
        <input placeholder="Enter Todo..." value={value} onChange={(e)=>{
          setValue(e.target.value)
        }}/>
        <button onClick={()=>{
          addTodo(value)
          setValue("")
          
        }}>Add</button>
      </header>
    </>
  );
};

export default Todoinput;
