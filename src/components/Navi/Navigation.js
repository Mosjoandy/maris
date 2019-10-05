import React, { Component } from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends Component {
    render() {
        return (
            <Container>
                <Navbar collapseOnSelect expand="lg" className="navigationText" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                        <Nav activeKey="/home">
                            <Nav.Item id="nav-split">
                                <Link to="/" id="navButtons" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                    HOME
                                </Link>
                            </Nav.Item>


                            {/* Add drop down here */}
                            <NavDropdown title="ANIMATIONS" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/animations">ANIMATIONS
                                    {/* <Link to="/animations" id="navButtons" className={window.location.pathname === "/animations" ? "nav-link active" : "nav-link"}>
                                        Animations
                                    </Link> */}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/FoodieCats">FOODIECATS
                                    {/* <Link to="/animations" id="navButtons" className={window.location.pathname === "/animations" ? "nav-link active" : "nav-link"}>
                                        Animations
                                    </Link> */}
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Item>
                                <Link to="/illustrations" id="navButtonsIllustrations" className={window.location.pathname === "/illustrations" ? "nav-link active" : "nav-link"}>
                                    ILLUSTRATIONS
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link to="/about" id="navButtons" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                                    ABOUT
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                                    CONTACT
                                </Link>
                            </Nav.Item>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    };
};

export default Navigation;