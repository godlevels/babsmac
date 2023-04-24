import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Workouts from './components/Workouts'
import Pricing from './components/Pricing'
import Community from './components/Community'
import Faq from './components/Faq'
import Join from './components/Join'
import Footer from './components/Footer'
// import Aos from 'aos'
// import 'aos/dist/aos.css'


function App() {
  // Aos.init({
  //   duration: 2500,
  //   delay: 400,
  // })
  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
        <Header />
        <Banner />
        <Workouts />
        <About />
        <Faq />
        <Community />
        <Join />
        <Footer />
        <div className='h-[4000px]'></div>
    </div>
  )
}

export default App
