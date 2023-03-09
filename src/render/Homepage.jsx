import React from 'react'
import Header from '../components/Homepage/Header'
import { Outlet } from 'react-router-dom'

const Homepage = () => {
  return (
    <section className='flex flex-col min-h-screen'>

        <Header/>

      <div className='flex flex-col grow'>
        <Outlet/>
      </div>
    </section>
  )
}

export default Homepage
