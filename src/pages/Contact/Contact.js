import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Form, Image } from 'react-bootstrap';
import firebase from '../../utils/firebase';
import "./Contact.css";

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

        const contact = firebase.database().ref("contact");
        const info = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
        };
        contact.push(info);

        this.setState({ submitted: true });
        event.target.reset();
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col xl={12}>
                        <Card>
                            <Card.Header className="text-center" id="contactBG">
                                <h1><b>Contact</b></h1>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <a href="https://twitter.com/risas_art" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        style={{ width: "50px", height: "50px", marginRight: "10px" }}
                                        fluid
                                        src={require("../../components/images/twitter.png")}
                                        alt="twitIco"
                                    />
                                </a>
                                <a href="https://www.instagram.com/risathefabulous/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        style={{ width: "50px", height: "50px", marginRight: "10px" }}
                                        fluid
                                        src={require("../../components/images/insta.png")}
                                        alt="instaIco" />
                                </a>
                            </Card.Body>
                            <Card.Body>
                                <Row className="justify-content-md-center"
                                    style={{ marginBottom: "40px" }}>
                                    <Col xl={5}>
                                        <Card border="none">
                                            <Card.Body style={{ borderRight: "1px grey solid" }}>
                                                <h3><b>Email: </b></h3>
                                                <h4><a href="mailto:m.anjelica.f@gmail.com" target="_blank" rel="noopener noreferrer">m.anjelica.f@gmail.com</a></h4>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={5}>
                                        <Card>
                                            <Card.Body>
                                                <h3><b>Phone Number: </b></h3>
                                                <h4><a href="tel:+12096238738" target="_blank" rel="noopener noreferrer">209-623-8738</a></h4>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>

                                <Row>
                                    {
                                        !this.state.submitted ?
                                            (
                                                <Col>
                                                    <Row>
                                                        <Col>
                                                            <Form onSubmit={this.handleSubmit}>
                                                                <Form.Row>
                                                                    <Col xl={6}>
                                                                        <Form.Control
                                                                            style={{ marginBottom: "2px" }}
                                                                            placeholder="First name"
                                                                            type="name"
                                                                            name="name"
                                                                            onChange={this.handleChange}
                                                                            required />
                                                                        <Form.Control
                                                                            style={{ marginBottom: "2px" }}
                                                                            placeholder="Email"
                                                                            type="email"
                                                                            name="email"
                                                                            onChange={this.handleChange}
                                                                            required />
                                                                        <Form.Control
                                                                            style={{ marginBottom: "2px" }}
                                                                            placeholder="Subject"
                                                                            type="subject"
                                                                            name="subject"
                                                                            onChange={this.handleChange}
                                                                            required />
                                                                    </Col>
                                                                    <Col xl={6}>
                                                                        <Form.Control
                                                                            style={{ height: "118px" }}
                                                                            placeholder="Message"
                                                                            as="textarea"
                                                                            rows="4"
                                                                            type="message"
                                                                            name="message"
                                                                            onChange={this.handleChange}
                                                                            required />
                                                                    </Col>
                                                                </Form.Row>
                                                                <Button
                                                                    style={{ marginTop: "10px" }}
                                                                    variant="dark"
                                                                    type="submit"
                                                                    value="Submit"
                                                                    className="float-right">
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
                                                    <Card className="text-center">
                                                        <Card.Body style={{ padding: "100px 100px 100px 100px", border: "5px dashed #CAE9BD" }}>
                                                            <h1><b>Message Received</b></h1>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            )
                                    }
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        );
    };
};

export default Contact;