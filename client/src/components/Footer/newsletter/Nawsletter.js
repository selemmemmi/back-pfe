import React, { useState } from 'react';
import './style.css'
import Footer from '../Footer' ;
import { Container,Form ,H2 ,Input ,Button, Alert ,Section ,Input2} from './Style';
import UiComponents from './UiComponents';


function Nawsletter() {
  const [input, setinput] = useState("");
  const [message, setMessage] = useState("")

const inputHandler =(e)=>{
  setinput(e.target.value);
}

const submitHandler =(e)=>{
  e.preventDefault();
  if(input){
    console.log(input)
    setinput("");
  }
  setMessage("Thank you for Subscribig!!!")
  setTimeout(()=>{
    setMessage("")
  },3000 )
}
  return (
    <div style={{backgroundColor:"#101522"}}>
      <Container>
        <UiComponents />
        
        <Form onSubmit={submitHandler}>
          {message && <Alert>
              {message}
          </Alert>}
          <H2>SUBSCRIBE IN NEWSLETTER</H2>
          <section className='footer-subscription'> 
              <div className='input-areas'>
                <form>
                  <input
                    className='footer-input'
                    name='email'
                    type='email'
                    placeholder='Your Email'
                    value={input}
                    onChange={inputHandler}
                  />
                  
                  <Button buttonStyle='btn--outline' onClick={submitHandler}>Subscribe</Button>
                </form>
              </div>
          </section>
        </Form>   
      </Container>
      
    </div>
  )
}

export default Nawsletter