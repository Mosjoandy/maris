import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Topper.css";

class Topper extends Component {
    render() {
        return (
            <Container className="text-center" id="topper">
                <Row>
                    <Col>
                        <h1>Marisa Franco</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>2D Animator</h3>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Topper;