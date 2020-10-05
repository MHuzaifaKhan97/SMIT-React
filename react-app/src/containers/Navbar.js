import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li><Link to='/' className="nav-item" >Home</Link></li>
                    <li><Link to='/about' className="nav-item" >About</Link></li>
                    <li><Link to='/contact' className="nav-item" >Contact</Link></li>
                </ul>
            </nav>
        )
    }
}
