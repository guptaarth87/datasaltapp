import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'


// import pages
import Index from './pages/Index';
import Test from './pages/Test';
import Contact from './pages/Contact';

function App() {
 
  return (
    <>
      <main>
        <Routes>
                <Route path='/' element={<Index/>} />
                <Route path='/test' element={<Test/>} />
                <Route path='/contact' element={<Contact/>} />
        </Routes>

          
      </main>
    </>
  )
}

export default App
