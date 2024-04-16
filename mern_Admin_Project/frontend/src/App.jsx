import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './pages/About'
import { Service } from './pages/Service'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Landing } from './pages/Landing'
import { Navbar } from './components/Navbar'
import { ErrorPage } from './pages/ErrorPage'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react'
import { StorageContext } from './stores/Context'
import { Logout } from './pages/Logout'
import { toast } from 'react-toastify'
import { Admin } from './pages/Admin'
import { AdminGetUser } from './pages/AdminGetUser'
import { AdminGetMessage } from './pages/AdminGetMessage'
import { AdminCreateService } from './pages/AdminCreateService'


function App() {
  const [currToken,setCurrToken] = useState(null);
  const [user, setUser] = useState({});
  const [loading,setLoading] = useState(true);
  function setToken(token) {
    console.log("inside set");
    setLoading(false);
    localStorage.setItem("token", token);
    setCurrToken(token);
  }
  function getToken() {
    console.log("inside get");
    const val = localStorage.getItem("token");
    setCurrToken(val);
    return localStorage.getItem("token");
  }
  function removeToken() {
    console.log("inside remove");
    localStorage.removeItem("token");
    setCurrToken(false);
    setLoading(true);
    setUser({});
  }
  function displayNotification(messageArr){
    messageArr.map(msg=> toast.error(msg));
  }
  async function userAuthentication() {
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }
    console.log("current token " ,currToken);
    try {
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: token
        }
      });
      
      if (response.ok) {
        const json = await response.json();
        setUser(json.user);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false)
      console.log(error.message);
    }
  }
  useEffect(() => userAuthentication, [currToken]);


  return (
    <div className='bg-black h-[100vh]  text-white px-52 '>
      <StorageContext.Provider value={{ setToken, getToken, removeToken, currToken, user,displayNotification,setLoading,loading }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='about' element={<About />} />
            <Route path='service' element={<Service />} />
            <Route path='contact' element={<Contact />} />
            <Route path='admin' element={<Admin/>}>
              <Route path='alluser' element={<AdminGetUser/>}/>
              <Route path='allmessage' element={<AdminGetMessage/>}/>
              <Route path='newservice' element={<AdminCreateService/>}/>
            </Route>
            <Route path='logout' element={<Logout />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='/*' element={<ErrorPage />} /> 
          </Routes>
          <Footer />
        </BrowserRouter>
      </StorageContext.Provider>
    </div>
  )
}

export default App
