import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

class Contact extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log("Name: " + this.state.name);
        console.log("Email: " + this.state.email);
        console.log("Subject: " + this.state.subject);
        console.log("Message: " + this.state.message);

        // const contact = firebase.database().ref("contact");
        // const info = {
        //     name: this.state.name,
        //     email: this.state.email,
        //     subject: this.state.subject,
        //     message: this.state.message,
        // };
        // contact.push(info);

        this.setState({ submitted: true });
        event.target.reset();
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col xl={4}>
                        <Card>
                            Email: m.anjelica.f@gmail.com
                    </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            Phone Number: 209-623-8738
                    </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            Address:<br />
                            3460 Carter Dr. Unit 205<br />
                            South San Francisco, CA<br />
                            94080<br />
                        </Card>
                    </Col>
                </Row>

                <Row>
                    {!this.state.submitted ?
                        (
                            <Col>
                                <Row>
                                    <Col>
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Row>
                                                <Col xl={6}>
                                                    <Form.Control
                                                        placeholder="First name"
                                                        type="name"
                                                        name="name"
                                                        onChange={this.handleChange}
                                                        required />
                                                    <Form.Control
                                                        placeholder="Email"
                                                        type="email"
                                                        name="email"
                                                        onChange={this.handleChange}
                                                        required />
                                                    <Form.Control
                                                        placeholder="Subject"
                                                        type="subject"
                                                        name="subject"
                                                        onChange={this.handleChange}
                                                        required />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Control
                                                        placeholder="Message"
                                                        as="textarea"
                                                        rows="4"
                                                        type="message"
                                                        name="message"
                                                        onChange={this.handleChange}
                                                        required />
                                                </Col>
                                            </Form.Row>
                                            <Button variant="success" type="submit" value="Submit" className="float-right">
                                                Send
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Col>

                        )
                        :
                        (
                            <Col>
                                <Card bg="primary" className="text-center">
                                    <p>
                                      Message Received
                                    </p>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        );
    };
};

export default Contact;