import React from 'react'
import {css, html, figmatwo, javascript, react, mysql, sass, python} from '../../assets'
import './tech-grid.css';


const Techgrid = () => {
  return (
    <div className="tech-grid">
        <img alt="html" src={html} />
        <img alt="css" src={css} /> 
        <img alt="javascript" src={javascript}/>
        <img alt="react" src={react} />
        <img alt="pyton" src={python}/>
        <img alt="mysql" src={mysql}/> 
        <img alt="sass" src={sass} />
        <img alt="figma" src={figmatwo}/>
    </div>
  )
}

export default Techgrid