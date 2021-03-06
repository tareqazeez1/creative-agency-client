import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
            <img className="logoImg" src={logo} alt="" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <p className="nav-link" >Home <span className="sr-only">(current)</span></p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" >Our Portfolio</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link">Our Team</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link">Contact Us</p>
                    </li>
                    <li className="nav-item">
                        {/* <Link to="/login">
                            {
                                loggedInUser.email ? <button className="nav-link btn btn-dark text-white btnLogin">{loggedInUser.name} </button>
                                    :
                                    <button className="nav-link btn btn-dark text-white btnLogin"> log in </button>
                            }
                        </Link> */}
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    );
};

export default Header;