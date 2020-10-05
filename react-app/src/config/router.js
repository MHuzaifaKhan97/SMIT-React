import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import Home from '../containers/Home';
import About from '../containers/About';
import Contact from '../containers/Contact';

import Navbar from '../containers/Navbar';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route path="*" component={() => <h1>404 Not Found</h1>} />
                </Switch>
            </Router>
        )
    }
}

export default AppRouter