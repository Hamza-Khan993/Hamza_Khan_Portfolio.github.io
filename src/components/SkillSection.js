// import { functionTypeAnnotation } from "@babel/types"
import React from "react"
import "./navbar.css"

const skillsContainer = {
    display :"grid",
    gridTemplateColumns :"2fr 2fr 2fr",
    gridTemplateRows : "1fr 1fr",
    // margin : "60px",
    justifyContent:"center",
    textAlign  :"center",
    // marginTop:"100px",
    // marginTop:"100px",
    backgroundImage: "linear-gradient(to bottom,#1C1A10, #0F243E )"

    // gap : "-50px",
    // gridTemplateColumns: "0.2fr 3fr 0.2fr 1fr 4fr",
    // backgroundColor : "#636664",
    // background: "transparent"

}

const skillIcons =  {
    // width : "200px",
    height : "200px",
    // backgroundColor : "#636664",
    marginBottom : "0px",
    marginTop : "50px",
    // background: "transparent",
    // border : "0.5px solid white",
    padding : "10px",
    borderRadius : "10px",
    // border : "1px solid"
}

// const htmlIcon = {
//     margin : "0px"
// }

const Skills = [ 
    {
        images : "/images/html.png",
        name : "HTML"
    },
    {
        images : "/images/css.png",
        name : "CSS"
    },
    {
        images : "/images/javascript.png",
        name : "JavaScript"
    },
    {
        images : "/images/logo192.png",
        name : "React"
    },
    {
        images : "/images/python.png",
        name : "Python"
    }
]


function SkillSection() {
    return (
        <div style={skillsContainer}>
            {Skills.map(skill => (
                <div >
                <img style={skillIcons} alt="" src={skill.images}/>
                <h3>{skill.name}</h3>
            </div>

            ))}
        </div> 
    )
}

// function SkillSection () {
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




export default SkillSection

// export {
//     ProjectSection,
//     SkillSection,
// } 

