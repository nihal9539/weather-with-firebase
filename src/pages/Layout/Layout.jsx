import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' '>

      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Layout
