import React from 'react';
import { Link } from 'react-router-dom';
import './BodyBanner.css';

export const BodyBanner = () => {
  return (
    <div className='body-banner-container'>
      <div className='body-banner-container-nav animate__animated animate__fadeInUp' >
        <Link to="/about/who" className='link-navbar body-banner-container-link'>
          Who I am
        </Link>
        <Link to="/about/what" className='link-navbar body-banner-container-link'>
          What do I do
        </Link>
        <Link to="/about/learning" className='link-navbar body-banner-container-link'>
          What's next
        </Link>
      </div>
    </div>
  )
}
