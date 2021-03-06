import React from 'react'

function Service() {
  return (
    <div className="section">
        <div className="container">
            <div className="row">
                <div className="title-area">
                    <h2>Our Services</h2>
                    <div className="separator separator-danger">✻</div>
                    <p className="description">We promise you a new look and more importantly, a new attitude. We build that by getting to know you, your needs and creating the best looking clothes.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon text-danger">
                            <i className="pe-7s-display1"></i>
                        </div>
                        <h3>web</h3>
                        <p className="description">We make our design perfect for you. Our adjustment turn our clothes into your clothes.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon text-danger">
                            <i className="pe-7s-copy-file"></i>
                        </div>
                        <h3>XML</h3>
                        <p className="description">We create a persona regarding the multiple wardrobe accessories that we provide..</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon text-danger">
                            <i className="pe-7s-server"></i>
                        </div>
                        <h3>BigData</h3>
                        <p className="description">We like to present the world with our work, so we make sure we spread the word regarding our clothes.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service