import React from 'react'

function OffreGLOB() {
  return (
    <>
        <div id='features' className='text-center' style={{background: "#f6f6f6" ,paddingTop : "50px"}}>
            <div className='container'  >
                <div className='col-md-10 col-md-offset-1 section-title'>
                <h2 >TUNISIE DIGITAL</h2><br />
                <h3>‛‛ une Offre globale de communication multicanal ’’</h3>
                </div>
                <div className='row' style={{marginTop : "20%"  ,marginBottom : "15%"}}>
                
                        <div  className='col-xs-6 col-md-3'>
                        
                        <img src="images/1/image1.png" className="ssss"></img>
                        <h3>Conception  Enrichissement</h3>
                        </div>

                        <div  className='col-xs-6 col-md-3'>
                        {' '}
                        <img src="images/1/image2.png" className="ssss"></img>
                        <h3>Personnalisation  en ligne</h3>
                        </div>

                        <div   className='col-xs-6 col-md-3'>
                        {' '}
                        <img src="images/1/image3.png" className="ssss"></img>
                        <h3>XML HTML5</h3>
                        </div>

                        <div   className='col-xs-6 col-md-3'>
                        {' '}
                        <img src= "images/1/image4.png" className="ssss"></img>
                        <h3>App-  Mobile  SMS</h3>
                        </div>

                        
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default OffreGLOB