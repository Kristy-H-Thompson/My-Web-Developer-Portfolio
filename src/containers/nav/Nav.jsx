import React from 'react'
import './nav.css';
import {mylogo} from '../../assets'



const Nav = () => {
  return (
	<>
    <nav id="navBar">
         
    <Link className="first_link" to="/straypaws"><img alt="My icon" className="my-icon" src={mylogo} /></Link>

    		<ul id="menu">    
      			<li><a href="#projects">Projects</a></li>
      			<li><a href="#about">About</a></li>
      			<li><a href="#contact">Contact</a></li> 
    		</ul>
			
  		<div id="menuToggle" className="handle"> 
			<a href="#homgit adde"><img alt="My icon" className="my-icon" src="https://i.imgur.com/OBpKPl1.png" /></a> 
		</div>
	</nav>
	<div id="pushBack" style={{height:'0em', display:'none'}}></div>
	</>
  )
}

export default Nav




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