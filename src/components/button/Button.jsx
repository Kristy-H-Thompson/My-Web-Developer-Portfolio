import React from 'react'
import './button.css';



const Button = (props) => {
  return (
    <a href={props.link} target="_blank">
    <div className="button-container">
        <span><img src={props.img} alt={props.alt}/> {props.children} </span>
        <button type={props.type} name={props.children} onClick={props.onClick}>{props.children}</button>
    </div>
    </a>
  )
}

export default Button