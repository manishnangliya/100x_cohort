
import { useState } from 'react'
import { Header } from '../components/Header'
import './App.css'

function App() {
  console.log("App");
  return (
    <div>
        <RanderButtonTitle></RanderButtonTitle>
        <Header title = {"Raman"}></Header>
        <Header title = {"Raman"}></Header>
        <Header title = {"Raman"}></Header>

    </div>
  )
}
function RanderButtonTitle(){
  const[tempTitle,setTempTitle] = useState("Manish123");
  function changeTItle(){
    setTempTitle(Math.random());
  }
  return (
    <>
      <button onClick={changeTItle}> Click to change</button>
      <Header title={tempTitle}></Header>
    </>
  )


}
export default App
