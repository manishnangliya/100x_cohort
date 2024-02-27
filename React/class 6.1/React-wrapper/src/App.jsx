
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [ todos,setTodos] = useState([]);
  // only at start when component mount
  useEffect(()=>{
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res){
        const ans = await res.json();
        setTodos(ans.todos);
      })
    }, 10000);  
  },[]);
  // do infinte call to backend to fetch data
  // fetch("https://sum-server.100xdevs.com/todos")
  // .then(async function(res){
  //   const ans = await res.json();
  
  // })
  return (
    <>
      <CardWrapper>
      {
        todos.map(todo=><Todos key={todo.key} title={todo.title} description={todo.description} completed={todo.completed}/>)
      }
      </CardWrapper>
    </>
  )
}
function Todos({title,description,completed}){
  return <>
    <h1>{title}</h1>
    <h3>{description}</h3>
    <h4>{completed?"Task done":"Task Panding"}</h4>
    <hr></hr>
  </>
}
function CardWrapper({children}){
    return <div style={{
      border:"2px solid black",
      padding:'20px'
    }}> 
      {children}
    </div>
}

export default App
