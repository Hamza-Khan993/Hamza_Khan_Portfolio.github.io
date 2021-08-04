import React from 'react';

import Navbar from "./components/Navbar"
import {Header} from "./components/Header"
import "./components/navbar.css"
import ProjectSection  from './components/ProjectSection';
import AnimePage from './components/AnimePage';
import JavaScriptProject from './components/JavascriptProject';
import JavaScriptApiProject from './components/JavascriptApi';
import SkillSection from './components/SkillSection';
import Roscrea from './components/MarketingWebsite';
import GitHubFinderReact from './components/GitHubFinderReact';
// import ItLogger from './components/ItLogger';



function App() {
    return (
        <div>
            {/* <Navbar /> */}
            <Header />
            <ProjectSection name="Skills & Technologies" />
            <SkillSection />
            <ProjectSection name="Projects" />
            {/* <TodoApp /> */}
            <AnimePage />
            <Roscrea />
            <JavaScriptProject />
            <JavaScriptApiProject />
            <GitHubFinderReact />
        </div>
    )
}

export default App