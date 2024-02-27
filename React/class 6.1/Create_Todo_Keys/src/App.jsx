import { useState } from 'react'
import './App.css'
import { Todos } from '../components/Todos'

function App() {
  const [count, setCount] = useState(3);
  function handleOnClick(){
    setTodos([...todos,{
      id:count,
      title:"new title1",
      description:"new des1"
    }])
    setCount(count+1);
  }
  const[todos,setTodos] = useState([
    {
      id:0,
      title:"title1",
      description:"des1"
    },
    {
      id:1,
      title:"title2",
      description:"des2"
    },
    {
      id:2,
      title:"title3",
      description:"des3"
    }
  ])
  return (
    <>
      <button onClick={handleOnClick}>Add Todos</button>
      { todos.map(function(todo){
          return <Todos key={todo.id} id = {todo.id} title={todo.title} description={todo.description}></Todos>
      })}
    </>
  )
}

export default App
