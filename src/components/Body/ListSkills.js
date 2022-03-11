import React from 'react'
import './ListSkills.css'

import imgBootstrap from '../../static/logo-bt.png';
import imgCss from '../../static/logo-css.png';
import imgHtml from '../../static/logo-html.png';
import imgJq from '../../static/logo-jq.png';
import imgJs from '../../static/logo-js.png';
import imgReact from '../../static/logo-react.png';

 const technicalSkillsImage = [
    {
        image:imgCss
    },
    {
        image:imgBootstrap
    },    
    {
        image:imgHtml
    },    
    {
        image:imgJq
    },    
    {
        image:imgJs
    },    
    {
        image:imgReact
    }    
]

export const ListSkills = () => {
  return (
    <div className='list-skills-container'>
      <div className='list-skills-title'>
        <p className='list-skills-subtitle'>Technical skills</p>
        <p className='list-skills-p'>
          Technologies in which I develop
        </p>
      </div>
      <div className='list-skills-image'>
        {
          technicalSkillsImage.map((skill, index) => {
            console.log(skill.image)
            return (
              <div className='skills-item-container' key={index}>
              <img
              className='skills-item-container-img'
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
