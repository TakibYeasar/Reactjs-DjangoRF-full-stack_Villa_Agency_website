import React from 'react';
import './styles/sass/_base.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header } from './components';
import { Allproperties, Authenticate, Homepage, Propertydetails, Registrations, Shedule } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Authenticate />} />
        <Route path="/register" element={<Registrations />} />
        {/* <Route path='/api/auth/register/verifing/:token' component={Verify} ></Route> */}
        <Route path="/all-property" element={<Allproperties />} />
        <Route path="/propertydetails" element={<Propertydetails />} />
        <Route path="/shedule-visit" element={<Shedule />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

