import React from 'react'
import './iconsDiv.css'
import {Github,Dribbble,Linkedin } from 'react-bootstrap-icons'

const IconsDiv = () => {
 return (
  <div className="icon-holder d-flex align-items-center justify-content-between " >
       
        <hr className="icon-line"/>
        <div>
        <a href="https://github.com/MaziyarParsi" className="icon-link " target="_blank">
        <Github size={28}/>
        </a>
        <a href="https://www.linkedin.com/in/maziyar-parsi-115225159/" className="icon-link" target="_blank">
        <Linkedin size={28} className="me-3" />
        </a>
        <a href="https://dribbble.com/MaziyarParsi" className="icon-link ms-1" target="_blank">
        <Dribbble size={28} className="me-3" />
        </a>
        
        </div>
      </div>
 )
}

export default IconsDiv
