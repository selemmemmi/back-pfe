import React from 'react'

function Intro() {
  return (
    <div className="section section-header">
        <div className="parallax filter filter-color-red">
            <div className="image"
                style={{backgroundImage: "url('assets/img/header-1.jpg')"}}>
            </div>
            <div className="container">
                <div className="content">
                    <div className="title-area">
                        <p>SALEM MEMMI</p>
                        <h1 className="title-modern">TUNISIE DIGITAL</h1>
                        <h3 className="title-modern">Accompagne ses clients dans leur transformation digitale grace a la realisation de communications personnalisees et multicanales</h3>
                        <div className="separator line-separator">♦</div>
                    </div>

                    <div className="button-get-started">
                        <a href="http://www.creative-tim.com/product/gaia-bootstrap-template" rel="noopener noreferrer" className="btn btn-white btn-fill btn-lg ">
                            LEAR MORE
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Intro