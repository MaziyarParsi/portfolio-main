import React from 'react'
import { Container, Row,Col} from 'react-bootstrap'
import Lottie from 'lottie-react'
import hackingCoder from '../../assets/Images/Lottie/hacker-thinking-about-code.json'
import './HeroSection.css'
import Typical from 'react-typical'

const HeroSection = () => {
 return (
  <div className="hero-section ">
   <Container  className="d-flex flex-column ">
    <Row className="d-flex flex-grow-1 justify-content-center align-items-center pt-5">
     <Col className="col-6 ">
       <div className="me-4">
            <p className="text-white">سلام، به سایت شخصی من خوش اومدین. اسم من</p>
            <h1 className="text-white display-4 my-4 fw-bold">مازیار پارسی</h1>
            <h5 className="text-white "> و کار من {''}
            <Typical className="text-primary" loop={Infinity} wrapper='ا' steps={
              [
                'برنامه نویس فرانت اند',1000,
                'طراح وردپرس',1000,
                'طراح رابط کاربری',1000,

              ]
            }  />
            </h5>
        </div>
     </Col>
     <Col className=" col-6 " > <Lottie animationData={hackingCoder} /></Col>
    </Row>
  </Container>
  </div>
  
 )
}

export default HeroSection
