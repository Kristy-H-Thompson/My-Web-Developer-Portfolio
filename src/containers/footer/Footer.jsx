import React from 'react'
import {logo} from '../../assets'
import {Toggle} from '../../components';
import './footer.css';


const Footer = (props) => {

  return (
    
    <footer>
        <div className="footer-icon-container">
        <a href='#home'><img className="footer-icon" alt="Kristys's icon" src={logo} /></a>
        </div>

        <div>
        <h4>Contact Me</h4>
        <hr/>
        <ul>
            <li><b>Name:</b> Kristy Thompson</li>
            <li><b>Email:</b> kristy.h.thompson@gmail.com</li>
            <li><b>Time Zone:</b> EST </li>
        </ul>
        <Toggle />   
        </div>


        <div className="footer-nav">
        <h4>Navigation</h4>
        <hr/>
        <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>   
        </ul>
        </div>


    </footer>
  )
}

export default Footer