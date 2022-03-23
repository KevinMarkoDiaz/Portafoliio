import React from 'react';
import './ContactContentContainer.css';
import { MdEmail, MdPhoneIphone } from 'react-icons/md';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';


export const ContactContentContainer = () => {
  return (
    <div className='contact-container'>
      <div className='contact-container-content'>
        <div className='contact-container-cnontactme animate__animated animate__fadeInLeft'>
          <h4>
            Contact me
          </h4>
          <div className='contact-container-links'>
            <p>{<MdEmail/>} kevindi0695@gmail.com</p>
            <p>{<MdPhoneIphone/>} +54 9 11 2539 6717</p>
          </div>
        </div>
        <div className='contact-container-followme animate__animated animate__fadeInLeft'>
          <h4>
            Follow me on my social networks
          </h4>
          <div className='contact-container-links'>
            <p>{<BsGithub/>} KevinMarkoDiaz</p>
            <p>{<BsLinkedin/>} Kevin Marko Diaz Quemba</p>
            <p>{<BsInstagram/>} kevin_diaz0</p>
          </div>
        </div>
      </div>

    </div>
  )
}
