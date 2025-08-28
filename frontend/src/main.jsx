import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './style.css'
import Home from './pages/Home.jsx'
import Video from './pages/Video.jsx'
import Upload from './pages/Upload.jsx'
import Search from './pages/Search.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Settings from './pages/Settings.jsx'
function useAuth(){const [user,setUser]=React.useState(null);React.useEffect(()=>{const u=localStorage.getItem('user');if(u) setUser(JSON.parse(u))},[]);const logout=()=>{localStorage.removeItem('token');localStorage.removeItem('user');setUser(null)};return {user,logout}}
function Nav(){const {user,logout}=useAuth();return(<nav className='nav'><Link to='/'>VideoShare</Link><div className='spacer'/><Link to='/search'>Search</Link>{user?.role==='creator'&&<Link to='/upload'>Upload</Link>}<Link to='/settings'>Settings</Link>{user?(<><span className='small'>Hi, {user.email}</span><button className='btn' onClick={logout}>Sign out</button></>):(<><Link to='/login'>Login</Link><Link to='/register'>Register</Link></>)}</nav>)}
function App(){return(<BrowserRouter><Nav/><Routes><Route path='/' element={<Home/>}/><Route path='/video/:id' element={<Video/>}/><Route path='/search' element={<Search/>}/><Route path='/upload' element={<Upload/>}/><Route path='/login' element={<Login/>}/><Route path='/register' element={<Register/>}/><Route path='/settings' element={<Settings/>}/></Routes></BrowserRouter>)}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
