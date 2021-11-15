import React from 'react'
import { Container, Row,Col} from 'react-bootstrap'
import Header from '../Header/Header'
import './HeroSection.css'
const HeroSection = () => {
 return (
  <div className="hero-section">
   <Container  className="d-flex h-100 flex-column">
    <Row ><Header/></Row>
    <Row className="d-flex flex-grow-1 justify-content-center align-items-center ">
     <Col className="bg-danger col-8"> col 1</Col>
     <Col className="bg-primary col-4">col 2</Col>
    </Row>
  </Container>
  </div>
  
 )
}

export default HeroSection
