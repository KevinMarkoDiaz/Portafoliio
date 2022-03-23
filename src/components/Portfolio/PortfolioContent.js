import React from 'react'
import { Button, Card } from 'react-bootstrap';
import './PortfolioContent.css';
import storeImg from '../../static/store.png'
import loginImg from '../../static/login.png'

export const PortfolioContent = () => {
  return (
    <div className='portfolio-container'>
      <h4 className='animate__animated animate__fadeInLeft'>
        Projects I have worked on
      </h4>
      <div className='portfolio-container-card-layout'>
        <div>
          <Card className='portfolio-container-card animate__animated animate__zoomIn' bg="dark">
            <Card.Img variant="top" src={storeImg} />
            <Card.Body>
              <Card.Text className='portfolio-container-card-text'>
                Project developed under the educational framework, putting into practice what was
                learned in the web development course and as a final delivery, it was built as a
                page for an e-commerce, it is responsive following the first mobile methodology.
              </Card.Text>
            </Card.Body>
            <Button target="_blank" variant="outline-secondary" href="https://kevinmarkodiaz.github.io/RemerasFPC/index.html">
              See more
            </Button>
          </Card>
        </div>
        <div>
          <Card className='portfolio-container-card animate__animated animate__zoomIn' bg="dark">
            <Card.Img variant="top" src={loginImg} />
            <Card.Body>
              <Card.Text className='portfolio-container-card-text'>
                This is a project built as a delivery for Alkemy to access the acceleration they provide,
                it was built with React-Redux and consumes an external API that provides the information
                to the page, it has a login and navigation routes.
              </Card.Text>
            </Card.Body>
            <Button target="_blank" variant="outline-secondary" href="https://adoring-booth-fae734.netlify.app/login">
              See more
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
