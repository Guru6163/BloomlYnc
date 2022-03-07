import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import locationImage from '../../assets/static/images/location.png';


function Footer() {
    return(
        <footer className="footer mt-auto">
        <Container className=" bottom_border footermargin">
            <Row className="mt-sm-5">
                <Col className="col-sm-4">
                    <h5 className="headin5_amrc col_white_amrc pt2 font18">
                        <Image className="footerHeaderImg"
                            src={locationImage} /> Corporate Office</h5>
                    <ul className="footer_ul_amrc">
                        <li>
                            <Nav.Link>Bloomlync Technology Pvt Ltd,</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link>No. 26/1, West Mada Street, </Nav.Link>
                        </li>
                        <li>
                        <Nav.Link>Maduravoyal, Chennai</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link>TN - 600095, India</Nav.Link>
                        </li>
                    </ul>                  
                </Col>
                <Col className="col-sm-4">
                    <h5 className="headin5_amrc col_white_amrc pt2 font18"><Image className="footerHeaderImg"
                            src={locationImage} /> APAC Office
                    </h5>
                    <ul className="footer_ul_amrc">
                        <li>
                        <Nav.Link>Level 12/82 Elizabeth Street</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link>Sydney,</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link>NSW - 2000,</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link>Australia</Nav.Link>
                        </li>
                    </ul>
                </Col>
                <Col className="col-sm-4">
                    <h5 className="headin5_amrc col_white_amrc pt2 font18"><Image className="footerHeaderImg"
                            src={locationImage} />  EMEA Office</h5>
                    <ul className="footer_ul_amrc">
                        <li>
                        <Nav.Link>Troy Consultancy,</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link>UNIT 65, Business Park,</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link>Ardwick, Manchester M12 4AH,</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link>United Kingdom.</Nav.Link>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                    <Row>
                        <Col className="col-sm-4 padding-0 d-none d-sm-block">
                            <div className="follows"> Follows us at</div>
                            <ul className="list-unstyled list-inline social">
                                <li className="list-inline-item"><Nav.Link href="https://www.facebook.com/bloomlync"
                                        target="_blank"><i className="fa fa-facebook"></i></Nav.Link></li>
                                <li className="list-inline-item"><Nav.Link href="https://www.linkedin.com/company/bloomlync"
                                        target="_blank"><i className="fa fa-linkedin linkedinIcon"></i></Nav.Link></li>
                                <li className="list-inline-item"><Nav.Link href="https://twitter.com/bloomlync" target="_blank"><i
                                            className="fa fa-twitter twiterIcon"></i></Nav.Link></li>
                               
                            </ul>
                        </Col>

                        <Col className="col-6 col-sm-4 padding-0">
                            <ul className="list-unstyled pagesLink">
                                <li><Nav.Link as={NavLink} to="/about">About Us</Nav.Link></li>
                                <li><Nav.Link as={NavLink} to="/about">Mission</Nav.Link></li>
                                <li><Nav.Link as={NavLink} to="/about">Vision</Nav.Link></li>
                                <li><Nav.Link as={NavLink} to="/about">Our Culture</Nav.Link></li>
                                <li><Nav.Link as={NavLink} to="/about">Core Team</Nav.Link></li>
                                <li><Nav.Link as={NavLink} to="/about">Contact Us</Nav.Link></li>
                            </ul>
                        </Col>
                        <Col className="col-6 col-sm-4 padding-0">
                            <ul className="list-unstyled pagesLink">
                                <li><Nav.Link as={NavLink} to="/product">Mentor ERP</Nav.Link></li>
                                <li><Nav.Link as={NavLink} to="/product">Custom Development</Nav.Link></li>
                                <li><Nav.Link as={NavLink} to="/product">DevOps Implementation</Nav.Link></li>
                                <li><Nav.Link as={NavLink} to="/product">Test Automation</Nav.Link></li>
                                <li><Nav.Link as={NavLink} to="/product">Testing Practise</Nav.Link></li>
                                <li><Nav.Link as={NavLink} to="/product">Quality Engineering</Nav.Link></li>
                            </ul>
                        </Col>
                        <Col className="col012 col-sm-4 padding-0 d-block d-sm-none">
                            <div className="follows"> Follows us at</div>
                            <ul className="list-unstyled list-inline social">
                                <li className="list-inline-item"><Nav.Link href="https://www.facebook.com/bloomlync"
                                        target="_blank">
                                          
                                            <i className="fa fa-facebook"></i></Nav.Link></li>
                                <li className="list-inline-item"><Nav.Link href="https://www.linkedin.com/company/bloomlync"
                                        target="_blank"><i className="fa fa-linkedin linkedinIcon"></i></Nav.Link></li>
                                <li className="list-inline-item"><Nav.Link href="https://twitter.com/bloomlync" target="_blank"><i
                                            className="fa fa-twitter twiterIcon"></i></Nav.Link></li>
                               
                            </ul>
                        </Col>
                    </Row>
                </Col>
                {/* <hr> */}
            </Row>
        </Container>
        <div className="col-xs-12 col-sm-12 col-md-12 padding-0">
            <ul className="list-unstyled list-inline bottomtext">
                <li className="list-inline-item privacy"><a href="privacy.html">
                        Privacy Policy
                    </a>
                </li>
                <li className="list-inline-item">
                    @2021 Bloomlync Technology Pvt Ltd. <span className="reserved">All Rights Reserved</span>
                </li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer;