import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile/>
    </>
  )
}
function Profile(){
  return (
  <div style={{width:"120%", height:'auto',borderRadius:"10px", border:"2px solid gray", padding:"20px",color:"black", background:"linear-gradient(to bottom, #60A7BF 30%, white 70%)"}}>
    <img style={{width:"150px", height: "150px", borderRadius:"100px"}} src="/images.jpg" alt="Profile"/>
    <h3 >Rita Correia</h3>
    <h5 style={{marginTop:"-10px"}}>London</h5>
    <div style={{display:"flex", justifyContent:"space-around", gap:"30px"}}>
      <div>
        <b>80k </b> <br/>
        Followers
      </div>
      <div>
      <b>803k </b>
        <br/>
        Followers
      </div>
      <div>
      <b>1.4k </b>
        <br/>
        Photos
      </div>
    </div>
  </div>
  )
}

export default App
