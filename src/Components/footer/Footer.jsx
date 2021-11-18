import React from 'react'
import './footer.css'
import { HeartFill } from 'react-bootstrap-icons'

const Footer = () => {
 return (
  <footer className="bg-dark py-2 d-flex justify-content-center">
   <span className="text-white text-align-center">
          این سایت توسط مازیار پارسی با <HeartFill className="text-danger"/> ساخته
          شده است
        </span>
  </footer>
 )
}

export default Footer
