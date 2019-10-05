import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <Container className="text-center" >
                <p id="footer">© 2019 Marisa Franco</p>
            </Container>
        );
    };
};

export default Footer;