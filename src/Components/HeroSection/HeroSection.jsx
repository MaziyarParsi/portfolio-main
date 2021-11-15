import React from 'react'
import { Container, Row,Col} from 'react-bootstrap'
import Header from '../Header/Header'
import './HeroSection.css'
const HeroSection = () => {
 return (
  <div className="hero-section">
   <Container  className="d-flex h-100 flex-column">
    <Row ><Header/></Row>
    <Row className="d-flex flex-grow-1 justify-content-center align-items-center">
     sadasd
    </Row>
  </Container>

  </div>
  
 )
}

export default HeroSection
