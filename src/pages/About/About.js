import React, { Component } from 'react';
import { Container, Row, Col, Card, Image, ListGroup } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xl={5}>
                        <Card bg="danger" className="text-center">
                            <Card.Body>
                                <Image fluid src={require("../../components/images/portrait.jpg")} alt="soFancyTho" />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={7}>
                        <Card bg="success" className="text-left">
                            <Card.Body>
                                My name is Marisa Franco. I am a 2D animator. I'm from northern California and I've loved drawing since the little switch in my brain flipped on. I've had a death grip on a pencil for as long as I remember and drew constantly as a kid and never stopped.
                                Growing up I watched my fair share of Looney Tunes and other older classics like the Flintstones, The Jetsons, Tom and Jerry, and so many more. It wasn't until my siblings started watching anime like Dragonball Z and Sailor Moon that I started  becoming curious about how these shows were made.
                                Watching all of these awesome animations and it didn't even cross my mind that animation was a job that I could purse until I got to high school. Once I had that epiphany, I knew that was the only career path I wanted to follow for the rest of my life.
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col xl={3}>
                        <Card>
                            <Card.Header>
                                Resume Download
                        </Card.Header>
                            <Card.Body>
                                <a
                                    target="_blank"
                                    href="Resume.pdf">
                                    <Image fluid src={require("../../components/images/pdfIcon.png")} alt="resumeDLpdf" />
                                </a>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={12}>
                        <Card>
                            <Card.Header>
                                Abilities
                        </Card.Header>
                            <Card.Body>
                                <ul>
                                    <li>Traditional Animation</li>
                                    <li>Puppet Animation</li>
                                    <li>Character Design</li>
                                    <li>Paintingn</li>
                                    <li>Sculpting</li>
                                    <li>Layout</li>
                                </ul>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={12}>
                        <Card>
                            <Card.Header>
                                Experience
                        </Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><h2>Studio X: Academy of Art University</h2>
                                        <h3>Animator</h3>
                                        <p>Foodiecats - Animated 2D puppet Short</p>
                                        <ul>
                                            <li>Manipulated puppet animation in Adobe Acrobat</li>
                                            <li>Praised by employer for good work ethic</li>
                                        </ul>
                                        <h3>Colorist</h3>
                                        <p>Ribbon - Animated 2D short</p>
                                        <ul>
                                            <li>Assisted with frame by frame coloring</li>
                                        </ul>
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup variant="flush">
                                    <ListGroup.Item><h2>Academy of Art University</h2>
                                        <h3>Animator</h3>
                                        <p>Castle Blazers - Platform Racer Video Game</p>
                                        <ul>
                                            <li>Created running animation for player character </li>
                                            <li>Created Sprite Sheets for player character</li>
                                        </ul>
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup variant="flush">
                                    <ListGroup.Item><h2>Redbubble</h2>
                                        <h3>Designer</h3>
                                        <ul>
                                            <li>Created designs to be sold as various merchandise such as t-shirts, bags, notebooks, etc</li>
                                            <li>Communication with community</li>
                                        </ul>
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup variant="flush">
                                    <ListGroup.Item><h2>Teepublic</h2>
                                        <h3>Designer</h3>
                                        <ul>
                                            <li>Created t-shirt designs</li>
                                            <li>Learned how to network</li>
                                            <li>Fair promotion of art alongside other artists </li>
                                        </ul>
                                    </ListGroup.Item>
                                </ListGroup>


                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default About;