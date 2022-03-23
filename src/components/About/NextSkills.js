import React from 'react'
import './NextSkills.css'

import mongo from '../../static/mongo.png';
import node from '../../static/node.png';

const technicalSkillsImage = [
  {
    image: mongo
  },
  {
    image: node
  },
]

export const NextSkills = () => {
  return (
    <div className='list-skills-container-about'>
      <div className='list-skills-title-about animate__animated animate__fadeInLeft'>
        <p className='list-skills-subtitle-about'>
          I am learning</p>
      </div>
      <div className='list-skills-image-about animate__animated animate__zoomIn animate__slower'>
        {
          technicalSkillsImage.map((skill, index) => {
            console.log(skill.image)
            return (
              <div className='skills-item-container-about' key={index}>
                <img
                  className='skills-item-container-img-about'
                  src={skill.image}
                  alt='Img tecnology'
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
