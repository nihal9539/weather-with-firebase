import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import Signup from './components/Signup/Signup'
// import Login from './components/Login/Login'
// import TaskEdit from './components/TaskEdit/TaskEditModel'
// import PasswordReset from './components/PasswordReset/PasswordReset'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';


function App() {
  // const user = localStorage.getItem('user')


  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
