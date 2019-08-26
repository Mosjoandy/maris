import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (

            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item id="nav-split">
                    <Link to="/" id="navButtons" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    {/* Add drop down here */}
                    <Link to="/animations" id="navButtons" className={window.location.pathname === "/animations" ? "nav-link active" : "nav-link"}>
                        Animations
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to="/illustrations" id="navButtons" className={window.location.pathname === "/illustrations" ? "nav-link active" : "nav-link"}>
                        Illustrations
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to="/about" id="navButtons" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        About
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to="/contact" id="navButtons" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact
                    </Link>
                </Nav.Item>

            </Nav>

        );
    };
};

export default Navigation;