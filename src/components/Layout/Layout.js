import React from 'react';
import { Footer } from '../Footer/Footer';
import { NavBar } from '../NavBar/NavBar';
import { ParticlesContainer } from '../tsParticles/ParticlesContainer';

export const Layout = ({ children }) => {
  return (
    <>
      <ParticlesContainer />
      <NavBar />
      {
        children
      }
     <Footer/>
    </>
  )
}