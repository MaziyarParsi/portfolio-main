import React from 'react'
import { Row,Col,Container,Nav } from 'react-bootstrap'
import Logo from '../../assets/Images/logo.png'
import { Image } from 'react-bootstrap'
import './Header.css'

const Header = () => {
 return (
 <div className="header-container  "> 
      <Container >
      <Row  >
        <Col className="d-flex align-items-center justify-content-start col-11  " >
              <Nav activeKey="/home">
            <Nav.Item className="me-2" >
              <Nav.Link eventKey="link-2" className="nav-item-color">مهارت ها</Nav.Link>
            </Nav.Item>
            <Nav.Item className="me-2">
              <Nav.Link eventKey="link-2" className="nav-item-color">خدمات</Nav.Link>
            </Nav.Item>
            <Nav.Item className="me-2 ">
              <Nav.Link eventKey="link-1" className="nav-item-color">درباره من</Nav.Link>
            </Nav.Item >
            <Nav.Item className="" > 
              <Nav.Link href="" className="nav-item-color">خانه</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col className="col-1" >
        <Image src={Logo} fluid ></Image>
        </Col>
      </Row>
      
      </Container>
  </div>

 )
}

export default Header
