import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import SingleUser from './components/users/SingleUser';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';


import './App.css';



const App= () => {
   
    return (
        <GithubState>
            <AlertState>
            <Router>
            <div>
                <Navbar title="GitHub Finder" icon="fab fa-github mx-1" />
                {/* <UserItem /> */}
                <div className="container">
                    <Alert />
                    <Switch>
                        <Route exact path = "/home" component = {Home} />
                        <Route exact path = "/" component = {Home} />
                        <Route exact path =  "/about" component = {About} />
                        <Route exact path = '/user/:login' component = {SingleUser}/>
                        <Route component = {NotFound}/>
                    </Switch>
                </div>
            </div>
            </Router>
            </AlertState>
        </GithubState>
    )

}


export default App
