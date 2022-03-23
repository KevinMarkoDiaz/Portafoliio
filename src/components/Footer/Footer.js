import React from 'react';
import './Footer.css';
import logo from '../../static/Logo.png'
import { Link, NavLink } from 'react-router-dom';
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
            <NavLink className='footer-content-nav-link' to="/portfolio">Portfolio</NavLink>
            <NavLink className='footer-content-nav-link' to="/contact">Contact</NavLink>
          </div>
        </div>
        <div className='footer-container-category-link'>
          <ul>
            <NavLink className='footer-content-nav-link-about' to="/about">About</NavLink>
            <Link to="/about/who" className='footer-container-category-links'>Who I am</Link>
            <Link to="/about/what" className='footer-container-category-links'>What do I do</Link>
            <Link to="/about/learning" className='footer-container-category-links'>What's next</Link>
          </ul>
        </div>
        <div className='footer-content-socialmedia'>
          <div className='ms-auto d-flex'>
            <a href="https://www.linkedin.com/in/kevin-marko-diaz-quemba/"  target="_blank">
            <BsLinkedin className='m-3 socialmedia-icons'/>
            </a>
            <a href='https://github.com/KevinMarkoDiaz'  target="_blank">
            <BsGithub className='m-3 socialmedia-icons'/>
            </a>
            <a href='https://www.instagram.com/kevin_diaz0/' target="_blank">
            <BsInstagram className='m-3 socialmedia-icons'/>            
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
