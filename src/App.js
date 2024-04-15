import './App.css';
import Header from './header';
import Footer from './footer';
import { useState } from 'react';
import Register from './register';
import Login from './login';
import Container from './container';

function App() {
  const[isLogged,setIsLogged]=useState(false)
  const [isUserLogin,setIsUserLogin]=useState(null)
  const [loginDetail,setLoginDetail]=useState({})
  const[user,setUser]=useState([])
  const date = new Date().toLocaleString()

  return(
  <>
  <Register user={user} setUser={setUser} isLogged={isLogged} setIsLogged={setIsLogged} setIsUserLogin={setIsUserLogin}/>
  <Login isUserLogin = {isUserLogin}  setIsUserLogin={setIsUserLogin} user={user} setIsLogged={setIsLogged} setLoginDetail={setLoginDetail}/>
  
  <Header isUserLogin={isUserLogin} loginDetail={loginDetail} setIsUserLogin={setIsUserLogin}/>
  <Container isUserLogin={isUserLogin} loginDetail={loginDetail} setIsUserLogin={setIsUserLogin}/>
  <Footer isUserLogin={isUserLogin} loginDetail={loginDetail} setIsUserLogin={setIsUserLogin} date={date}/>
  </>

  )
  
}

export default App;
