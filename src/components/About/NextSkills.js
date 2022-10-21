import React from 'react'
import './NextSkills.css'
import mongo from '../../static/mongo.png';
import node from '../../static/node.png';


export const NextSkills = () => {
  return (
    <div className='about-description-container'>

      <div className='about-description-text animate__animated animate__fadeInLeft'>

        <h5 className='about-description-text-title'>

          The skills I'm learning

        </h5>
        <p className='about-description-text-contain'>
          I am learning technologies that allow me to perform in the backend area, as a language
          I use JavaScript, supported by Node.js and express to work with servers
        </p>
        <p className='about-description-text-contain'>
        Regarding databases, as a first instance,
         I find myself learning Mongo DB to enter the world
          of relational databases.

        </p>
      </div>
      <div className='about-description-img backgroun-blur  '>
        <img src={node} alt="logo React.js" className='animate__animated animate__zoomIn animate__slower' />
        <img src={mongo} alt="logo React.js" className='animate__animated animate__zoomIn animate__slower' />
      </div>

    </div>
  )
}
