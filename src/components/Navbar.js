import React from "react";
// import '/index.css';
// import './navbar.css';


function Navbar() {
  return(
    <div>
      <nav className="navbar">
        <ul>
           <a href="#!"><li>Profile</li></a>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>)
}

export default Navbar