import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Application from './assets/backcomp/Application'
import Dashboard from './assets/backcomp/Dashboard'
import Sidebar from './assets/backcomp/Sidebar'
import Error from './assets/component/error/Error'

const Admin = () => {
  return (
    <>
      
      <Sidebar />
      <Routes>
          

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="application" element={<Application />} />
          <Route path="*" element={<Error />}/>
          
      </Routes>
    </>
  )
}

export default Admin