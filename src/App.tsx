import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const list = ['Insurance','Investments','Mortage Lending','Travel','Mail Order Pharmacy','Business Lending','Business Services','Wealth Management']
  const listItems = list.map((item) => {
    return(
      <div className='text-xl bg-[#060707] text-[#652337]'>
        <a href="">{item}</a>
      </div>
    )
  })
  return (
    <div className='flex flex-col items-start justify-start'>
    <header className='flex border-2 border-solid items-center justify-around border-black w-[100vw]'>
      <img  className=' w-[15vw]' src={logo} alt="" />
     
      <a  href="/">Home</a>
      <a href="About ">About</a>
      <div><h1>Our Services</h1>
        <div className='absolute'>
          {listItems}
        </div>
      </div>
    </header>
    </div>
  )
}

export default App
