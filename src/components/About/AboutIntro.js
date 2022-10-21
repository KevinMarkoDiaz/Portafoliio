import React from 'react'
import iconWeb from '../../static/icon-web.png'

import './AboutDescription.css'

export const AboutIntro = () => {
  return (
    <>
     <div className='about-description-container'>
        <div className='about-description-img2 backgroun-blur '>
                <img src={iconWeb} alt="logo React.js" className='animate__animated animate__zoomIn animate__slower' />
        </div>
        <div className='about-description-text animate__animated animate__fadeInRight'>

          <h5 className='about-description-text-title'>
            Hi im kevin!
          </h5>
          <p className='about-description-text-contain'>
            I am a committed person in all aspects of my life, constant,
            creative and capable. I have education in the area of ​​programming and administration with
            an emphasis on process improvement, enthusiastic about
            technology and interested in developing myself in an environment that allows me to work
            and learn in a cycle of constant growth.
          </p>

        </div>
      </div>
    </>
  )
}
