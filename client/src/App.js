import React from 'react';

import Home from './pages/HomePage/Home';

import SignInPage from './pages/SignUp/LoginPage';
import {  Route, Routes } from 'react-router-dom';

import {  userInputs ,assistInputs } from "./formSource";

import Contact from './pages/contact/Contact';
import SignUpPage from './pages/SignUp/RegisterPage';
import ForgetPasswordPage from './pages/SignUp/ForgetPasswordPage';
import HomeAdmin from './pages/admin/Home/Home';
import List from './pages/admin/List/List';
import Assistance from './pages/admin/assistance/Assistance';
import Single from './pages/admin/single/Single';
import New from './pages/admin/new/NewClient';
import Client from './pages/client/single/Client'
import Apropos from './pages/a propos/Apropos';
import NosRef from './pages/NOSRÉFÉRENCES/NosRef' ;
import SingleAssistant from './pages/admin/single/SingleAssistant';
import NewAssistant from './pages/admin/new/NewAssistant';
import Formulaire from './pages/admin/formulaire/Formulaire';


function App() {
  return (<>
    <Routes>

      <Route path='/'>
        <Route index element={<Home/>} />
        <Route exact  path='/contact' element={<Contact/>} />
        <Route exact  path='/A-propos' element={<Apropos/>} />
        <Route exact  path='/NOS-REFERENCES' element={<NosRef/>} />
        <Route exact  path='/forget-password' element={<ForgetPasswordPage/>} />
        <Route exact  path='/register' element={<SignUpPage/>} />
        <Route exact  path='/login' element={<SignInPage/>} />

        <Route path="admin">
              <Route index element={<HomeAdmin/>} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New inputs={userInputs}  title="Add New Client" />}/>
                <Route path="Edit/:id" element={<New inputs={userInputs}  title="Edit Client" />}/>
              </Route>

              <Route path="assistance">
                <Route index element={<Assistance />} />
                <Route path=":assistanceId" element={<SingleAssistant />} />
                <Route path="new" element={<NewAssistant title="Add New assistant" />}/>
                <Route path="Edit/:id" element={<NewAssistant  title="Add New assistance" />}/>
              </Route>
              <Route path="formulaire">
                  <Route index element={<Formulaire />} />
              </Route>

        </Route>
        <Route path="client">
              <Route path=":clientId" element={<Client/>} />
              
        </Route>
        
        
      </Route>
      
      
    </Routes>
    </>
  );
}

export default App;
