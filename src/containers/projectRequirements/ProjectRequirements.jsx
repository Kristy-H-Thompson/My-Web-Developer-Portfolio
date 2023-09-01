import React from 'react'
import './projectrequirements.css'

const ProjectRequirements = (props) => {
  return (
<section className="projectRequirements">
    
    <div className="requirements-image">
        <img src={props.projectImage} alt={props.projectImageName}/>
    </div>

    <div className="requirements">
    <h2>Project Requirements</h2>
    <hr />
        {props.children}
    </div>

</section>
  )
}

export default ProjectRequirements