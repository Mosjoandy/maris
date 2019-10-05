import React, { Component } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import "./Illustrations.css";

class Illustrations extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xl={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xl={12}>
                                        <Row>
                                            <Col xl={6}>
                                                <Image fluid src={require("../../components/images/illustration1.jpg")} alt="grassyRobo" />
                                            </Col>
                                            <Col xl={6}>

                                                <h1 style={{ margin: "0 0 20px 0" }}><b>A Girl and her Golem</b></h1>

                                                <p id="illustrationBody">
                                                    This project started off as a personal project I did on the side. Once I took a digital painting class geared towards visual development, I really started to develop the character designs and the story more.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <div style={{ margin: "25px 0 25px 0" }}></div>
                                <Row>
                                    <Col xl={12}>
                                        <Row>
                                            <Col xl={12}>
                                                <Image fluid src={require("../../components/images/illustration2.jpg")} alt="wavingLady" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <div style={{ margin: "25px 0 25px 0" }}></div>
                                <Row>
                                    <Col xl={12}>
                                        <Row>
                                            <Col xl={12}>
                                                <Image fluid src={require("../../components/images/illustration3.jpg")} alt="gaspingLady" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <div style={{ margin: "25px 0 25px 0", borderBottom: "5px dashed #CAE9BD" }}></div>
                                {/* <Row>
                                    <Col xl={12}>
                                        <Row>
                                            <Col xl={12}>
                                                <h1><b>Deep Sea Dance</b></h1>
                                                <p>I made this mandala at the end of my color fundamentals class during my time at college. A lot of movies that I was watching at the time were sea themed, so i decided to take that as inspiration for my assignment.</p>
                                                <Image fluid src={require("../../components/images/mandala.png")} alt="oceanMandala" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row> */}
                                {/* end here */}

                                <Col xl={12}>
                                    <Row>
                                        <Col xl={4}>
                                            <h1 style={{ margin: "0 0 20px 0" }}><b>Deep Sea Dance</b></h1>
                                            <p id="illustrationBody">
                                                I made this mandala at the end of my color fundamentals class during my time at college. A lot of movies that I was watching at the time were sea themed, so I decided to take that as inspiration for my assignment.
                                            </p>
                                        </Col>
                                        <Col xl={8}>
                                            <Image fluid src={require("../../components/images/mandala.png")} alt="oceanMandala" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Illustrations;