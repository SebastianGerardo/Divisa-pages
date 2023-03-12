import React from 'react'
import OurTeam from '../components/AboutPage/OurTeam'
import AboutSection from '../components/Homepage/AboutUsSection'
import Footer from '../components/Homepage/Footer'
import HeaderMain from '../components/Homepage/HeaderMain'
import StatsSection from '../components/Homepage/StatsSection'
import Testimonials from '../components/Homepage/Testimonials'

const Home = () => {
  return (
    <>
      <div className='flex flex-col grow'>
        <HeaderMain/>
      </div>
      <div>
        <StatsSection/>
        <AboutSection/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}

export default Home
