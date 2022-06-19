import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Navbar, Pricing } from '../../components';
import Intro from '../../components/Intro';
import Service from '../../components/Service';
import Cards from '../../components/cards/Cards';
import VedioSolution from '../../components/VedioSolution/VedioSolution';
import Clients from '../../components/Clients';
import Resume from '../../components/Resume';
import GlobalStyle from '../../globalStyles';
import ScrollToTop from '../../components/ScrollToTop';
import Footer2 from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <VedioSolution />
      {/*<Intro />*/}
      <Resume />
      <Cards />
      <Service />
      <InfoSection {...homeObjOne} />
      <Clients />
      <Pricing />
      <Footer2 />
    </>
  );
}

export default Home;
