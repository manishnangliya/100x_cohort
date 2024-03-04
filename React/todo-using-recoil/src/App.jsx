import { useEffect, useState } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { allTodos, filterAtom, filterTodoSelector } from "./store/atoms/todo";

function App() {
  return (
    <>
      <RecoilRoot>
        <InputFields />
        <FilterField />
        <PrintTodos />
      </RecoilRoot>
    </>
  )
}
function FilterField() {
  const setFilter = useSetRecoilState(filterAtom);
  return (
    <div>
      <input placeholder="filter Todos" onChange={(e)=>{
        setFilter(e.target.value);
      }}></input>
    </div>
  );
}
function InputFields() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const setTodo = useSetRecoilState(allTodos);
  const todos = useRecoilValue(allTodos);
  return <div>
    <input placeholder='Title' onChange={(e) => {
      setTitle(e.target.value);
    }}></input>
    <input placeholder='Description' onChange={(e) => {
      setDescription(e.target.value);
    }}></input>
    <button onClick={() => {
      if (title == null || description == null) {
        alert("insert some values");
        return;
      }
      setTodo([...todos, { title, description }]);
    }}>Add Todo</button>
  </div>
}


function PrintTodos() {
  const todos = useRecoilValue(filterTodoSelector);
  return <>
    {(todos.length > 0) && todos.map(todo => (
      <div key={Math.random()}>
        <div>Title: {todo.title}</div>
        <div>Description: {todo.description}</div>
        <hr />
      </div>
    ))}
  </>
}


export default App
