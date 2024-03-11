import { memo, useState } from 'react'
import './App.css'

const App= memo(()=>{
  const [backgroundColor,setBackgroundColor] = useState("white");
  function changeColor(color){
    setBackgroundColor(color);
  }
  return (
  <div style={{backgroundColor, width: "100%", height: "90vh", display: "flex",  justifyContent:"center", alignItems:"flex-end", gap:"10px"}}>
    <Button text={"Blue"} onClick={changeColor} />
    <Button text={"Yellow"} onClick={changeColor} />
    <Button text={"Red"} onClick={changeColor} />
    <Button text={"Orange"}  onClick={changeColor}/>
    <Button text={"Black"} onClick={changeColor} />
    <Button text={"Purple"} onClick={changeColor} />
    <Button text={"violet"} onClick={changeColor} />
  </div>
  )
})
function Button({text,onClick}){
  return <>
    <button onClick={function(){
       onClick(text);
    }}  style={{backgroundColor:text,border:"2px solid black",height:"50px",cursor:"pointer", borderRadius:"4px", width:"10%",color:(text=='Blue')||(text=='Black')||(text=='Purple')?"white":"Black"}} >
    {text}
    </button>
  </>
}

export default App
