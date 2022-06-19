import React, { useState } from 'react';
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { ImPrinter } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { SiWebmoney } from "react-icons/si";
import { Autocomplete, TextField } from '@mui/material';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './Formulaire.elemnets';
import { useDispatch } from 'react-redux';
import { addformulaire } from '../../JS/actions/formulaire';

const top100Films = [
  { label: 'Recteur de la Mosquée',  }
]


function Formulaire({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) 
{
  const dispatch = useDispatch()
  const props=["pdg","chef de proget"]
  const [Contact, setContact] = useState({Mail :"",
  Message: " ",
  Prénom: "",
  Tél: "",})
  const hundelchange =(e)=>{
    setContact({...Contact,[e.target.name]:e.target.value})
  }
   
  const hubdelcontact =()=>{
    dispatch(addformulaire(Contact))
    setContact({Mail :"",
    Message: " ",
    Prénom: "",
    Tél: "",})
    console.log(Contact)
  }
  const top100Films = [
    { label: 'P D G', email: "xxxx@gmail.com" },
    { label: 'Manager', email: "xxxx@gmail.com" },
    { label: 'responsable RH', email: "xxxx@gmail.com" },
    { label: 'Chef de projet', email: "xxxx@gmail.com" },
    ,
  ]
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
             <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>FORMULAIRE DE CONTACT</TopLine>
                {/*<Heading lightText={lightText}>{headline}</Heading>*/}
                <Subtitle lightTextDesc={lightTextDesc}>Votre destinataire ( obligatoire )</Subtitle>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 300 }}
                  
                  renderInput={(props) => <TextField {...props} onChange={hundelchange} label="destinataire" name='destinataire' style={{width:"27em" ,padding:"0px 0 25px"}}/>}
                />
                <Subtitle lightTextDesc={lightTextDesc}>nom et Prénom</Subtitle>
                <TextField id="outlined-basic" label="Prénom" name='Prénom' value={Contact.Prénom} variant="outlined" onChange={hundelchange} style={{width:"27em" ,padding:"0px 0 25px"}}/>
                <Subtitle lightTextDesc={lightTextDesc}>Mail</Subtitle>
                <TextField id="outlined-basic" label="Mail"  name='Mail' value={Contact.Mail} variant="outlined" onChange={hundelchange} style={{width:"27em" ,padding:"0px 0 25px"}}/>
                <Subtitle lightTextDesc={lightTextDesc}>n°Tél</Subtitle>
                <TextField id="outlined-basic" label="n°Tél" name='Tél' value={Contact.Tél} variant="outlined" onChange={hundelchange} style={{width:"27em" ,padding:"0px 0 25px"}}/>
                <Subtitle lightTextDesc={lightTextDesc}>Message</Subtitle>
                <TextField id="outlined-basic" label="Message" name='Message' value={Contact.Message} variant="outlined" onChange={hundelchange} style={{width:"27em" ,padding:"0px 0 25px"}}/>

                <Link to='/contact'>
                  <Button big fontBig primary={primary} onClick={()=>hubdelcontact()}>
                    ENVOYER     
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>ADRESSE</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officia a tenetur laborum reprehenderit, nemo odit at impedit aspernatur ex sunt, unde minima vitae quia expedita blanditiis dignissimos libero modi?</Subtitle>
                <TopLine lightTopLine={lightTopLine}>Pour nous joinder</TopLine>
                <br />
                <Subtitle>
                    <FaMapMarkedAlt style={{width:"2em" ,height:"2em",marginRight:"10px"}}/> 362 Route de Genas-Bron
                </Subtitle>
                <Subtitle>
                    <FaMapMarkedAlt style={{width:"2em" ,height:"2em",marginRight:"10px"}}/> +216 9 81 45 65 92
                </Subtitle>
                <Subtitle>
                    <ImPrinter style={{width:"2em" ,height:"2em",marginRight:"10px"}}/> +216 4 78 75 77 42
                </Subtitle>
                <Subtitle>
                    <GrMail style={{width:"2em" ,height:"2em",marginRight:"10px"}}/> contact@digital.com
                </Subtitle>
                <Subtitle>
                    <SiWebmoney style={{width:"2em" ,height:"2em",marginRight:"10px"}}/> http://www.tunisie-digital.com
                </Subtitle>
                
              </TextWrapper>
            </InfoColumn>
            
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Formulaire;
