import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Home from './Home'
import Post from './Post'
import Login from './Login'
import {BrowserRouter,Routes,Route, Link,Navigate} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null);

  useEffect(()=>{
const getUSer = ()=>{
  fetch('http://localhost:5000/auth/login/success',{
    method:"GET",
    credentials:"include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  }).then((response) => {
    if (response.status === 200) return response.json(); ///json() takes json input and parse it to produce js object  
    throw new Error("authentication has been failed!");
  })
  .then((resObject) => {
    setUser(resObject.user);
  })
  .catch((err) => {
    console.log(err);
  });
}
    getUSer();
  },[])

  console.log(user)
  return (
    <BrowserRouter>
     <Header user={user}/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={user ?<Navigate to='/'/>:<Login/>}/>
    <Route path="/post/:id" element={user ? <Post/> :<Navigate to ='/login'/>}/>
   </Routes>
    </BrowserRouter>
    
  )
}

export default App
