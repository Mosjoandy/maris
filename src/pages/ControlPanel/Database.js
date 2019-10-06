import React, { Component } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import firebase from "../../utils/firebase";

class Database extends Component {

    constructor() {
        super()
        this.state = {
            contactList: [],
        };
    };

    componentDidMount() {
        const contact = firebase.database().ref("contact");
        contact.on("value", (snapshot) => {
            let contact = snapshot.val();
            let newState = [];
            for (let info in contact) {
                newState.push({
                    id: info,
                    name: contact[info].name,
                    email: contact[info].email,
                    message: contact[info].message,
                    subject: contact[info].subject,
                    timestamp: contact[info].timestamp
                });
            };
            this.setState({
                contactList: newState
            });
        });
    };

    removeItem(contact) {
        const emailer = firebase.database().ref(`/contact/${contact}`);
        emailer.remove();
    };

    render() {
        return (
            <Row>
                <Col xl={12} >
                    {
                        this.state.contactList.map((contact, index) =>

                            <Card key={index} style={{ borderBottom: "5px solid black" }}>
                                <Card.Body key={contact.id}>
                                    <p className="text-right">
                                        <Button
                                            style={{ marginLeft: "10px" }}
                                            variant="danger"
                                            size="sm"
                                            onClick={() => this.removeItem(contact.id)}>
                                            Delete
                                        </Button>
                                    </p>
                                    <p>Subject:{" "}<b>{contact.subject}</b>
                                        <span className="float-right">Received:{" "}{contact.timestamp}</span>
                                    </p>
                                    <p>From:{" "}<b>{contact.name}</b>
                                    </p>
                                    <p>Email:{" "}<b>{contact.email}</b>
                                    </p>
                                    <hr />
                                    <p><span>Message:{" "}</span>{contact.message}</p>
                                </Card.Body>
                            </Card>
                        )
                    }
                </Col>
            </Row>
        );
    };
};

export default Database
