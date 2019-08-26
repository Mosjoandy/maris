import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card bg="danger" className="text-center">
                            Contact form here
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Contact;