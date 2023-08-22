import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import GuestNav from './Components/GuestNav'
import SignUp from './Pages/SignUp'
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function index() {
  return (
    <>
    <GuestNav />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to='/login' replace={true} />} />
    </Routes>
</>
  )
}

export default index
