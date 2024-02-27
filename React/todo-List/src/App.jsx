import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodo] = useState([{
    title:"Gym",
    description:"I have to go gym from 7-9AM"
  }]);

  function addTodoHandler(){
    setTodo([...todos,{
      title:"DSA",
      description:"I have to study DSA from 9-11AM"
    }])
  }
  return (
    <div>
    <button onClick={addTodoHandler}>addTodo</button>
      {todos.map(function(todo){
        // eslint-disable-next-line react/jsx-key
        return <CreateTodo todo={todo}/>
      })}
    </div>
  )
}
function CreateTodo(props){
  return <div>
     <h2> {props.todo.title}</h2>
      <h3>{props.todo.description} </h3>
    </div>
}

export default App
