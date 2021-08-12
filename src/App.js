import React from 'react';

import { Header } from "./components/Header"
import "./components/navbar.css"
import ProjectSection from './components/ProjectSection';
import AnimePage from './components/AnimePage';
import JavaScriptProject from './components/JavascriptProject';
import JavaScriptApiProject from './components/JavascriptApi';
import SkillSection from './components/SkillSection';
import Roscrea from './components/MarketingWebsite';
import GitHubFinderReact from './components/GitHubFinderReact';
import BreakingBad from './components/BreakingBad';


function App() {
    return (
        <div>
            <Header />
            <ProjectSection name="Skills & Technologies" />
            <SkillSection />
            <ProjectSection name="Projects" />
            <AnimePage />
            <Roscrea />
            <JavaScriptProject />
            <JavaScriptApiProject />
            <GitHubFinderReact />
            <BreakingBad />
        </div>
    )
}

export default App