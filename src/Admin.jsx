import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Application from './assets/backcomp/application/Application'
import Attendance from './assets/backcomp/attendance/Attendance'
import Dashboard from './assets/backcomp/Dashboard'
import Sidebar from './assets/backcomp/Sidebar'
import Error from './assets/component/error/Error'



const Admin = () => {
  return (
    <>
      
      <Sidebar />
      <div className="sm:ml-72">

      <Routes>
          

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/application" element={<Application />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="*" element={<Error />}/>
          
      </Routes>
      </div>
    </>
  )
}

export default Admin