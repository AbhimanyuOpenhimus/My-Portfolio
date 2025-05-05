import React from 'react'
import './App.css';
import MyNavbar from './component/Navbar';
import Hero from './component/Hero';
import Aboutme from './component/Aboutme'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import End from './component/End';
import Footer from './component/Footer'
import BackToTop from './component/BackToTop'


function App() { 
  return (
    <div id='app'>
      <MyNavbar/>
      <Hero/>
      <Aboutme/>
      <Skills/>
      <Projects/> 
      <Contact/>
      <End/> 
      <Footer/>
      <BackToTop/>



    </div>
  )
}

export default App