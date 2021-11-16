import React from 'react'
import Typical from 'react-typical'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Me from '../../assets/Images/me.jpg'
import './aboutMe.css'

const AboutMe = () => {
 return (
  <div className="about-me-section">
   <Container className="py-4">
    <Row className='d-flex d-row  '>
     <Col className="col-12 d-flex flex-column align-items-center ">
     <h2 className="title">درباره من </h2>
     </Col>
    </Row>
    <Row className=" d-flex justify-content-center align-items-center mt-5" >
     <Col className=" col-8  offset-1" >
      <h5> اسم من مازیاره و کار من این روزها 
      <Typical className="typical-text" loop={Infinity} wrapper='ا' steps={
              [
                'برنامه نویس فرانت اند',1000,
                'طراح وردپرس',1000,
                'طراح رابط کاربری',1000,

              ]
            }  />
      </h5>
      <p className="mt-4">برنامه نویسی رو سال 1394 با یادگیری JAVA َشروع کردم و بعد از مدتی به دلیل علاقه‌‌‌ ‌‌‌‌م 
       به سمت توسعه وب گرایش پیدا کردم، درسال 1395 با تعدادی از دوستان شروع به راه اندازی سایت 
       Terembi که یک استارتاپ در حوزه سبک زندگی بود کردیم و از سال 1396 بصورت فریلنسر به طراحی وب مشغولم. 
       در زمان آزادم همیشه مقالات مختلف رو مطالعه میکنم و میخوام دانش خودم رو بروز نگه داشته باشم، در دوره های مختلف شرکت میکنم
       و از یادگیری مطالب جدید لذت میبرم، در ضمن میتونید از طریق گیتهاب با بعضی از فعالیت های من آشنا بشین.
      </p>
     </Col>
     <Col className=" col-3 ">
      <Image src={Me} alt="me" fluid className="rounded-circle">

      </Image>
     </Col>
    </Row>
   </Container>
  </div>
 )
}

export default AboutMe
