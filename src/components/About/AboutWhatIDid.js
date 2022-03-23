import React from 'react'
import './AboutDescription.css';
import reactEco from '../../static/react-eco.png'

export const AboutWhatIDid = () => {
    return (
        <div className='about-description-container'>

            <div className='about-description-text animate__animated animate__fadeInLeft'>

                <h5 className='about-description-text-title'>

                    What do I do now
                </h5>
                <p className='about-description-text-contain'>
                    Currently I am mainly developing web applications, my
                    main stack of technologies is based on JavaScript as a pillar and relying on different
                    libraries of its ecosystem, to highlight React.js and as a redux complement
                </p>
                <p className='about-description-text-contain'>
                    For the style of my projects I use css, sass and as a library I rely mainly on bootstrap, for the management
                    of versions of my developments
                    I use git and github as an external repository, there you will find all my repositories, I leave you the
                    link so you can look a little of my code.
                </p>
            </div>
            <div className='about-description-img animate__animated animate__zoomIn animate__slower '>
                <img src={reactEco} alt="logo React.js" />
            </div>

        </div>
    )
}
