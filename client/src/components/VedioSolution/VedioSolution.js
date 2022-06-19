
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '../../globalStyles';
import { NavBtnLink } from '../Navbar/Navbar.elements';
import './Style.css';

const nav= ()=>{
  Navigate("/A-propos")
}
function VedioSolution() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-11.mp4' className='heros' autoPlay loop muted />
      <div className="heros">
      <h1>TUNISIE DIGITAL</h1>
      <p>Votre partenaire vers une nouvelle transformation digital</p>
     
                <Button className="btn btn-white btn-fill btn-lg"  fontBig primary style={{margin:"1%"}}>
                    <a href="/A-propos">A PROPOS</a>
                </Button>
                <Button className="btn btn-white btn-fill btn-lg"  fontBig primary style={{margin:"1%"}}>
                    <a href="/contact">contact</a>
                </Button>
    
      </div>
    </div>
  );
}

export default VedioSolution;
