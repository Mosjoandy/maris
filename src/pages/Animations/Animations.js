import React, { Component } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import "./Animations.css";

class Animations extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xl={12}>
                        <Card className="text-center">
                            <Card.Header id="animationsHeader">
                                <h1><b>Personal Works</b></h1>
                            </Card.Header>
                            <Card.Body>

                                <iframe
                                    className="iFrameAnimations"
                                    title="animations3"
                                    src="https://player.vimeo.com/video/364667467?title=0?dnt=1"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen">
                                </iframe>

                                <div style={{ margin: "25px 0 25px 0" }}></div>

                                <Image width="100%" height="100%" fluid src={require("../../components/images/gastlySurprise.gif")} alt="pokemonGastly" />


                                <div style={{ margin: "25px 0 25px 0" }}></div>

                                <iframe
                                    className="iFrameAnimations"
                                    title="animations1"
                                    src="https://www.youtube-nocookie.com/embed/U-prfwYh6Ik?controls=0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                                </iframe>

                                <div style={{ margin: "25px 0 25px 0" }}></div>

                                <iframe
                                    className="iFrameAnimations"
                                    title="animations2"
                                    src="https://www.youtube-nocookie.com/embed/LwM8N8LDtIw?controls=0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                                </iframe>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Animations;