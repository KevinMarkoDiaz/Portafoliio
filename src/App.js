import React from 'react';
import { Home } from './components/Home/Home';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { Portfolio } from './components/Portfolio/Portfolio';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/portfolio' element={<Portfolio/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
