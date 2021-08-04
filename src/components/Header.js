import React from "react";
import "./navbar.css";


const downloadBtn = {
  marginTop : "20px",
  // backgroundColor : "#a2d9ff",
  fontWeight : "bold",
  // color : "#979e97",
  border : "none",
  padding : "10px",
  borderRadius : "20px",
  cursor : "pointer",
}
// import './navbar.css';


function Header() {
  return(
    <div className="container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1C1A10" fill-opacity="1" d="M0,192L40,288L80,32L120,32L160,288L200,0L240,32L280,128L320,320L360,224L400,320L440,192L480,32L520,96L560,128L600,64L640,256L680,64L720,192L760,256L800,224L840,256L880,256L920,96L960,192L1000,288L1040,224L1080,128L1120,256L1160,192L1200,64L1240,128L1280,128L1320,128L1360,96L1400,288L1440,128L1440,0L1400,0L1360,0L1320,0L1280,0L1240,0L1200,0L1160,0L1120,0L1080,0L1040,0L1000,0L960,0L920,0L880,0L840,0L800,0L760,0L720,0L680,0L640,0L600,0L560,0L520,0L480,0L440,0L400,0L360,0L320,0L280,0L240,0L200,0L160,0L120,0L80,0L40,0L0,0Z"></path>
        </svg>        {/* <img url="https://fontmeme.com/permalink/210621/dbea7ffb87f7094ba2fd7cd996bf643b.png"></img> */}
        <header>Hamza Khan</header>
        <h3 className="title">Front End Developer</h3>
        <button className="Resume" id="fileRequest" style={downloadBtn} ><i class="fa fa-download"></i> Download My Resume</button>
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path class="svgDown" fill="#0F243E" fill-opacity="1" d="M0,192L40,288L80,32L120,32L160,288L200,0L240,32L280,128L320,320L360,224L400,320L440,192L480,32L520,96L560,128L600,64L640,256L680,64L720,192L760,256L800,224L840,256L880,256L920,96L960,192L1000,288L1040,224L1080,128L1120,256L1160,192L1200,64L1240,128L1280,128L1320,128L1360,96L1400,288L1440,128L1440,320L1400,320L1360,320L1320,320L1280,320L1240,320L1200,320L1160,320L1120,320L1080,320L1040,320L1000,320L960,320L920,320L880,320L840,320L800,320L760,320L720,320L680,320L640,320L600,320L560,320L520,320L480,320L440,320L400,320L360,320L320,320L280,320L240,320L200,320L160,320L120,320L80,320L40,320L0,320Z">
        </path></svg>
    </div>
    )
}

export {
  Header,
}