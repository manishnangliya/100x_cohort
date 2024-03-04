import { useState } from 'react'
import './App.css'
import { Assignment1 } from './components/Assignment1'
import { Assignment2 } from './components/Assignment2'
import { Assignment3 } from './components/Assignment3'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    {console.log("App rendered")}
      <p>{count}</p>
      <button onClick={() => {
        console.log("inside button click");
        setCount(count + 1);
      }}> click</button>
      <Assignment1 />

      {/* <Assignment2 /> */}
      {/* <Assignment3 /> */}
    </>
  )
}

export default App
