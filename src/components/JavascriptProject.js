import React, { useState } from "react";
import "./navbar.css";


const containerProjectstyles = {
    display: "grid",
    gridTemplateColumns: " 0.2fr 3fr 0.2fr 4fr",
    height: "800px",
    width: "auto",
    backgroundImage: "linear-gradient(to bottom,#1C1A10,#0F243E, #979e97)"


}

const projectInfo = {
    position: "relative",
    justifyContent: "center",
    justifySelf: "center",
    marginLeft: "50px",
    marginTop: "45px",
    marginBottom: "50px",
    alignSelf: "center",
    marginRight: "100px",
    height: "50vh",
    overflowY: "hidden",
    overflowX: "hidden",
    color: "white"
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
    marginTop: "100px",
    marginBottom: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    height: "93vh",
    overflowX: 'hidden',
    overflowY: "hidden",
    justifyContent: "center"
}

const projectInformation = [
    {
        id: 1,
        topic: "Counter",
        link: "dsddsddssds",
        tags: "JavaScript, HTML, CSS",
        code: "in process",
    },
    {
        id: 2,
        topic: "ColorFLipper",
        link: "dsddsddssds",
        tags: "JavaScript, HTML, CSS",
        code: "in process",
    },
    {
        id: 3,
        topic: "Reviews",
        link: "assssssssss",
        tags: "JavaScript, HTML, CSS",
        code: "in process",
    },
    {
        id: 4,
        topic: "Tasks",
        link: "dsddsddssds",
        tags: "JavaScript, HTML, CSS Materialize",
        code: "in process",
    },
    {
        id: 5,
        topic: "Loan Calculator",
        link: "dsddsddssds",
        tags: "JavaScript, HTML, CSS Bootstrap",
        code: "in process",
    },
    {
        id: 6,
        topic: "BookList App",
        link: "",
        tags: "JavaScript OOP, HTML, CSS Skeleton",
        code: "in process",
    },
]

const ProjectsIframe = [
    {
        id: 1,
        title: "Counter",
        src: "/Counter/index.html",

    },
    {
        id: 2,
        title: "ColorFLipper",
        src: "/ColorFlipper/index.html"
    },
    {
        id: 3,
        title: "Reviews",
        src: "/Reviews/index.html"
    },
    {
        id: 4,
        title: "Tasks",
        src: "/Task Project/index.html"
    },
    {
        id: 5,
        title: "Loan Calculator",
        src: "/Loan Calculator/index.html"
    },
    {
        id: 6,
        title: "BookList App",
        src: "/BookList App/index.html"
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

const prevButton = {
    color: "#a2d9ff",
    border: "none",
    cursor: 'pointer',
    background: "transparent",
    marginLeft: "100px",
    alignSelf: "center",
    justifySelf: "center"

}

const nextButton = {
    color: "#a2d9ff",
    border: "none",
    cursor: 'pointer',
    background: "transparent",

}





function JavaScriptProject() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevButtonClick = () => setCurrentIndex(currentIndex <= 0 ? ProjectsIframe.length - 1 : currentIndex - 1)
    const nextButtonClick = () => setCurrentIndex(currentIndex >= ProjectsIframe.length - 1 ? 0 : currentIndex + 1)

    return (
        <div style={containerProjectstyles} className="containerProject">



            <div style={{ alignSelf: "center" }} >
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
                <button style={prevButton} type="button" className="prev-Btn" onClick={prevButtonClick} ><i className="slide-btn fas fa-chevron-circle-left fa-5x"></i></button>
            </div>
            <div>
                <div style={JprojectStyles} >

                    {ProjectsIframe.map(project => (
                        <div key={project.id} style={slideStyles(currentIndex)} className="slide" >
                            <div id="inner">
                                <iframe src={project.src}
                                    height="620" width="350px" seamless="seamless" style={{ border: "1px solid", borderRadius: "70px" }} title={project.title}></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="slide-btn" style={{ alignSelf: "center", marginRight: "50px" }}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
                <button style={nextButton} type="button" className="next-Btn" onClick={nextButtonClick}><i className="fas fa-chevron-circle-right fa-5x"></i></button>
            </div>

            <div style={projectInfo}>
                <h2 className="project-title">JavaScript DOM Projects</h2>
                {projectInformation.map(projects => (
                    <div style={projectInfoEach(currentIndex)} className="project-info" key={projects.id}>
                        <h2 className="projectName">Name of Project: {projects.topic}</h2>
                        <h2 style={{ color: "red" }} className="projectTags"><strong></strong> {projects.tags}</h2>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default JavaScriptProject