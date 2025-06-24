import React from 'react'
import InitialEntry from './Components/InitialEntry'
import MaskedSection from './Components/MaskedSection'
import Services from './Components/Services'
import Details from './Components/Details'
import Videos from './Components/Videos'

const App = () => {
  return (
    <main className=' app'>
        <InitialEntry />
        <MaskedSection />
        <Services />
        <Details />
        <Videos />
        <div className='h-[100vh]'/>
    </main>
  )
}

export default App
