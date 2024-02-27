import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [currId,setId] = useState(1);
  function handleButtonClick(event){
    console.log(event.target.id);
    setId(event.target.id);
  }
  return (
    <>
      <h2>Fetched by id Todos</h2>
      <button id='1' onClick={handleButtonClick}>1</button>
      <button id='2' onClick={handleButtonClick}>2</button>
      <button id='3' onClick={handleButtonClick}>3</button>
      <button id='4' onClick={handleButtonClick}>4</button>
       <TodoId id = {currId}/>
       <hr></hr>
       <h2>Random Todos</h2>
       <TodoAll/>
    </>
  )
}

function TodoAll(){
  const [todos,setTodos]= useState([]);
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(res){
      setTodos(res.data.todos);
    })
  },[])
  return <>
    {todos.map(todo=> <Todo  key={todo.id} title={todo.title} description={todo.description}/>)}
  </>
}
function TodoId({id}){
  const [todos,setTodos]= useState({});
  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(function(res){
        setTodos(res.data.todo);
    })
  },[id])
  return <Todo title={todos.title} description={todos.description}></Todo>
}

function Todo({title,description}){
  return <>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </>
}

export default App
