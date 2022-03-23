import React from 'react'
import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiJquery, SiMaterialui, SiReact, SiSass } from 'react-icons/si';

import './ListSkills.css'

export const ListSkills = () => {
  return (
    <div className='list-skills-container'>
      <div className='list-skills-title animate__animated animate__fadeInUp animate__faster'>
        <p className='list-skills-subtitle'>Technical skills</p>
        <p className='list-skills-p'>
          Technologies in which I develop
        </p>
      </div>
      <div className='list-skills-image animate__animated animate__fadeInUp animate__faster'>
        <div>
          <span aria-hidden="true">
            JavaScript
          </span>
          <span  >
            <SiJavascript />
          </span>
        </div>
        <div>
          <span aria-hidden="true">
            React
          </span>
          <span  >
            <SiReact />
          </span>
        </div>
        <div>
          <span aria-hidden="true">
            Bootstrap
          </span>
          <span  >
            <SiBootstrap />
          </span>
        </div>
        <div>
          <span aria-hidden="true">
            CSS
          </span>
          <span  >
            <SiCss3 />
          </span>
        </div>
        <div>
          <span aria-hidden="true">
            MaterialUi
          </span>
          <span  >
            <SiMaterialui />
          </span>
        </div>        
        <div>
          <span aria-hidden="true">
            Sass
          </span>
          <span  >
            <SiSass />
          </span>
        </div>
        <div>
          <span aria-hidden="true">
            JQuery
          </span>
          <span  >
            <SiJquery />
          </span>
        </div>
        <div>
          <span aria-hidden="true">
            HTML          </span>
          <span  >
            <SiHtml5 />
          </span>
        </div>
      </div>
    </div>
  )
}
