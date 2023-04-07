import React, { Suspense } from 'react';
//rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import AnimationLoader from './components/AnimationLoader';
import "./App.css"
import Bg from "./assets/bg_original.jpeg"

function App() {
  return (
    <>
      <img src={Bg} alt="" className='bg-main' />
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* <Suspense fallback={<AnimationLoader />}> */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* </Suspense> */}
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;