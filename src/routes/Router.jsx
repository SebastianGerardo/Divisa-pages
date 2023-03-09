import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/Homepage/Footer'
import Header from '../components/Homepage/Header'
import Home from '../pages/Home'
import Homepage from '../render/Homepage'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
}

export default Router
