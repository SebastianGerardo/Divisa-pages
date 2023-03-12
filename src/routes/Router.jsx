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
                <Route path="/nosotros" element={<h1>Nosotros</h1>} />
                <Route path="/blog" element={<h1>Blog</h1>} />
            </Route>
        </Routes>
    </BrowserRouter>
)
}

export default Router
