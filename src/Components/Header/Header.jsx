import React from 'react'
import { Row,Col,Container,Nav } from 'react-bootstrap'
import Logo from '../../Images/logo.png'
import { Image } from 'react-bootstrap'
import './Header.css'

const Header = () => {
 return (
 
  <Container className="p-2 bg-color">
   <Row >
    <Col md={1} >
     <Image src={Logo} fluid></Image>
    </Col>
    <Col md={11} className="d-flex align-items-center justify-content-end" >
          <Nav activeKey="/home">
        <Nav.Item className="me-2" > 
          <Nav.Link href="/home" className="nav-item-color">خانه</Nav.Link>
        </Nav.Item>
        <Nav.Item className="me-2 ">
          <Nav.Link eventKey="link-1" className="nav-item-color">درباره من</Nav.Link>
        </Nav.Item >
        <Nav.Item className="me-2">
          <Nav.Link eventKey="link-2" className="nav-item-color">خدمات</Nav.Link>
        </Nav.Item>
        <Nav.Item className="me-2" >
          <Nav.Link eventKey="link-2" className="nav-item-color">مهارت ها</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  </Row>
  
  </Container>

 )
}

export default Header
