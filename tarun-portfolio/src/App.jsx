import React from 'react'
import InitialEntry from './Components/InitialEntry'
import MaskedSection from './Components/MaskedSection'
import Services from './Components/Services'

const App = () => {
  return (
    <main className=' app'>
        <InitialEntry />
        <MaskedSection />
        <Services />
        <div className='h-[100vh]'/>
    </main>
  )
}

export default App
