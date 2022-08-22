import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DoctorDetails from './DoctorDetails'
import Home from './Home'

const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor/:id" element={<DoctorDetails />} />
        </Routes>
    )
}

export default Allroutes
