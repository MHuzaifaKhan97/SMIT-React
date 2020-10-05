import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Product } from './pages/Product';
import { ContactUs } from './pages/ContactUs';
import { SignUp } from './pages/SignUp';
import { Marketing } from './pages/Marketing';
import {Consulting} from './pages/Consulting';
import { Development } from './pages/Development';
import { Design } from './pages/Design';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/marketing" component={Marketing} />
        <Route exact path="/consulting" component={Consulting} />
        <Route exact path="/design" component={Design} />
        <Route exact path="/Development" component={Development} />
      </Switch>


    </Router>
  );
}

export default App;
