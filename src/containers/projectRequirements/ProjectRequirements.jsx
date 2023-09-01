import React from 'react'
import './projectrequirements.css'

const ProjectRequirements = () => {
  return (
<section className="projectRequirements">

    <div className="requirements">
    <h2>Project Requirements</h2>
    <hr />
        {props.children}
    </div>

    <div className="requirements-image">
        <img src={props.projectImage} alt={props.projectImageName}/>
    </div>
</section>
  )
}

export default ProjectRequirements