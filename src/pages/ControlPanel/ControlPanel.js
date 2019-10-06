import React, { Component } from "react"
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { auth, provider } from "../../utils/firebase";
import Database from "./Database";

class ControlPanel extends Component {

    constructor() {
        super();
        this.state = {
            user: null,
            current: "/cp",
            userName: "",
            userID: "",
            admin: false,
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    };

    logout() {
        auth.signOut()
            .then(() => {
                // this.setState({ user: null });
                this.setState({ admin: false });
            });
    };

    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                this.setState({ user });
                this.setState({ userName: user.displayName });
                this.setState({ userID: user.uid });
                if (this.state.userID === "aXKEZAlJKpdlb0wm1NWEFHHQgFh1") {
                    this.setState({ admin: true })
                } else if (this.state.userID === "Gzeajq8T4oMyrkG3SBLBB9bOCAz1") {
                    this.setState({ admin: true })
                } else {
                    this.setState({ admin: false })
                };
            });
    };

    render() {
        return (
            <Container>
                {
                    this.state.admin === true
                        ?
                        <Row>
                            <Col xl={12}>
                                <Card>
                                    <Card.Body>
                                        <Row>
                                            <Col xl={12}>
                                                <span className="text-left">
                                                    <h2>Welcome <b>{this.state.userName}</b>
                                                        <Button className="float-right" variant="info" onClick={this.logout}>
                                                            Log Out
                                                    </Button>
                                                    </h2>
                                                </span>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Body>
                                        <Database />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        :
                        <Col xl={12}>
                            <Card className="text-center">
                                <Card.Body>
                                    <h3>You've reached a nondescript door.</h3>
                                    <h3>Please {" "}
                                        <Button variant="info" onClick={this.login}>Knock</Button>
                                    </h3>
                                </Card.Body>
                            </Card>
                        </Col>
                }
            </Container>
        );
    };
};
export default ControlPanel