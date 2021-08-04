import React, { useState } from "react";
// import Iframe from "react-iframe";
import "./navbar.css";


const containerProjectstyles  = {
    display : "grid",
    gridTemplateColumns: "4fr 0.2fr 3fr 0.2fr  ",
    height : "auto",
    width : "auto",
    // marginTop:"100px",
    // marginRight : "100px",
    // overflow : "hidden",
    // overflowY : "hidden",
    // backgroundColor : "#636664",
    // paddingRight : "50px",
    backgroundImage: "linear-gradient(to bottom,#1C1A10, #0F243E,#636664)"


}

const projectInfo = {
    // display:"flex",
    // flexDirection : "column",
    position:"relative",
    justifyContent : "center",
    justifySelf: "center",
    marginLeft : "100px",
    // alignItems : "center",
    marginTop:"45px",
    marginBottom : "10px",
    alignSelf : "center",
    // marginRight  :"50px",
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
    // marginTop :"100px",
    borderRadius : "70px",
    marginBottom : "50px",
    position  : "relative",
    marginLeft : "auto",
    marginRight: "auto",
    marginTop:"100px",

    // maxWidth : "40rem",
    height : "90vh",
    overflowX: 'hidden',
    overflowY : "hidden",
    justifyContent:"center",
    border: "3px solid white"
}

const slidesBtn = {
    alignSelf:"center",
    // cursor : "pointer",
    // backgroundColor :"#636664",
    // marginLeft : "-20px"
}


const projectInformation = [
    {
        topic : "Weather JS",
        link : "dsddsddssds",
        tags : "JavaScript, HTML, CSS+Bootstrap",
        code : "in process",
    },
    {
        topic : "GitHub Finder",
        link : "dsddsddssds",
        tags : "JavaScript, HTML, CSS+Bootstrap",
        code : "in process",
    },
    
    
]

const ProjectsIframe = [
    {
        title : "ColorFLipper",
        src : "/Weather JS App/index.html"
    },
    {
        title : "GitHub Finder",
        src : "/GtiHub Finder/index.html",
        
    },
    
    
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

const prevButtonStyle = {
    margin : "0px 30px auto 30px",
    color : "#a2d9ff",
    background : "transparent",
    border:"none",
    cursor:"pointer"
}

const nextButtonStyle = {
    margin : "0px 30px auto 30px",
    color : "#a2d9ff",
    background : "transparent",
    border:"none",
    cursor:"pointer"

}

const iframeStyle = {
    border:"1px solid",
    // boxShadow :" ",
    
    color: "white",
    textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"
    
}



const JavaScriptApiProject = () => {

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

            <div style={projectInfo}>
                <h2 className="project-title">JavaScript API Projects</h2>
                {projectInformation.map(projects => (
                    <div style={projectInfoEach(currentIndex)} className="project-info">  
                        <h4 className="projectName">Name of Project: {projects.topic}</h4>
                        <p className="projectTags"><strong>Tags :</strong> {projects.tags}</p>
                        <p className="projectLink"><em>Project link:</em> {projects.link}</p>
                        <p className="projectSrcCode"><strong>Code :</strong> {projects.code}</p>    
                    </div>          
                ))}        
            </div>

            <div style= {slidesBtn} >
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
                <button style={prevButtonStyle} type="button" className="prev-Btn" onClick={prevButtonClick} ><i  className="fas fa-chevron-circle-left fa-5x"></i></button>
            </div>
            <div>
                <div  style = {JprojectStyles}  className="j-project-container">

                {ProjectsIframe.map(project => (
                    <div style={slideStyles(currentIndex)} className = "slide">
                        <div id="inner">
                            <iframe className="slidesframe" src={project.src}
                            height="610" width="500px"  seamless="seamless" style={iframeStyle} title={project.title}></iframe>
                        </div>
                    </div>
                ) )}  
                </div>
            </div>     
            <div style= {slidesBtn}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
                <button style={nextButtonStyle} type="button" className="next-Btn" onClick={nextButtonClick}><i className="fas fa-chevron-circle-right fa-5x"></i></button>
            </div>

            {/* <div className = "vertical"></div> */}
        
            
    
            
        </div>

            

    )
}




export default JavaScriptApiProject