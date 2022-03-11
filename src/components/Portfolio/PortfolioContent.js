import React from 'react'
import { Card } from 'react-bootstrap';
import './PortfolioContent.css';
import storeImg from '../../static/store.png'
import loginImg from '../../static/login.png'

export const PortfolioContent = () => {
  return (
    <div className='portfolio-container'>
      <h4> proyectos</h4>
      <>
        <Card className='portfolio-container-card'>
          <Card.Img variant="top" src={storeImg} />
          <Card.Body>
            <Card.Text className='portfolio-container-card-text'>
              Project developed under the educational framework, putting into practice what was
              learned in the web development course and as a final delivery, it was built as a
              page for an e-commerce, it is responsive following the first mobile methodology.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card className='portfolio-container-card'>
          <Card.Img variant="top" src={loginImg} />
          <Card.Body>
            <Card.Text className='portfolio-container-card-text'>
              This is a project built as a delivery for Alkemy to access the acceleration they provide,
              it was built with React-Redux and consumes an external API that provides the information
              to the page, it has a login and navigation routes.
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    </div>
  )
}
