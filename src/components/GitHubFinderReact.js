import React from "react";
import "./navbar.css"


const containerProjectstyles = {
    display: "grid",
    gridTemplateColumns: "2fr 1.5fr",
    height: "auto",
    width: "auto",
    backgroundImage: "linear-gradient(to bottom,#1C1A10, #0F243E, #979e97 )",
    alignItems: "center",
    alignSelf: "center",
    alignContents: "center"

}

const projectInfo = {
    justifyContent: "center",
    justifySelf: "center",
    marginLeft: "0px",
    marginTop: "45px",
    alignSelf: "center",
    marginRight: '100px',
    marginBottom: " 100px"
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

function GitHubFinderReact() {
    return (
        <div style={containerProjectstyles} className="containerProject">
            <div style={{ marginBottom: "150px" }} className="iFrame">
                <div id="inner">
                    <iframe className="animepage" src="https://github-finder-react-app-9856595.netlify.app"
                        height="600" width="580px" seamless="seamless" style={{ border: "none" }} title="Iframe Example"></iframe>
                </div>
            </div>


            <div style={projectInfo} className="project-info">
                <h2 className="project-title">Github Finder React App</h2>
                <p style={subheading}>React App to search Github Users</p>
                <p style={projectDescription}>The main objective of this project is to use open source Github Api and fetch Github users, Individual User Info and their latest repos using axios and show them in UI. This project was first built using class based components, then it was refactored to funcional component where Hooks like useState() and useEffect() were used and finally the project was refactored using Context Api and Hooks like useContext() and useReducer() and deployed to Netlify.</p>
                <br />
                <p style={{ color: "red", fontSize: "20px" }}>Following Technologies were used:</p>
                <br />
                <p style={{ color: "red", fontSize: "20px" }}>
                    <strong style={subheading}>JSX:</strong> Page layout has been designed in JSX <br />
                    <strong style={subheading}>CSS: </strong> CSS has been used for all the designing parts.<br />
                    <strong style={subheading}>React Fundamentals </strong>(Components, props, state, etc)<br />
                    <strong style={subheading}>React Hooks</strong> (useState, useEffect, useContext, useReducer) <br />

                    <strong style={subheading}>Context API and App Level State</strong>  </p>
                <p style={subheading}>Project Type: <strong style={projectType}>Personal</strong></p>
            </div>

        </div>)
}

export default GitHubFinderReact
