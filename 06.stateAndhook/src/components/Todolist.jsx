import { useState } from "react"

const Todolist = () => {
  const [tasks, setTasks] = useState(["task1"])
  const [inputValue, setInputValue] = useState("")

  
  const saveTask = (event)=> {
    event.preventDefault();
    if(inputValue.trim()){
      setTasks([...tasks, inputValue])
    }
    setInputValue("")
  }

  const handleChange = (e)=>{
    setInputValue(e.target.value)
  }



  return (
    <div>
      <h1>My TASKS</h1>
      {tasks.map((t, index)=> (
        <h1 key={index}>{t}</h1>
      ))}
      <form action="" method="" onSubmit={saveTask}>
        <input type="text" name="" id="input" value={inputValue} onChange={handleChange} /> 
        <button type="submit" >ADD TODO</button>
      </form>

    </div>
  )
}

export default Todolist