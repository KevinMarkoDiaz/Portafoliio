import React from 'react'
import { Button, Card } from 'react-bootstrap';
import storeImg from '../../static/store.png'
import loginImg from '../../static/login.png'
import conway from '../../static/conway.png'
import mfcstore from '../../static/mfcstore.png'
import './PortfolioContent.css';

export const PortfolioContent = () => {
  return (
    <div className='portfolio-container'>
      <h4 className='animate__animated animate__fadeInLeft'>
        Projects I have worked on
      </h4>
      <div className='portfolio-container-card-layout'>
        <div>
          <Card className='portfolio-container-card animate__animated animate__zoomIn shadow' bg="dark">
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
      <div className='portfolio-container-card-layout'>
        <div>
          <Card className='portfolio-container-card animate__animated animate__zoomIn' bg="dark">
            <Card.Img variant="top" src={conway} />
            <Card.Body>
              <Card.Text className='portfolio-container-card-text'>
              The Game of Life is a cellular automaton designed by the British mathematician John Horton Conway in 1970. 
              It is a game with zero players, in which its evolution is determined by an initial state.
              </Card.Text>
            </Card.Body>
            <Button target="_blank" variant="outline-secondary" href="https://stupendous-begonia-542ab1.netlify.app/">
              See more
            </Button>
          </Card>
        </div>
        <div>
          <Card className='portfolio-container-card animate__animated animate__zoomIn' bg="dark">
            <Card.Img variant="top" src={mfcstore} />
            <Card.Body>
              <Card.Text className='portfolio-container-card-text'>
              Project made with React - Firebase

              </Card.Text>
            </Card.Body>
            <Button target="_blank" variant="outline-secondary" href="https://starlit-speculoos-975efe.netlify.app/">
              See more
            </Button>
          </Card>
        </div>
                
      </div>
    </div>
  )
}
