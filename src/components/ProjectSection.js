// import { functionTypeAnnotation } from "@babel/types"
import React from "react"
import "./navbar.css"


function ProjectSection({name}) {
    return (
        <div className="projectContainer">
            <div className="project-section">
                <div className="horizontal1"></div>
                <h1 className="projectTitle">{name}</h1>
                <div className="horizontal2"></div>
            </div>
        </div> 
    )
}

// function skillSection () {
//   return (
//       <div className="projectContainer">
//           <div className="project-section">
//               <div className="horizontal1"></div>
//               <h1 className="projectTitle">Skills</h1>
//               <div className="horizontal2"></div>
//           </div>
//       </div> 
//   )
// }




export default ProjectSection


// export {
//     ProjectSection,
//     skillSection,
// } 

