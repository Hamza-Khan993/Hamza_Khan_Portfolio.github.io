// import { nonEmptyArray } from "check-types";
import React from "react";
// import Iframe from "react-iframe";
import "./navbar.css"


const containerProjectstyles  = {
    display : "grid",
    gridTemplateColumns: "2fr 1.5fr",
    height : "auto",
    width : "auto",
    // overflow : "hidden",
    // overflowY : "hidden",
    // backgroundColor : "#636664",
    backgroundImage: "linear-gradient(to bottom,#1C1A10, #0F243E, #979e97 )"
}

const projectInfo = {
    justifyContent : "center",
    justifySelf: "center",
    marginLeft : "0px",
    // alignItems : "center",
    marginTop:"45px",
    alignSelf : "center",
    marginRight : '100px'
    // borderShadow : "0 3px 10px rgba(0,0,0,0.5)",
}

const subheading = {
    marginTop : " 10px",
    fontWeight : "900",
    color : "white",
    fontSize: "20px"
}

const projectDescription = {
    marginTop:"15px",
    fontWeight : "500",
    color: "rgb(162, 217, 255)",
    fontSize: "20px",
}

const projectType = {
    // marginTop:"10px",
    fontWeight : "500",
    color: "rgb(162, 217, 255)",
    whiteSpace :"nowrap"
}

function AnimePage() {
  return(
    <div style={containerProjectstyles} className="containerProject">
        <div className="iFrame">
            <div id="inner">
                <iframe className="animepage" src="/Animetry/trypage.html"
                height="650" width="380px" seamless="seamless" style={{border:"none"}} title="Iframe Example"></iframe>
            </div>
        </div>

        {/* <div className = "vertical"></div> */}

        <div style={projectInfo} className="project-info">
            <h2 className="project-title">AnimeFlix</h2>
            <p style={subheading}>Website with Netflix like UI.</p>
            <p style={projectDescription}>The main objective of this project is to create a UI like Netflix for Anime. 
                The website is still in process. But soon you'll be able to watch anime on AnimeFlix.
                We have developed this project using the below technology.
                HTML: Page layout has been designed in HTML
                CSS : CSS has been used for all the designing parts.
                JavaScript: All the validation task and animations have been developed by 
                JavaScript Supported Operating System.</p>
            <p style={subheading}>Project Type: <strong style={projectType}>Personal</strong></p>
        </div>

    </div>)
}

// function ProjectSection () {
//     return (
//         <div className="projectContainer">
//             <div className="project-section">
//                 <div className="horizontal1"></div>
//                 <h1 className="projectTitle">Projects</h1>
//                 <div className="horizontal2"></div>
//             </div>
//         </div> 
//     )
// }

export default AnimePage
