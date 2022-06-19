import React from 'react'

function Solutions() {
  return (
    <>
        <div id="team" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                <h2>NOS SOLUTIONS</h2>
                </div>
                <div id="row" style={{ display: "flex" , justifyContent: "flex-end" ,paddingRight: "20%"}}>
                
                        <div  className="col-md-3 col-sm-6 team">
                            <div className="thumbnail" style={{border: "none"}}>
                                
                                <img src="images/2/1.png" alt="..." className="team-img"  style={{width: "80%"}}/>
                                <div className="caption">
                                <h4>APPLICATION DIGIPROD</h4>
                                <p>Application outils pour le tracking de production</p>
                                </div>
                            </div>
                        </div>
                        <div  className="col-md-3 col-sm-6 team">
                            <div className="thumbnail" style={{border: "none"}}>
                                
                                <img src="images/2/2.svg" alt="..." className="team-img" style={{width: "80%"}} />
                                <div className="caption">
                                <h4>DIGITRACK : PHILOSOPHIE</h4>
                                <p>Une solution mise à la disposition des clients</p>
                                </div>
                            </div>
                        </div> 

                        <div  className="col-md-3 col-sm-6 team">
                            <div className="thumbnail" style={{border: "none"}}>
                                
                                <img src="images/2/3.png" alt="..." className="team-img"  style={{width: "80%"}}/>
                                <div className="caption">
                                <h4>DIGI PND</h4>
                                <p>IHM en webservice (outils) de tracking de courrier entrant NPAI / PND</p>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Solutions