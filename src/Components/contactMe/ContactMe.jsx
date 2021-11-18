import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import {Instagram,Telegram,Twitter} from 'react-bootstrap-icons'
import Lottie from 'lottie-react'
import './contactMe.css'
import Contact from '../../assets/Images/Lottie/37147-contact-us.json'
const ContactMe = () => {
 return (
  <Container fluid className="contact-me-bg">
   <Container >
    <Row>
     <Col className="col-12 d-flex flex-column align-items-center ">
     <h2 className="contact-me-title">راه های ارتباط با من </h2>
     </Col>
    </Row>
    <Row className="d-flex align-items-center ">
     <Col >
     <p>برای ارتباط با من میتونین روی لینک های زیر کلیک کنید تا بتونیم با همدیگه صحبت کنیم</p>
     <Row >
      <Col className="d-flex justify-content-center ">
       <a href="https://www.instagram.com/maziarparc/">
      <Instagram size={28} ></Instagram>
       </a>
       <a href="https://t.me/Maziarparc">
       <Telegram size={28} className="mx-2"></Telegram>
        </a>
     <a href="https://twitter.com/MaziyarParsi">
     <Twitter size={28}></Twitter>
     </a>
     </Col>
     </Row>
     </Col>
     <Col className="">
     <Lottie animationData={Contact}  />
     </Col>
    </Row>
   </Container>
  </Container>
 )
}

export default ContactMe
