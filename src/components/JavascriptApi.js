import React, { useState } from "react";
import "./navbar.css";


const containerProjectstyles = {
    display: "grid",
    gridTemplateColumns: "4fr 0.2fr 3fr 0.2fr  ",
    height: "750px",
    width: "auto",
    backgroundImage: "linear-gradient(to bottom,#1C1A10, #0F243E,#636664)"
}

const projectInfo = {
    position: "relative",
    justifyContent: "center",
    justifySelf: "center",
    marginLeft: "100px",
    marginTop: "45px",
    marginBottom: "10px",
    alignSelf: "center",
    height: "50vh",
    overflowY: "hidden",
    overflowX: "hidden",
    color: "white",
}

const projectInfoEach = (index) => ({
    height: "100%",
    width: "100%",
    justifyContent: "center",
    transition: "all 0.25s ease-in-out",
    transform: `translateY(-${index * 103}%)`,
    nthChild: {
        Left: `${index * 100}%`,
    }
})

const JprojectStyles = {
    justifySelf: "center",
    marginBottom: "50px",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
    height: "92vh",
    overflowX: 'hidden',
    overflowY: "hidden",
    justifyContent: "center",
    // boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
}

const projectInformation = [
    {
        id: 1,
        topic: "Weather JS",
        link: "dsddsddssds",
        tags: "JavaScript, HTML, CSS+Bootstrap",
        code: "in process",
    },
    {
        id: 2,
        topic: "GitHub Finder",
        link: "dsddsddssds",
        tags: "JavaScript, HTML, CSS+Bootstrap",
        code: "in process",
    },
]

const ProjectsIframe = [
    {
        id: 1,
        title: "ColorFLipper",
        src: "/Weather JS App/index.html"
    },
    {
        id: 2,
        title: "GitHub Finder",
        src: "/GtiHub Finder/index.html",

    }
]

const slideStyles = (index) => ({
    width: "100%",
    height: "100%",
    justifyContent: "center",
    justifySelf: "center",
    textAlign: "center",
    alignSelf: "center",
    transition: "all 0.25s ease-in",
    transform: `translateY(-${index * 100}%)`,
})

const prevButtonStyle = {
    color: "#a2d9ff",
    background: "transparent",
    border: "none",
    cursor: "pointer"
}

const nextButtonStyle = {
    color: "#a2d9ff",
    background: "transparent",
    border: "none",
    cursor: "pointer"

}

const iframeStyle = {
    borderRadius: "70px",
    color: "white",
    textsShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"

}

const JavaScriptApiProject = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevButtonClick = () => setCurrentIndex(currentIndex <= 0 ? ProjectsIframe.length - 1 : currentIndex - 1)
    const nextButtonClick = () => setCurrentIndex(currentIndex >= ProjectsIframe.length - 1 ? 0 : currentIndex + 1)
    return (
        <div style={containerProjectstyles} className="containerProject">

            <div style={projectInfo}>
                <h2 className="project-title">JavaScript API Projects</h2>
                {projectInformation.map(projects => (
                    <div key={projects.id} style={projectInfoEach(currentIndex)} className="project-info">
                        <h2 className="projectName">Name of Project: {projects.topic}</h2>
                        <h2 style={{ color: "red" }} className="projectTags"><strong></strong> {projects.tags}</h2>
                    </div>
                ))}
            </div>

            <div className="slide-btn" style={{ alignSelf: "center", margin: "0px 30px 0px 30px" }} >
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
                <button style={prevButtonStyle} type="button" className="prev-Btn" onClick={prevButtonClick} ><i className="fas fa-chevron-circle-left fa-5x"></i></button>
            </div>
            <div>
                <div style={JprojectStyles} className="j-projectapi-container">

                    {ProjectsIframe.map(project => (
                        <div key={project.id} style={slideStyles(currentIndex)} className="slide">
                            <div id="inner">
                                <iframe src={project.src}
                                    height="580" width="500px" seamless="seamless" style={iframeStyle} title={project.title}></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="slide-btn" style={{ alignSelf: "center", margin: "0px 30px 0px 30px" }}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
                <button style={nextButtonStyle} type="button" className="next-Btn" onClick={nextButtonClick}><i className="fas fa-chevron-circle-right fa-5x"></i></button>
            </div>

        </div>
    )
}

export default JavaScriptApiProject