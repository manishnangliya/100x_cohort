import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [wordCount, setWordCount] = useState(0);
  const [words, setWords] = useState([]);
  useEffect(getData, [])
  function getData() {
    axios.get(`https://random-word-api.herokuapp.com/word?number=${wordCount}`)
      .then(function (res) {
        console.log(res.data);
        setWords(res.data);
      })
  }
  function printWord() {
    if (isNaN(wordCount)) {
      alert("Please enter only integers");
      setWordCount(0);
      return;
    }
    getData();
  }
  return (
    <div className='text-center border-2 border-black-900 '>
      <h1 className='font-bold text-4xl mt-5'> Paragram Generator</h1>
      <input type='text' className='w-[39%] m-10 border-2 border-black rounded-2xl py-3 px-4' placeholder='Enter the number of words' value={wordCount === 0 ? "" : wordCount} onChange={(e) => {
        if (isNaN(e.target.value)) {
          alert("Please enter only integers");
          setWordCount(0);
          return;
        }
        setWordCount(Number(e.target.value));
      }}></input>
      <button className='bg-sky-900 p-3 rounded-md text-white' onClick={() => { printWord() }}>Generate</button>
      <button className='bg-sky-900 p-3 mx-3 rounded-md text-white' onClick={() => {
        setWordCount(0);
        setWords([]);
      }}>Clear</button>
      <div className='w-[40%] ml-[28%] font-semibold text-lg text-left leading-8 '>
        {words.map(word => word + " ")}
      </div>
    </div>
  )
}

export default App
