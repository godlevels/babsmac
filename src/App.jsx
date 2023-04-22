import React from 'react'
import Header from './components/Header'
function App() {

  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
        <Header />
        <Banner />
        <About />
        <Workouts />
        <Pricing />
        <Community />
        <Faq />
        <Join />
        <Footer />
        {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default App
