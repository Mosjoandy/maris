import React, { Component } from 'react';
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import "./Topper.css";

class Topper extends Component {
    render() {
        return (
            <Container className="text-center">
                <Row>
                    <Col>
                        <Card bg="primary">
                            Marisa Franco
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card bg="danger">
                            2D Animator
                        </Card>
                    </Col>
                </Row>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item id="nav-split">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <span id="nav-split"></span>
                    <Nav.Item>
                        <Nav.Link href="/">Animations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">Illustrations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">Contact</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Container>
        );
    };
};

export default Topper