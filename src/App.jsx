import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Clients from './components/Clients'
import Services from './components/Services'
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
        <Clients />
        <About />
        <Services />
        <Faq />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
