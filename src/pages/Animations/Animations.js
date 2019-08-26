import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

class Animations extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card bg="light" className="text-center">
                            Foodie Cats
                            <br />
                            I animated several shots on this project. It was animated in Adobe Animate and is the first animated short of the Junior Giant Foodiecats series to be made in 2D.

                            <br />
                            <br />

                            Video Embed here
                        </Card>
                    </Col>
                </Row>

            </Container>
        );
    };
};

export default Animations;