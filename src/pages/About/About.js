import React, { Component } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import "./About.css";

class About extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xl={12}>
                        <Card className="text-center" style={{ borderBottom: "5px dashed #F0BDC6", backgroundColor: "#CAE9BD", marginBottom: "25px" }}>
                            <h1><b>About Me</b></h1>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={5} >
                        <Card className="text-center">
                            <Card.Body id="aboutBG">
                                <Image style={{ border: "1px black solid" }} fluid src={require("../../components/images/portrait.jpg")} alt="soFancyTho" />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={7}>
                        <Card className="text-left">
                            <Card.Body id="aboutBG">
                                <p>My name is Marisa Franco. I am a 2D animator. I'm from Northern California and I've loved drawing since the little switch in my brain flipped on. I've had a death grip on a pencil for as long as I can remember and drew constantly as a kid, continuing as I grew up.</p>
                                <p>Growing up I watched my fair share of Looney Tunes and other older classics like the Flintstones, The Jetsons, Tom and Jerry, and so many more. It wasn't until my siblings started watching anime like Dragonball Z and Sailor Moon that I started  becoming curious about how these shows were made.  </p>
                                <p>Watching all of these awesome animations and it didn't even cross my mind that animation was a job that I could purse until I got to high school. Once I had that epiphany, I knew that was the only industry I wanted to be apart of for the rest of my life.</p>
                                <h3 style={{ borderTop: "5px dashed #F0BDC6" }}>Resume Download</h3>
                                <a
                                    target="_blank"
                                    href="Resume.pdf">
                                    <Image height="100" width="100" src={require("../../components/images/pdfIcon.png")} alt="resumeDLpdf" />
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={12}>
                        <Card>
                            <Card.Header style={{ borderBottom: "5px dashed #F0BDC6" }} id="aboutBG">
                                <h1><b>Abilities</b></h1>
                            </Card.Header>
                            <Card.Body id="aboutBG">
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
                            <Card.Header style={{ borderBottom: "5px dashed #F0BDC6" }} id="aboutBG">
                                <h1><b>Experience</b></h1>
                            </Card.Header>
                            <Card.Body id="experienceBG">
                                <h2><b>Studio X: Academy of Art University</b></h2>
                                <h3>Animator</h3>
                                <p><b>Foodiecats</b> - Animated 2D puppet Short</p>
                                <ul>
                                    <li>Manipulated puppet animation in Adobe Acrobat</li>
                                    <li>Praised by employer for good work ethic</li>
                                </ul>
                                <h3>Colorist</h3>
                                <p><b>Ribbon</b> - Animated 2D short</p>
                                <ul>
                                    <li>Assisted with frame by frame coloring</li>
                                </ul>
                            </Card.Body>
                            <Card.Body id="experienceBG">
                                <h2><b>Academy of Art University</b></h2>
                                <h3>Animator</h3>
                                <p><b>Castle Blazers</b> - Platform Racer Video Game</p>
                                <ul>
                                    <li>Created running animation for player character </li>
                                    <li>Created Sprite Sheets for player character</li>
                                </ul>
                            </Card.Body>
                            <Card.Body id="experienceBG">
                                <h2><b>Redbubble</b></h2>
                                <h3>Designer</h3>
                                <ul>
                                    <li>Created designs to be sold as various merchandise such as t-shirts, bags, notebooks, etc</li>
                                    <li>Communication with community</li>
                                </ul>
                            </Card.Body>
                            <Card.Body id="experienceBG">
                                <h2><b>Teepublic</b></h2>
                                <h3>Designer</h3>
                                <ul>
                                    <li>Created t-shirt designs</li>
                                    <li>Learned how to network</li>
                                    <li>Fair promotion of art alongside other artists </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default About;