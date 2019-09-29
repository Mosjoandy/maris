import React, { Component } from 'react';
import { Container, Carousel, Row, Col, Card } from 'react-bootstrap';
import './FoodieCats.css'


class Animations extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xl={8}>
                        <Card bg="light" className="text-center">
                            <Card.Header>
                                <h1>Foodie Cats</h1>
                            </Card.Header>
                            <Card.Body>
                            <h4> I animated several shots on this project. It was animated in Adobe Animate and is the first animated short of the Junior Giant Foodiecats series to be made in 2D.
</h4>
                                <Carousel fade={true} interval={null}>
                                    <Carousel.Item>
                                        <iframe
                                            width="100%"
                                            height="400"
                                            src="https://www.youtube-nocookie.com/embed/gnznvGYELXM?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        >
                                        </iframe>

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <iframe
                                            width="100%"
                                            height="400"
                                            src="https://www.youtube-nocookie.com/embed/1q8_8wYB_J8?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        >
                                        </iframe>

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <iframe
                                            width="100%"
                                            height="400"
                                            src="https://www.youtube-nocookie.com/embed/c0bQUVJBpIY?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        >
                                        </iframe>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <iframe
                                            width="100%"
                                            height="400"
                                            src="https://www.youtube-nocookie.com/embed/lJIJNkI0vjk?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <iframe
                                            width="100%"
                                            height="400"
                                            src="https://www.youtube-nocookie.com/embed/x4hDc6voPm8?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <iframe
                                            width="100%"
                                            height="400"
                                            src="https://www.youtube-nocookie.com/embed/Yj9ig_2UUw0?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <iframe
                                            width="100%"
                                            height="400"
                                            src="https://www.youtube-nocookie.com/embed/WahfSn_zT74?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>
                                    </Carousel.Item>

                                </Carousel>
                            </Card.Body>


                            {/* <Card.Body>
                                I animated several shots on this project. It was animated in Adobe Animate and is the first animated short of the Junior Giant Foodiecats series to be made in 2D.

                                <iframe
                                    width="100%"
                                    height="500"
                                    src="https://www.youtube-nocookie.com/embed/gnznvGYELXM?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                                <br />
                                <br />

                                <iframe
                                    width="100%"
                                    height="500"
                                    src="https://www.youtube-nocookie.com/embed/1q8_8wYB_J8?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                                <br />
                                <br />

                                <iframe
                                    width="100%"
                                    height="500"
                                    src="https://www.youtube-nocookie.com/embed/c0bQUVJBpIY?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                                <br />
                                <br />

                                <iframe
                                    width="100%"
                                    height="500"
                                    src="https://www.youtube-nocookie.com/embed/lJIJNkI0vjk?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                                <br />
                                <br />

                                <iframe
                                    width="100%"
                                    height="500"
                                    src="https://www.youtube-nocookie.com/embed/x4hDc6voPm8?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                                <br />
                                <br />

                                <iframe
                                    width="100%"
                                    height="500"
                                    src="https://www.youtube-nocookie.com/embed/Yj9ig_2UUw0?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                                <br />
                                <br />

                                <iframe
                                    width="100%"
                                    height="500"
                                    src="https://www.youtube-nocookie.com/embed/WahfSn_zT74?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                            </Card.Body> */}

                        </Card>
                    </Col>
                </Row>

            </Container>
        );
    };
};

export default Animations;