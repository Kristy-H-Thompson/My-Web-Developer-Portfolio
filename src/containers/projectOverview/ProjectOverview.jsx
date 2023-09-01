import React from 'react'
import {github, website} from '../../assets'
import {Button, DividerBottom, ProjectOverview, Toggle} from '../../components';



const Projectoverview = (props) => {
  return (
    <article id={props.projectName}>

    <div>
    <div className="accent">
        <Toggle />
        <img className="header-img" alt=" Kristy" src={props.projectImage} />
    </div>
    <DividerBottom />
    </div>

    <div className="header">
        <h1>{props.projectName}</h1>
        <div className="title">{props.projectType}</div>
        <hr/>
        <p>{props.children}</p>
        <h4>Also check out this project's: </h4>

        <div className="button-grid">
        <Button img={github} type='button'  alt="github" link={props.projectGithub} target="_blank">Github</Button>
        <Button img={website} type='button'  alt={props.projectName} link={props.projectWebsite} target="_blank">Website</Button>
        </div>
    </div>
    </article>
  )
}

export default Projectoverview