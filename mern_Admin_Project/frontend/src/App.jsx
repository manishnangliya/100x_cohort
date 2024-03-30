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


function App() {
  const [currToken,setCurrToken] = useState();
  const [user, setUser] = useState({});
  function setToken(token) {
    localStorage.setItem("token", token);
    setCurrToken(token);
  }
  function getToken() {
    return localStorage.getItem("token");
  }
  function removeToken() {
    localStorage.removeItem("token");
    setCurrToken(false);
    setUser({});
  }

  async function userAuthentication() {
    const token = getToken();
    setCurrToken(token);
    if (!token) {
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        const json = await response.json();
        setUser(json.user);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => userAuthentication, [currToken]);


  return (
    <div className='bg-black h-[100vh]  text-white px-52 '>
      <StorageContext.Provider value={{ setToken, getToken, removeToken, currToken, user }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StorageContext.Provider>
    </div>
  )
}

export default App
