import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import './myServices.css'
import { CardComponent } from '../index'
import Multimedia from '../../assets/Images/Lottie/multimedia.json'
import Developer from '../../assets/Images/Lottie/developer.json'
import Design from '../../assets/Images/Lottie/design.json'


const MyServices = () => {
 return (
  <Container fluid className="my-services-container ">
   <Container className="py-5" >
    <Row className='d-flex d-row  '>
     <Col className="col-12 d-flex flex-column align-items-center ">
     <h2 className="my-services mb-3"> خدمات من </h2>
     <p className="subtitle">خدماتی که به شما ارایه میکنم</p>
     </Col>
    </Row>
    <Row className="py-5 "  >
     <Col md={4} xs={6} className="d-flex justify-content-center" >
       <CardComponent image={Multimedia} title={'طراحی وبسایت'}> 
                با کمک من، شما میتوانید سایت شخصی یا کاری خود را در سطح وب پیاده سازی کرده و برای
                عموم به مشاهده بگذارید 
        </CardComponent>
     </Col >
     <Col md={4} xs={6}  className="d-flex justify-content-center " >
         <CardComponent image={Developer} title={' برنامه نویس وب '} > 
         برای پیاده سازی طرح وبسایت، نیاز به کدنویسی فرانت اند ضروری است،در اینجا مهارت های
                کدنویسی به شما کمک میکند
        </CardComponent>
     </Col>
     <Col md={4}  className="d-flex justify-content-center ">
         <CardComponent image={Design} title={' طراح رابط کاربری '}> 
         برای طراحی ظاهر سایت یا اپلیکیشن خود، میتوانید روی مهارت های من به عنوان دیزاینر برای طراحی رابطه
                کاربری حساب باز کنید
        </CardComponent>
     </Col>
    
    </Row>
   </Container>
  </Container>
 )
}

export default MyServices
