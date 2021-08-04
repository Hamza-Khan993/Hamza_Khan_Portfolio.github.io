// import { nonEmptyArray } from "check-types";
import React from "react";
// import Iframe from "react-iframe";
// import "./navbar.css"


const containerProjectstyles  = {
    display : "grid",
    gridTemplateColumns: "1.5fr  2fr",
    height : "auto",
    width : "auto",
    // overflow : "hidden",
    // overflowY : "hidden",
    // backgroundColor : "#636664",
    backgroundImage: "linear-gradient(to bottom,#1C1A10, #0F243E, #636664 )"
    
    
}

const projectInfo = {
    justifyContent : "center",
    justifySelf: "center",
    marginLeft : "100px",
    // alignItems : "center",
    marginTop:"45px",
    alignSelf : "center",

    // borderShadow : "0 3px 10px rgba(0,0,0,0.5)",
}




const IframeStyle = {
    overflow : "hidden",
    marginBottom : "80px"
}

const subheading = {
    marginTop : " 10px",
    fontWeight : "900",
    color : "white",
    fontSize: "20px"
}

const projectDescription = {
    marginTop:"10px",
    fontWeight : "500",
    color: "rgb(162, 217, 255)",
    fontSize: "18px",
}

const projectType = {
    // marginTop:"10px",
    fontWeight : "500",
    color: "rgb(162, 217, 255)",
    whiteSpace :"nowrap"

}

function Roscrea() {
  return(
    <div style={containerProjectstyles} className="containerProject">

        <div style={projectInfo} className="project-info">
            <h2 className="project-title">RosCrea</h2>
            <p style= {subheading} >HTML, CSS and JavaScript Project on Marketing Website </p>
            <p style={projectDescription}>
                The main objective of this project was to create a static website for Digital Marketing and SEO services,
                from which the user can get details of various services provided by the company 
                We have developed this project using the below technology <br/><br/>
                HTML: Page layout has been designed in HTML<br/>
                CSS + Bootstrap: CSS+Bootstrap has been used for all the designing part.<br/>
                JavaScript: All the validation task and animations have been developed by JavaScript Supported Operating System.
            </p>
            <p style={subheading}>Project Type :
            <strong style={projectType}> Client </strong></p> 
            
        </div>

        {/* <div style = {Vertical} className = "vertical"></div> */}

        <div style = {IframeStyle}className="iFrame">
            <div id="inner">
                <iframe className="animepage" src="/Roscrea Website/index.html"
                height="650" width="380px" seamless="seamless" style={{border:"none"}} title="Iframe Example"></iframe>
            </div>
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

export default Roscrea
