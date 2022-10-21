import React from 'react'
import './Button.css'

export const Button = ({ functionPerforms  }) => {  

    return (
        <div className='grid__button' >
            <p>{functionPerforms}</p>
        </div>
    )
};
