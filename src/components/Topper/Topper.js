import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
            </Container>
        );
    };
};

export default Topper;