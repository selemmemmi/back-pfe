import React from 'react'
import { Navbar } from '../../components'
import Footer2 from '../../components/Footer/Footer'
import OffreGLOB from '../../components/OffreGLOB'
import PROPOSDENOUS from '../../components/PROPOSDENOUS'
import ScrollToTop from '../../components/ScrollToTop'
import Solutions from '../../components/Solutions'
import GlobalStyle from '../../globalStyles'

function Apropos() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <PROPOSDENOUS />
      <OffreGLOB />
      <Solutions />
      <Footer2 />
    </>
  )
}

export default Apropos