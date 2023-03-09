import React from 'react'
import Footer from '../components/Homepage/Footer'
import HeaderMain from '../components/Homepage/HeaderMain'

const Home = () => {
  return (
    <>
      <div className='flex flex-col grow'>
        <HeaderMain/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Home
