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
                            
                            Video Embed here
                        </Card>
                    </Col>
                </Row>

            </Container>
        );
    };
};

export default Home