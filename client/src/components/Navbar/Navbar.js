import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              TUNISIE DIGITAL
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
            <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                ACCUEIL
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/A-propos' onClick={closeMobileMenu}>
                A PROPOS
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/NOS-REFERENCES' onClick={closeMobileMenu}>
                NOS RÉFÉRENCES
                </NavLinks>
              </NavItem>
              {/*
              
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                  NOS OFFRES
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                  NOS REALISATIONS
                </NavLinks>
              </NavItem>*/}
              <NavItem>
                <NavLinks to='/contact' onClick={closeMobileMenu}>
                  CONTACT
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/login'>
                    <Button className="btn btn-white btn-fill btn-lg" primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/login'>
                    <Button className="btn btn-white btn-fill btn-lg" onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
