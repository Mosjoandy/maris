import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./Topper.css";

class Topper extends Component {
    render() {
        return (
            <Container className="text-center">
                <Row>
                    <Col>
                        <h1>Marisa Franco</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Animator</h1>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Topper;