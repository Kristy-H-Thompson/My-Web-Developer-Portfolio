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
            <li><b>Email:</b> kristy.n.hayes@gmail.com</li>
            <li><b>Time Zone:</b> MST </li>
        </ul>
        <Toggle />   
        </div>


        <div id="bottom-nav" className="footer-nav">
        <h4>Other Links</h4>
        <hr/>
        <ul>
            <li><a href="https://github.com/Kristy-H-Thompson">Github</a></li>
            <li><a href="https://www.linkedin.com/in/kristy-thompson-372990243/">Linked In</a></li>
            <li><a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage">Indeed</a></li>
        </ul>
        </div>
    </footer>
    </>
  )
}

export default Footer