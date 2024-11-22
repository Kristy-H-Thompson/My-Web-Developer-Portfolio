import React from 'react'
import './nav.css';
import { Link, useNavigate } from 'react-router-dom';
import {mylogo, resumeDocument} from '../../assets'



const Nav = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the homepage and scroll to the section
  const goToSection = (sectionId) => {
    navigate('/');  // Navigate to the home page
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);  // Delay for page load
  };

  // Handle scrolling when clicking a link
  const handleScroll = (e, sectionId) => {
    e.preventDefault();  // Prevent default anchor link behavior
    goToSection(sectionId);  // Scroll to the section after navigating
  };

  return (
    <>
      <nav id="navBar">
        {/* Logo */}
        <Link className="first_link" to="/" onClick={() => goToSection('about')}>
          <img alt="My icon" className="my-icon" src={mylogo} />
        </Link>

        {/* Navigation Menu */}
        <ul id="menu">
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About Me</a>
          </li>              
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Portfolio</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
          </li> 
          <li>
            <a href={resumeDocument} download="MyExampleDoc" target='_blank'>Resume</a>
          </li> 
        </ul>

        {/* Mobile Menu Toggle */}
        <div id="menuToggle" className="handle">
          <a href="#home">
            <img alt="My icon" className="my-icon" src="https://i.imgur.com/OBpKPl1.png" />
          </a> 
        </div>
      </nav>
      <div id="pushBack" style={{ height: '0em', display: 'none' }}></div>
    </>
  );
};

export default Nav;



window.onload = function() {
    var menuTog = document.getElementById('menuToggle');
    var navBar = document.getElementById('navBar');
  
    if (menuTog !== null) {
      menuTog.addEventListener('click', togNav);
    }
  
    if (navBar !== null) {
      window.addEventListener('scroll', fixNav);
    }
  };
  

  function fixNav() {
    var head = document.getElementById('head');
    var pushBack = document.getElementById('pushBack');
	var navBar = document.getElementById('navBar');
    var headBot;
    
    if (head !== null) {
      headBot = head.getBoundingClientRect().bottom;
    }
  
    if (pushBack !== null) {
      if (headBot > 0) {
        navBar.style.position = 'static';
        pushBack.style.height = '0em';
      } else {
        navBar.style.position = 'fixed';
        pushBack.style.height = '3em';
      }
    }
  }
  
  function togNav() {
    var navMenu = document.getElementById('menu');
  
    if (navMenu !== null) {
      if (navMenu.className === "showing") {
        navMenu.className = "";
      } else {
        navMenu.className = "showing";
      }
    }
  }