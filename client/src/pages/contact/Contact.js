import React from 'react'
import { Navbar } from '../../components'
import Formulaire from '../../components/contact/Formulaire'
import Footer2 from '../../components/Footer/Footer'
import ScrollToTop from '../../components/ScrollToTop'
import GlobalStyle from '../../globalStyles'
import { homeObjThree } from './Data'

function Contact() {
  return (<>
    <GlobalStyle />
    <ScrollToTop />
    <Navbar />
    <div >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4376.286350713543!2d10.21285402205508!3d36.77194273572771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd342a91af5f73%3A0x65ab4b4b46b008d4!2sQ6F7%2B367%2C%20Megrine!5e0!3m2!1sfr!2stn!4v1650987338077!5m2!1sfr!2stn" width="100%" height="450px" style={{border:2 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="title-area">
                        <h2>CONTACTEZ-NOUS </h2>
                        <div className="separator separator-danger">✻</div>
                        <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam asperiores, ducimus ipsum deserunt labore fugiat nesciunt hic voluptatum aliquam laborum amet sint corporis, excepturi maiores eius harum sapiente iusto praesentium!</p>
                    </div>
                </div>
            </div>
        </div>
        <Formulaire {...homeObjThree} />
    </div>
    <Footer2 />
    </>
  )
}

export default Contact