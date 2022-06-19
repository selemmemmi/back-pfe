import React from 'react'
import { Navbar } from '../../components'
import Document from '../../components/Document'
import Footer2 from '../../components/Footer/Footer'
import NosClient from '../../components/NosClient'
import ScrollToTop from '../../components/ScrollToTop'
import GlobalStyle from '../../globalStyles'

function NosRef () {
  return (
    <>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Document />
        <NosClient />
        <Footer2 />
    </>
  )
}

export default NosRef
