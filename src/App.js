import React from 'react'
import './App.css'
import Header from './components/Header'
import BmiCard from './components/BmiCard'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen bg-slate-300'>
        <Header/>
        <BmiCard/>
        <Footer/>
    </div>
  )
}

export default App
