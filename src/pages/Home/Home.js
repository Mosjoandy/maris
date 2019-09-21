import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

class Home extends Component {


    render() {
       

        return (
            <Container>
                <Row>
                    <Col>
                        <Card bg="light" className="text-center">
                            My name is Marisa Franco I am a 2D animator.
                            <br />
                            I also work in in 2D Layout and Character Design.

                            <br />
                            <br />

                            <div className="homeVideoEmbed">
                                <iframe
                                    title="homeVideo"
                                    src="https://player.vimeo.com/video/336761792?title=0&byline=0&portrait=0"
                                    className="homeVideoiframe"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </Card>
                    </Col>
                </Row>

            </Container>
        );
    };
};

export default Home