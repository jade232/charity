import React, { useEffect, useState } from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import { Container } from '@mui/material';
import LoaderWrapper from "../assets/ohm_circel.png"
import Ohm from "../assets/Om_symbol.png"
// import BackgroundImage from "../assets/bg1.jpg"

const Home = () => {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoader(false)
    }, 8000)

    return () => {
      clearTimeout(timer)
    }
  }, [loader])

  return (
    <>

      {
        loader ?
          <div className='centeringElement'>
            <div className='animationWrapper'>
              <img src={LoaderWrapper} style={{
                width: "100%"
              }} alt="" className='ohmCircle' />
              <img src={Ohm} alt="" className='ohmsymbol' />
            </div>
          </div>
          : <>
            <Header />
            {/* <GetStarted /> */}
          </>
      }
    </>

  )
}

export default Home