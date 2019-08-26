import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card bg="danger" className="text-center">
                            Insert Marisa pic here
                        </Card>
                    </Col>

                    <Col>
                        <Card bg="success" className="text-left">
                            My name is Marisa Franco. I am a 2D animator. I'm from northern California and I've loved drawing since the little switch in my brain flipped on. I've had a death grip on a pencil for as long as I remember and drew constantly as a kid and never stopped.
                            Growing up I watched my fair share of Looney Tunes and other older classics like the Flintstones, The Jetsons, Tom and Jerry, and so many more. It wasn't until my siblings started watching anime like Dragonball Z and Sailor Moon that I started  becoming curious about how these shows were made.
                            Watching all of these awesome animations and it didn't even cross my mind that animation was a job that I could purse until I got to high school. Once I had that epiphany, I knew that was the only career path I wanted to follow for the rest of my life.
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            Abilities
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            Experience
                        </Card>
                    </Col>
                </Row>

            </Container>
        );
    };
};

export default About;