import React from 'react'
import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiJquery, SiMaterialui, SiReact, SiSass, SiMongodb, SiSequelize, SiPostgresql, SiPostman } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import Conway from '../conway/Conway';

import './ListSkills.css'

export const ListSkills = () => {
  return (
    <div className='container-list-skill'>
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
              HTML
            </span>
            <span  >
              <SiHtml5 />
            </span>
          </div>
          <div>
            <span aria-hidden="true">
              Node JS
            </span>
            <span  >
              <FaNode />
            </span>
          </div>
          <div>
            <span aria-hidden="true">
              Express
            </span>
            <span  >
              <FaNode />
            </span>
          </div>
          <div>
            <span aria-hidden="true">
              Mongo DB
            </span>
            <span  >
              <SiMongodb />
            </span>
          </div>
          <div>
            <span aria-hidden="true">
              Mongoose
            </span>
            <span  >
              <SiMongodb />
            </span>
          </div>
          <div>
            <span aria-hidden="true">
              Sequelize
            </span>
            <span  >
              <SiSequelize />
            </span>
          </div>
          <div>
            <span aria-hidden="true">
              PostgresSQL
            </span>
            <span  >
              <SiPostgresql />
            </span>
          </div>
          <div>
            <span aria-hidden="true">
              Postman
            </span>
            <span  >
              <SiPostman />
            </span>
          </div>
        </div>
      </div>
      <div className='list-skills-container-image'>
        <div className='indication-conway'>
          <h4>
            Conway's Game of Life</h4>
          <h5>Rules of the game
          </h5>
          <p>
            The rules of the game are as follows:

            If a cell is alive and has two or three living neighbors, it survives.
            If a cell is dead and has three living neighbors, it is born.
            If a cell is alive and has more than three living neighbors, it dies.
            The initial arrangement or pattern of cells is called the "seed."
            The next generation is born from applying the rules of the game to all cells simultaneously.

            This process can run indefinitely.

          </p>
        </div>
        <Conway />
      </div>
    </div>
  )
}
