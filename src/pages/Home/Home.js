import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Home.css";
class Home extends Component {

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xl={12}>
                        <Card className="text-center">
                            <Card.Body id="homeBody">
                                My name is Marisa Franco I am a 2D animator.
                                <br />
                                I also work in 2D Layout and Character Design.
                                <iframe
                                    className="iFrameAnimations"
                                    id="homeiFrame"
                                    title="homeVideo"
                                    src="https://player.vimeo.com/video/336761792?title=0&muted=1&autoplay=0&loop=0"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen">
                                </iframe>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Home