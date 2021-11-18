import React from 'react'
import './cardComponent.css'
import { Card } from 'react-bootstrap'
import Lottie from 'lottie-react'

const CardComponent = (props) => {
 return (
  <Card  style={{ width: '18rem' }} className="d-flex  justify-content-center  card-bg py-4"  >
     <Lottie animationData={props.image} style={{width:"5rem",height:"5rem" ,margin: '0 auto'}} />
     <Card.Body className="d-flex flex-column justify-content-center align-items-center card-body ">
       <Card.Title className="card-text-color fs-4 ">{props.title}</Card.Title>
       <Card.Text className="text-center mt-2 card-text-color card-text-body ">
        {props.children}
       </Card.Text>
     </Card.Body>
   </Card>
 )
}

export default CardComponent
