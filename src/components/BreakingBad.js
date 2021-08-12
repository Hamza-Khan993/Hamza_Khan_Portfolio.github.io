import React from "react";
import "./navbar.css"


const containerProjectstyles = {
    display: "flex",
    // gridTemplateColumns: "1.5fr 2fr ",
    // height: "auto",
    // width: "auto",
    backgroundImage: "linear-gradient(to bottom,#1C1A10, #0F243E, #979e97 )",
    alignItems: "center",
    // alignSelf: "center",
    // alignContents: "center",
    justifyContent: "space-between",
    padding: "100px"

}

const projectInfo = {
    flexGrow: 0.5,
    margin: "0px 120px",
}

const subheading = {
    marginTop: " 10px",
    fontWeight: "900",
    color: "white",
    fontSize: "20px"
}

const projectDescription = {
    marginTop: "15px",
    fontWeight: "500",
    color: "rgb(202, 131, 190)",
    fontSize: "20px",
}


const projectType = {
    fontWeight: "500",
    color: "rgb(162, 217, 255)",
    whiteSpace: "nowrap"
}

function BreakingBad() {
    return (
        <div style={containerProjectstyles} className="containerProject">
            <div style={projectInfo} className="project-info">
                <h2 className="project-title">Breaking Bad React App</h2>
                <p style={subheading}>React API app for Breaking Bad Characters</p>
                <p style={projectDescription}>The main objective of this project is to use open source Breaking Bad Api and fetch Breaking Bad Characters Information and Quotes using axios and render them in UI. This project was built using functional components where Hooks like useState() and useEffect() were used and high order functions to provide features like filter and seacrch bar. The Quotes were generated using a different API and they are rendered for each character using Modal from Material-UI.</p>
                <br />
                <p style={{ color: "red", fontSize: "20px" }}>Following Technologies were used:</p>
                <br />
                <p style={{ color: "red", fontSize: "20px" }}>
                    <strong style={subheading}>JSX:</strong> Page layout has been designed in JSX <br />
                    <strong style={subheading}>CSS: </strong> CSS+Bootstrap and Material-UI has been used for all the designing parts.<br />
                    <strong style={subheading}>React Fundamentals </strong>(Components, props, state, etc)<br />
                    <strong style={subheading}>React Hooks</strong> (useState, useEffect) <br />
                </p>
                <p style={subheading}>Project Type: <strong style={projectType}>Personal</strong></p>
            </div>

            <div >
                <div id="inner">
                    <iframe style={{ borderRadius: "5px", border: "10px solid #095a2d", }} src="https://breaking-bad-react-hamza-khan.netlify.app/"
                        height="700" width="460px" seamless="seamless" title="Iframe Example"></iframe>
                </div>
            </div>


        </div>)
}

export default BreakingBad
