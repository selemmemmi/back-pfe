import React from 'react';
import { Button } from '../../globalStyles';

import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';

import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our solutions</PricingHeading>
          <PricingContainer>
            <PricingCard to='/A-propos'>
              <PricingCardInfo style={{background: "#fff", color: "#337ab7" , textAlign: "center"}}>
                <PricingCardIcon>
                  <img src="images/2/2.svg" alt="..." className="team-img"  style={{width: "80%" , marginLeft: "6%"}}/>
                </PricingCardIcon>
                <PricingCardPlan>DIGITRACK : PHILOSOPHIE</PricingCardPlan>
                <PricingCardCost>DIGITRACK </PricingCardCost>
                <PricingCardLength>Une solution mise à la disposition des clients</PricingCardLength>
                
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/A-propos'>
              <PricingCardInfo style={{background: "#fff", color: "#337ab7"  , textAlign: "center"}}>
                <PricingCardIcon>
                <img src="images/2/1.png" alt="..." className="team-img"  style={{width: "80%" , marginLeft: "5%"}}/>
                </PricingCardIcon>
                
                <PricingCardCost>APPLICATION DIGIPROD</PricingCardCost>
                <PricingCardLength>Application outils pour le tracking de production</PricingCardLength>
                
               
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/A-propos'>
              <PricingCardInfo style={{background: "#fff", color: "#337ab7" , textAlign: "center"}}>
                <PricingCardIcon>
                <img src="images/2/3.png" alt="..." className="team-img"  style={{width: "80%" , marginLeft: "1%"}}/>
                </PricingCardIcon>
                
                <PricingCardCost>DIGI PND</PricingCardCost>
                <PricingCardLength>IHM en webservice (outils) de tracking de courrier entrant NPAI / PND</PricingCardLength>
                
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
