import React from "react";
import "../Footer/footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () =>{
    const year = new Date().getFullYear()
    return <footer className="footer">
        <Container>
            <Row>
                {/* <Col lg='4'className="mb-4" md='6'>
                    <p className="footer__text mt-4">
                    Space Destiny Spaceflight
                    </p>
                </Col> */}

                <Col lg='3' md='3'></Col>
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title">Sections</h4>
                        <ListGroup className="mb-3">
                            <ListGroupItem className="p-0 border-0">
                            <Link to='#'>Commercial travel</Link>
                            </ListGroupItem>

                            <ListGroupItem className="p-0 border-0">
                            <Link to='#'>Your Astronaut Journey</Link>
                            </ListGroupItem>

                            <ListGroupItem className="p-0 border-0">
                            <Link to='#'>Space For the Curious</Link>
                            </ListGroupItem>
                            
                        </ListGroup>
                    </div>
                <Col lg='2'md='2' className="mb-2"></Col>
                <div className="footer__quick-links">
                        <h4 className="quick__links-title">Useful Links</h4>
                        <ListGroup>
                            <ListGroupItem className="p-0 border-0">
                            <Link to="/shop">Shop</Link>
                            </ListGroupItem>

                            <ListGroupItem className="p-0 border-0">
                            <Link to="/cart">Cart</Link>
                            </ListGroupItem>

                            <ListGroupItem className="p-0 border-0">
                            <Link to="/login">Login</Link>
                            </ListGroupItem>

                            <ListGroupItem className="p-0 border-0">
                            <Link to="#">Privacy Policy</Link>
                            </ListGroupItem>
                            
                        </ListGroup>
                    </div>
                <Col lg='3' md='3' className="mb-3">
                <div className="footer__quick-links">
                        <h4 className="quick__links-title">Contacts</h4>
                        <ListGroup>
                            <ListGroupItem className="p-0 border-0">
                            <span><i class="ri-map-pin-line"></i></span>
                            <p>123 SpaceBazar, Birmingham, United Kingdom</p>
                            </ListGroupItem>

                            <ListGroupItem className="p-0 border-0">
                            <span><i class="ri-phone-line"></i></span>
                            <p>0441234567890</p>
                            </ListGroupItem>

                            <ListGroupItem className="p-0 border-0">
                            <span><i class="ri-mail-line"></i></span>
                            <p>sacspacedestiny@email.com</p>
                            </ListGroupItem>
                            
                        </ListGroup>
                    </div>
                </Col>
            <Col>
            <p className="footer__copyright">Copyright {year} developed by Giovanna Calegaro. All rights reserved.</p>
            </Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;