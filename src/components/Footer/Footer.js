import React from 'react';
import './Footer.css';
import logo from '../../static/Logo.png'
import { NavLink } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-content-nav'>
          <div className='footer-content-nav-logo'>
            <img src={logo}></img>
          </div>
          <div className='footer-content-nav-links'>
            <NavLink className='footer-content-nav-link' to="/">Home</NavLink>
            <NavLink className='footer-content-nav-link' to="/about">About</NavLink>
            <NavLink className='footer-content-nav-link' to="/portfolio">Portfolio</NavLink>
            <NavLink className='footer-content-nav-link' to="/contact">Contact</NavLink>
          </div>
        </div>
        <div className='footer-content-socialmedia'>
          <div className='ms-auto d-flex'>
            <BsLinkedin className='m-3 socialmedia-icons'/>
            <BsGithub className='m-3 socialmedia-icons'/>
            <BsInstagram className='m-3 socialmedia-icons'/>            
          </div>
        </div>
      </div>
    </div>
  )
}
