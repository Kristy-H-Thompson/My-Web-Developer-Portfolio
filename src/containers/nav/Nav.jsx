import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link, useNavigate } from 'react-router-dom';
import { mylogo, resumeDocument } from '../../assets';

const Nav = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  // Function to handle navigation to the homepage and scroll to the section
  const goToSection = (sectionId) => {
    // Update active section immediately after click
    setActiveSection(sectionId);
    
    navigate('/'); // Navigate to the home page
    
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        // Adjusting scroll position by considering potential fixed navbar height
        window.scrollTo({
          top: section.offsetTop - 50,  // Adjust offset if you have a fixed navbar
          behavior: 'smooth',
        });
      }
    }, 100);  // Delay for page load to ensure scroll works
  };

  // Handle scrolling when clicking a link
  const handleScroll = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor link behavior
    goToSection(sectionId); // Scroll to the section after navigating
  };

  // Setup the Intersection Observer to track when a section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is in view (50% or more)
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    // Observe each section with an id (ensure your sections have IDs)
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    // Clean up the observer when the component unmounts
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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
            <a
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
          <li>
            <a href={resumeDocument} download="My resume" rel="noreferrer" target="_blank">
              Resume
            </a>
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

window.onload = function () {
  var menuTog = document.getElementById('menuToggle');
  var navBar = document.getElementById('navBar');

  if (menuTog !== null) {
    menuTog.addEventListener('click', togNav);
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
