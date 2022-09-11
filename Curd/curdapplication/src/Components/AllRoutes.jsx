
import React from 'react'
 import { Route, Routes } from "react-router-dom"
import Books from './Book'
import EditBook from './EditBook'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import SingleBook from './SingleBook'
function AllRoutes() {
  return (
      <Routes>

            <Route path="/" element={<Books />} />
            <Route path="/books/:id" element={<SingleBook />} />
            <Route path="/books/:id/edit" element={
            <PrivateRoute>
                <EditBook />
            </PrivateRoute>
            
            } />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
  )
}

export default AllRoutes