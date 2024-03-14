
import './App.css'
import { LoginViaOTP } from './LoginViaOTP'
import { SendOTP } from './SendOTP'

function App() {
  return (
    <div className=' h-screen w-screen bg-black'>
    <div className=' '>
      <SendOTP/>
      <hr/>
      <LoginViaOTP/>
    </div>
    </div>
  )
}

export default App
