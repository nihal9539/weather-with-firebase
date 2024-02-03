import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import Signup from './components/Signup/Signup'
// import Login from './components/Login/Login'
// import TaskEdit from './components/TaskEdit/TaskEditModel'
import PasswordReset from './components/PasswordReset/PasswordReset'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Layout from './pages/Layout/Layout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebase-config';
import Users from './components/Users/Users'

function App() {
  // const user = localStorage.getItem('user')
  const [user, loading] = useAuthState(auth)
  console.log(user, loading);


  return (
    <div className='bg-[url(./img-1.jpg)]  w-full h-screen bg-cover'>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={user ? <Home /> : <Navigate to={'/login'} />} />
        <Route path="/users" element={user ?  <Users /> :<Navigate to={'/login'} /> } />
        </Route>
        <Route path="/login" element={user ? <Navigate to={'/'} /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to={'/'} /> : <Signup />} />
        <Route path="/password-reset" element={user ? <Navigate to={'/'} /> : <PasswordReset />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    </div>
  )
}

export default App
