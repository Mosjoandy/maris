import React, { Component } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import "./Animations.css";

class Animations extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xl={8}>
                        <Card bg="light" className="text-center">
                            <Card.Header>
                                <h1>Animations</h1>
                            </Card.Header>
                            <Card.Body>

                                <Image width="100%" height="100%" fluid src={require("../../components/images/gastlySurprise.gif")} alt="pokemonGastly" />

                                <br />
                                <br />

                                <iframe
                                className="iFrameAnimations"
                                    // width="100%"
                                    // height="500"
                                    title="animations1"
                                    src="https://www.youtube-nocookie.com/embed/U-prfwYh6Ik?controls=0"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                                </iframe>

                                <br />
                                <br />

                                <iframe 
                                    className="iFrameAnimations"
                                    title="animations2"
                                    src="https://www.youtube-nocookie.com/embed/LwM8N8LDtIw?controls=0"
                                    frameborder="0"
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