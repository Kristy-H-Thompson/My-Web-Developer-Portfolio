import React from 'react'
import {mylogo} from '../../assets'
import {DividerTop, Toggle} from '../../components';
import {Link } from "react-router-dom";
import './footer.css';


const Footer = (props) => {

  return (
    <>
    <DividerTop />
    <footer>
        <div className="footer-icon-container">
        <Link to="/">
        <img className="footer-icon" alt="Kristys's icon" src={mylogo} />
        </Link>
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


        <div id="bottom-nav" className="footer-nav">
        <h4>Navigation</h4>
        <hr/>
        <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>   
        </ul>
        </div>
    </footer>
    </>
  )
}

export default Footer