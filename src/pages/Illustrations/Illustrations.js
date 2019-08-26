import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

class Illustrations extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card bg="danger" className="text-center">
                            Insert picture here
                        </Card>
                    </Col>

                    <Col>
                        <Card bg="success" className="text-left">
                            A Girl and her Golem
    This project started off as a personal project I did on the side. Once I took a digital painting class geared towards visual development, I really started to develop the character designs and the story more.
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            More pictures to put in1
        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            More pictures to put in2
        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            More pictures to put in3    
        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            More pictures to put in4
        </Card>
                    </Col>
                </Row>

            </Container>
        );
    };
};

export default Illustrations;