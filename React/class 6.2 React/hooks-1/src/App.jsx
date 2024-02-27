import { Children, useState } from 'react'
import './App.css'

function App() {
  const [currSum, setSum] = useState(0)
  const [count,setCount] = useState(0);
  function handleOnchange(Children){
    const currVal = Number(Children.target.value);
    const sum = (currVal*(currVal+1))/2;
    setSum(sum);
  }
  
  function countHandler(){
    setCount(count+1);
  }
  return (
    <>
      <input onChange={handleOnchange} type="text"/>
      <h3>Sum is {currSum} </h3>
      <button onClick={countHandler}>Counter ({count})</button>
    </>
  )
}



export default App
