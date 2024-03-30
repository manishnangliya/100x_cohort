import { useEffect, useState } from 'react'
import axios from 'axios'


// custom hooks
function useTodo(n) {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const clock = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false)
        })
    }, n * 1000);
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false)
      })

      // clear previous clock_
      return ()=>{
        clearInterval(clock);
      }
  }, [n]) // make n dependency so if we change n it start new clock and clear previous clock
  return { todos, loading };
}

function useIsOnline(){
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(()=>{
    window.addEventListener('online',()=>{
      setIsOnline(true);
    })
    window.addEventListener('offline',()=>{
      setIsOnline(false);
    })
  },[])
  return isOnline
}

function useInterval(fn,timeout){
  useEffect(()=>{
    const val = setInterval(() => {
      fn();
    }, timeout);
    return ()=>{
      clearInterval(val);
    }
  },[fn,timeout])
}

function useDebounce(inputValue,delay){
  const [finalValue,setFinalValue] = useState(inputValue)
  useEffect(()=>{
    const prevCall = setTimeout(() => {
      setFinalValue(inputValue);
    }, delay);
    return ()=>{
      clearTimeout(prevCall);
    }
  },[inputValue])
  return finalValue;
}

function App() {
  // const [count, setCount] = useState(0);

  // useInterval(() => {
  //   setCount(c => c + 1);
  // }, 1000)

  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    {debouncedValue}
    </>
    
  );
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App