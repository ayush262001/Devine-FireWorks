import React from 'react'
import InitialEntry from './Components/InitialEntry'
import MaskedSection from './Components/MaskedSection'
import Services from './Components/Services'
import Details from './Components/Details'
import Videos from './Components/Videos'
import Parallax from './Components/Parallax'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className=' app'>
        <InitialEntry />
        <MaskedSection />
        <Services />
        <Details />
        <Videos />
        <Parallax />
        <Testimonial />
        <Footer />
    </main>
  )
}

export default App
