import React, { useState } from "react";
// import Iframe from "react-iframe";
import "./navbar.css";


const containerProjectstyles  = {
    display : "grid",
    gridTemplateColumns: " 0.2fr 3fr 0.2fr 4fr",
    height : "auto",
    width : "auto",
    // marginRight : "100px",
    // overflow : "hidden",
    // overflowY : "hidden",
    // backgroundColor : "#636664",
    // paddingRight : "50px",
    backgroundImage: "linear-gradient(to bottom,#1C1A10,#0F243E, #979e97)"


}

const projectInfo = {
    // display:"flex",
    // flexDirection : "column",
    position:"relative",
    justifyContent : "center",
    justifySelf: "center",
    marginLeft : "50px",
    // alignItems : "center",
    marginTop:"45px",
    marginBottom : "100px",
    alignSelf : "center",
    marginRight  :"100px",
    height : "50vh",
    overflowY: "hidden",
    overflowX : "hidden",
    // transform : translateY()
    // borderShadow : "0 3px 10px rgba(0,0,0,0.5)",
}

// const projectInfoEach = (index) => ({
//     // position : "absolute",
//     height : "100%",
//     width : "100%",
//     justifyContent : "center",
//     // transform: `translateY(-${index * 100}%)`,
// })

const projectInfoEach = (index) => ({
    // position : "absolute",
    height : "100%",
    width : "100%",
    justifyContent : "center",
    transition : "all 0.25s ease-in-out",
    transform: `translateY(-${index * 103}%)`,
    nthChild : {
        Left : `${index * 100}%`,
    }
})

const JprojectStyles = {
    justifySelf:"center",
    // marginLeft : "70px",
    marginTop :"100px",
    borderRadius : "70px",
    marginBottom : "50px",
    position  : "relative",
    marginLeft : "auto",
    marginRight: "auto",
    // maxWidth : "40rem",
    height : "102vh",
    overflowX: 'hidden',
    overflowY : "hidden",
    justifyContent:"center"
}

const slidesBtn = {
    alignSelf:"center",
    // cursor : "pointer",
    justifySelf:"center",
    // width : "100%"
    // backgroundColor :"rgba(129,134,129, 0.3)",
    // marginLeft : "-20px"
}

const projectInformation = [
    {
        topic : "Counter",
        link : "dsddsddssds",
        tags : "JavaScript, HTML, CSS",
        code : "in process",
    },
    {
        topic : "ColorFLipper",
        link : "dsddsddssds",
        tags : "JavaScript, HTML, CSS",
        code : "in process",
    },
    {
        topic : "Reviews",
        link : "assssssssss",
        tags : "JavaScript, HTML, CSS",
        code : "in process",
    },
    {
        topic : "Tasks",
        link : "dsddsddssds",
        tags : "JavaScript, HTML, CSS Materialize",
        code : "in process",
    },
    {
        topic : "Loan Calculator",
        link : "dsddsddssds",
        tags : "JavaScript, HTML, CSS Bootstrap",
        code : "in process",
    },
    {
        topic : "BookList App",
        link : "",
        tags : "JavaScript OOP, HTML, CSS Skeleton",
        code : "in process",
    },
]

const ProjectsIframe = [
    {
        title : "Counter",
        src : "/Counter/index.html",
        
    },
    {
        title : "ColorFLipper",
        src : "/ColorFlipper/index.html"
    },
    {
        title : "Reviews",
        src : "/Reviews/index.html"
    },
    {
        title : "Tasks",
        src : "/Task Project/index.html"
    },
    {
        title : "Loan Calculator",
        src : "/Loan Calculator/index.html"
    },
    {
        title : "BookList App",
        src : "/BookList App/index.html"
    }
]

const slideStyles = (index) => ({
    // position: "absolute",
    width : "100%",
    height : "100%",
    // placeItems : "center",
    // textAlign : "center",
    justifyContent:"center",
    justifySelf:"center",
    textAlign : "center",
    alignSelf : "center",
    // sliding = () => {},
    // :nth-child().left : `${index * 100}%`,
    
    transition : "all 0.25s ease-in",
    transform: `translateY(-${index * 100}%)`,

    
    // overflowY : "hidden",
})

const prevButton = {
    color : "#a2d9ff",
    border: "none",
    cursor : 'pointer',
    background : "transparent",
    marginLeft : "100px"
}

const nextButton = {
    color : "#a2d9ff",
    border: "none",
    cursor : 'pointer',
    background : "transparent",
    marginRight : "100px"
}





function JavaScriptProject() {

    // const slides = document.querySelectorAll(".slide")
    // slides.forEach(function(slide, index){
    //     slide.style.left = `${index * 100}%`;
    // })

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevButtonClick = () => setCurrentIndex(currentIndex <= 0 ? ProjectsIframe.length - 1 : currentIndex - 1)
    const nextButtonClick = () => setCurrentIndex(currentIndex >= ProjectsIframe.length - 1 ? 0 : currentIndex + 1) 
    
    // if (currentIndex > )
    return(
        <div style={containerProjectstyles} className="containerProject">
            
    
            {/* <div className = "vertical"></div> */}

            <div style= {slidesBtn} >
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
                <button style={prevButton}type="button" className="prev-Btn" onClick={prevButtonClick} ><i  className="fas fa-chevron-circle-left fa-5x"></i></button>
            </div>
            <div>
                <div  style = {JprojectStyles}  className="j-project-container">

                {ProjectsIframe.map(project => (
                    <div style={slideStyles(currentIndex)} className = "slide">
                        <div id="inner">
                            <iframe className="slidesframe" src={project.src}
                            height="620" width="350px" seamless="seamless" style={{border:"1px solid"}} title={project.title}></iframe>
                        </div>
                    </div>
                ) )}  
                </div>
            </div>     
            <div style= {slidesBtn}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
                <button style={nextButton} type="button" className="next-Btn" onClick={nextButtonClick}><i className="fas fa-chevron-circle-right fa-5x"></i></button>
            </div>

            <div style={projectInfo}>
                <h2 className="project-title">JavaScript DOM Projects</h2>
                {projectInformation.map(projects => (
                    <div style={projectInfoEach(currentIndex)} className="project-info">  
                        <h4 className="projectName">Name of Project: {projects.topic}</h4>
                        <p className="projectTags"><strong>Tags :</strong> {projects.tags}</p>
                        <p className="projectLink"><em>Project link:</em> {projects.link}</p>
                        <p className="projectSrcCode"><strong>Code :</strong> {projects.code}</p>    
                    </div>          
                ))}        
            </div>
        </div>

    )
}




export default JavaScriptProject