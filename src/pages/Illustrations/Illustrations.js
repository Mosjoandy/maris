import React, { Component } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

class Illustrations extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xl={12} bg="danger" >
                                    <Row>
                                        <Col xl={6}>
                                            <Image fluid src={require("../../components/images/illustration1.jpg")} alt="grassyRobo" />
                                        </Col>
                                        <Col xl={6}>
                                            <h1> A Girl and her Golem</h1>
                                            <p>
                                                This project started off as a personal project I did on the side. Once I took a digital painting class geared towards visual development, I really started to develop the character designs and the story more.
                                        </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row>
                                <Col xl={12} bg="danger" >
                                    <Row>
                                        <Col xl={12}>
                                            <Image fluid src={require("../../components/images/illustration2.jpg")} alt="wavingLady" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row>
                                <Col xl={12} bg="danger" >
                                    <Row>
                                        <Col xl={12}>
                                            <Image fluid src={require("../../components/images/illustration3.jpg")} alt="gaspingLady" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row>
                                <Col xl={12} bg="danger" >
                                    <Row>
                                        <Col xl={12}>
                                            <Image fluid src={require("../../components/images/mandala.png")} alt="oceanMandala" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            {/* end here */}
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        );
    };
};

export default Illustrations;