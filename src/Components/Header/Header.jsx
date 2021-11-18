import React from 'react'
import { Row,Col,Container,Nav,Navbar } from 'react-bootstrap'
import Logo from '../../assets/Images/logo.png'
import { Image } from 'react-bootstrap'
import './Header.css'

const Header = () => {
 return (
 <div className="header-container  "> 
      <Container >
      <Row class="d-flex justify-content-start"  >
        <Col className="col-11"  >
        <Navbar  expand="lg"  >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="ml-auto "  >
                <Nav.Link className="nav-item-color me-4" href="#home">خانه</Nav.Link>
                <Nav.Link className="nav-item-color me-4"  href="#aboutMe">درباه من</Nav.Link>
                <Nav.Link className="nav-item-color me-4"  href="#home">خدمات</Nav.Link>
                <Nav.Link className="nav-item-color me-4"  href="#link">مهارت ها</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Col>
        <Col className="col-1 d-flex align-items-center" >
        <Image src={Logo} fluid ></Image>
        </Col>
      </Row>
      
      </Container>
  </div>

 )
}

export default Header
