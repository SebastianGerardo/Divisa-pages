import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Homepage from '../render/Homepage'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
}

export default Router
