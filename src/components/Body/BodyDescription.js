import React from 'react';
import { NavLink } from 'react-router-dom'

import './BodyDescription.css';

export const BodyDescription = () => {
  return (
    <div className='description-container '>
      <div className='description-content-container animate__animated animate__fadeInUp '>
        

          <div className='description-content-name'>
            <h2>Kevin Marko Diaz</h2>
          </div>
          <div className='description-content-title'>
            <h4>Full Stack Developer</h4>        
        </div>
        
      </div>
      <div className='description-image-container'>
          <div >
              <NavLink className='description-image-container-nav-link' to="/about">About</NavLink>
              <NavLink className='description-image-container-nav-link' to="/portfolio">Portfolio</NavLink>
              <NavLink className='description-image-container-nav-link' to="/contact">Contact</NavLink>
          </div>

        </div>
    </div>
  )
}
