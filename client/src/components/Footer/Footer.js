import React from 'react'

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';
  import {
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    Div,
    Button,
    Footer,
    Container
  } from './Footer.elements';
import { Input } from './Footer.elements';
import UiComponents from './newsletter/UiComponents';


function Footer2() {
  return (
      <Container style={{backgroundColor:"#101522"}}>
           <UiComponents />
            <Footer className="footer footer-big footer-color-black" data-color="black">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-md-offset-1 col-sm-3">
                                <div className="info">
                                    <h5 className="title"> Adresse Siège social : </h5>
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="...">Zone industrielle Saint Gobain </a>
                                            </li>
                                            <li>
                                                <a href="...">280 rue Ibn El Haytham</a>
                                            </li>
                                            <li>
                                                <a href="...">2014 MEGRINE RIADH</a>
                                            </li>
                                            <li>
                                                <a href="...">BEN AROUS – TUNISIE </a>
                                            </li>
                                            <h5 className="title">Numéro de téléphone : </h5>
                                            <li>
                                                <a href="...">(00216) 70 245 800</a>
                                            </li>
                                            <h5 className="title">Numéro de fax : </h5>
                                            <li>
                                                <a href="...">(00216) 70 245 819</a>
                                            </li>
                                            <h5 className="title">Email contact : </h5>
                                            <li>
                                                <a href="...">contact@tunisie-digital.com</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <div className="info">
                                    <h5 className="title">Dernière actualité </h5>
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="...">
                                                    <i className="fa fa-twitter"></i> <b>Get Shit Done</b>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa minus error neque iusto rerum, quia fugit libero in est saepe! Similique ducimus itaque ipsum aut libero sint dolor vitae eveniet!
                                                    <hr className="hr-small"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="...">
                                                    <i className="fa fa-twitter"></i> We've just been featured on <b> Awwwards Website</b>! Thank you everybody for...
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-md-2 col-md-offset-1 col-sm-3">
                                <div className="info">
                                    <h5 className="title">SUBSCRIBE IN NEWSLETTER </h5>
                                    <Div>
                                        <Input  name='email'
                                            type='email'
                                            placeholder='Your Email'></Input>
                                            <Button>Subscribe</Button>

                                    </Div>
                                    <h5 className="title">Nous suivre </h5>
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="..." className="btn btn-social btn-facebook btn-simple">
                                                    <i className="fa fa-facebook-square"></i> Facebook
                                                </a>
                                            </li>
                                            <li>
                                                <a href="..." className="btn btn-social btn-dribbble btn-simple">
                                                    <i className="fa fa-dribbble"></i> Dribbble
                                                </a>
                                            </li>
                                            <li>
                                                <a href="..." className="btn btn-social btn-twitter btn-simple">
                                                    <i className="fa fa-twitter"></i> Twitter
                                                </a>
                                            </li>
                                            <li>
                                                <a href="..." className="btn btn-social btn-reddit btn-simple">
                                                    <i className="fa fa-google-plus-square"></i> Google+
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <hr/>
                            <SocialMedia>
                                <SocialMediaWrap>
                                    <SocialLogo to='/'>
                                        <SocialIcon />
                                        TUNISIE DIGITAL
                                    </SocialLogo>
                                    <WebsiteRights>SALEM © 2022</WebsiteRights>
                                        <SocialIcons>
                                                <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                                    <FaFacebook />
                                                </SocialIconLink>
                                                <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                                    <FaInstagram />
                                                </SocialIconLink>
                                                    <SocialIconLink
                                                    href='/'
                                                    rel='noopener noreferrer'
                                                    target='_blank'
                                                    aria-label='Youtube'
                                                    >
                                                        <FaYoutube />
                                                        </SocialIconLink>
                                                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                                            <FaTwitter />
                                                        </SocialIconLink>
                                            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                                                <FaLinkedin />
                                            </SocialIconLink>
                                        </SocialIcons>
                                </SocialMediaWrap>
                            </SocialMedia>
                    </div>
            </Footer>
      </Container>
    
  )
}

export default Footer2