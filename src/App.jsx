import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import PasswordReset from './components/PasswordReset/PasswordReset'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Layout from './pages/Layout/Layout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebase-config';
import Users from './components/Users/Users'
import EditModel from './components/EditModel/EditModel'


function App() {
  const [user, loading] = useAuthState(auth)


  return (
    <div className={`bg-[url(./assets/image/img-1.jpg)]  w-full h-screen bg-cover`} style={{}}>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={user ? <Home /> : <Navigate to={'/login'} />} />
        <Route path="/users" element={user ?  <Users /> :<Navigate to={'/login'} /> } />
        <Route path="/:id" element={user ?  <EditModel /> :<Navigate to={'/login'} /> } />
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
