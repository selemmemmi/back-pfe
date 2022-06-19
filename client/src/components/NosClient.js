import React from 'react'

function NosClient() {
  return (
    <>
        <div id='services' className='text-center' style={{padding: "100px 0", 
        background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)", color: "#fff"}}>
            <div className='container'>
                <div className='section-title'>
                <h2 style={{color: "#fff"}}>NOS CLIENTS & PARTENAIRES</h2>
                <p>
                UN TOTAL DE 65 Millions de documents générés/an <br />
                CANAUX : Editique / Archivage/ Coffre-fort 

                </p>
                </div>
                <div className='row' style={{margin: "8%"}}>
                
                        <div  className='col-md-4' style={{marginBottom: "10%"}}>
                        {' '}
                            <img src="images/4/image1.jpg" alt='....' className='eeee' style={{width: "50%" }}/>
                            <div className='service-desc'>
                                <h3>BIAT</h3>
                            </div>
                        </div>

                        <div  className='col-md-4' style={{marginBottom: "10%"}}>
                        {' '}
                            <img src="images/4/image4.png" alt='....' className='eeee' style={{width: "50%"}}/>
                            <div className='service-desc'>
                                <h3>TLF</h3>
                            </div>
                        </div>

                        <div  className='col-md-4' style={{marginBottom: "10%"}}>
                        {' '}
                            <img src="images/4/image5.png" alt='....' className='eeee' style={{width: "50%"}}/>
                            <div className='service-desc'>
                                <h3>ORANGE</h3>
                            </div>
                        </div>

                        <div  className='col-md-4'style={{marginBottom: "10%"}}>
                        {' '}
                            <img src="images/4/image3.svg" alt='....' className='eeee' style={{width: "50%"}}/>
                            <div className='service-desc'>
                                <h3>TOTAL</h3>
                            </div>
                        </div>
                        <div  className='col-md-4'style={{marginBottom: "10%"}}>
                        {' '}
                            <img src="images/4/image8.png" alt='....' className='eeee' style={{width: "50%"}}/>
                            <div className='service-desc'>
                                <h3>UIB</h3>
                            </div>
                        </div>

                        <div  className='col-md-4'style={{marginBottom: "10%"}}>
                        {' '}
                            <img src="images/4/image6.png" alt='....' className='eeee' style={{width: "50%"}}/>
                            <div className='service-desc'>
                                <h3>TENISIE TELECOM</h3>
                            </div>
                        </div>

                        <div  className='col-md-4'style={{marginBottom: "10%"}}>
                        {' '}
                            <img src="images/4/image7.png" alt='....' className='eeee' style={{width: "50%"}}/>
                            <div className='service-desc'>
                                <h3>AMEN BANK</h3>
                            </div>
                        </div>
                        <div  className='col-md-4'style={{marginBottom: "10%"}}>
                        {' '}
                            <img src="images/4/image2.png" alt='....' className='eeee' style={{width: "50%"}}/>
                            <div className='service-desc'>
                                <h3>SOCIETE TUNISIENNE DE L'ELECTRICITE DU GAZ</h3>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default NosClient