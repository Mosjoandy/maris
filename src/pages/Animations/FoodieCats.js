import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './FoodieCats.css'


class FoodieCats extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xl={12}>
                        <Card className="text-center">
                            <Card.Header id="foodieCatsHeader">
                                <h1><b>Foodie Cats</b></h1>
                            </Card.Header>
                            <Card.Body id="foodieCatsBody">
                                <h4> I animated several shots on this project. It was animated in Adobe Animate and is the first animated short of the Junior Giant Foodiecats series to be made in 2D.</h4>
                            </Card.Body>
                            <Card.Body>
                                <iframe
                                    className="iFrameAnimations"
                                    title="foodieCats1"
                                    src="https://www.youtube-nocookie.com/embed/gnznvGYELXM?controls=0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                                </iframe>
                                
                                <div style={{ margin: "25px 0 25px 0" }}></div>
                                <iframe
                                    className="iFrameAnimations"
                                    title="foodieCats2"
                                    src="https://www.youtube-nocookie.com/embed/1q8_8wYB_J8?controls=0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                                </iframe>
                                
                                <div style={{ margin: "25px 0 25px 0" }}></div>
                                <iframe
                                    className="iFrameAnimations"
                                    title="foodieCats3"
                                    src="https://www.youtube-nocookie.com/embed/c0bQUVJBpIY?controls=0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                                </iframe>
                                
                                <div style={{ margin: "25px 0 25px 0" }}></div>
                                <iframe
                                    className="iFrameAnimations"
                                    title="foodieCats4"
                                    src="https://www.youtube-nocookie.com/embed/lJIJNkI0vjk?controls=0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                                </iframe>
                                
                                <div style={{ margin: "25px 0 25px 0" }}></div>
                                <iframe
                                    className="iFrameAnimations"
                                    title="foodieCats5"
                                    src="https://www.youtube-nocookie.com/embed/x4hDc6voPm8?controls=0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                                </iframe>
                                
                                <div style={{ margin: "25px 0 25px 0" }}></div>
                                <iframe
                                    className="iFrameAnimations"
                                    title="foodieCats6"
                                    src="https://www.youtube-nocookie.com/embed/Yj9ig_2UUw0?controls=0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                                </iframe>
                                
                                <div style={{ margin: "25px 0 25px 0" }}></div>
                                <iframe
                                    className="iFrameAnimations"
                                    title="foodieCats7"
                                    src="https://www.youtube-nocookie.com/embed/WahfSn_zT74?controls=0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                                </iframe>
                            </Card.Body>

                            {/* <Carousel fade={true} interval={null}>
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
                                        >
                                        </iframe>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <iframe
                                            width="100%"
                                            height="400"
                                            src="https://www.youtube-nocookie.com/embed/x4hDc6voPm8?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        >
                                        </iframe>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <iframe
                                            width="100%"
                                            height="400"
                                            src="https://www.youtube-nocookie.com/embed/Yj9ig_2UUw0?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        >
                                        </iframe>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <iframe
                                            width="100%"
                                            height="400"
                                            src="https://www.youtube-nocookie.com/embed/WahfSn_zT74?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        >
                                        </iframe>
                                    </Carousel.Item>

                            </Carousel> */}
                        </Card>
                    </Col>
                </Row>

            </Container>
        );
    };
};

export default FoodieCats;