import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

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

                                        <iframe
                                            width="100%"
                                            height="500"
                                            src="https://www.youtube-nocookie.com/embed/U-prfwYh6Ik?controls=0"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>

                                        <br />
                                        <br />

                                        <iframe width="100%"
                                            height="500"
                                            src="https://www.youtube-nocookie.com/embed/LwM8N8LDtIw?controls=0"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
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