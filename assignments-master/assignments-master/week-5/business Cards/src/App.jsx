
import React, { useEffect, useState } from 'react'
import { Input } from '../Components/Input'
import { MyBusinessCardPage } from '../Components/MyBusinessCardPage'
import './App.css'

function App() {
  const [cards,setCards] = useState([]);
  useEffect(()=>{
    async function initData(){
      await fetchData();
    }
    initData();
  },[])
  
  async function fetchData(){
    const res =  await fetch("http://localhost:3000/cards/getAllCards")
    const json = await res.json();
      setCards(json.allCards);
  }
  return (
    <>
      <Input fetchData = {fetchData} cards = {cards}/>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <MyBusinessCardPage fetchData = {fetchData}  cards = {cards}/>
      </div>
    </>
  )
}

export default App
