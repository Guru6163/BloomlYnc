import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "../../assets/static/images/BloomLync-logo.png";
import demoImage from "../../assets/static/images/demoImage.jpg";
import reloadImage from "../../assets/static/images/reload.png";

function Header() {
  const schema = yup.object().shape({
    institute: yup.string().required("Institute name is required"),
    name: yup.string().required("Name is required"),

    contact: yup
      .number()
      .required("Contact Number Required")
      .positive()
      .integer()
      .typeError("Contact Number Required"),
    email: yup.string().required("Email is required"),
    date: yup.string().required("Please choose a date"),

    captcha: yup.string().required("Please enter the Captcha"),
  });

  const createUser = async (e: any) => {
    e.preventDefault();
    let formData = {
      institute: e.target[0].value,
      name: e.target[1].value,
      contact: e.target[2].value,
      email: e.target[3].value,
      date: e.target[4].value,
      captcha: e.target[5].value,
    };

    const isValid = await schema.isValid(formData);
  };

  const onSubmit = (data: any) => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [bodyScroll, setBodyScroll] = useState(false);
  const { pathname } = useLocation();
  const [data, setData] = useState([]);
  const [demoModal, setDemoModal] = useState(Boolean);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBodyScroll(window.scrollY > 100);
    });
    fetch("/mockdata/menu.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const handleshowDemoModal = () => {
    setDemoModal(true);
  };
  const handleCloseDemoModal = () => {
    setDemoModal(false);
  };

  return (
    <>
      <Navbar
        className={`navbar flex-column navTop ${
          pathname === "/" || pathname === "/home" || pathname === "/product"
            ? ""
            : "txtBlack"
        } ${bodyScroll ? "scrolled" : ""}`}
        expand="md"
        bg="transparent"
        variant="light"
      >
        <Container className="d-none d-md-flex">
          <div id="topbar" className="text-right ">
            <div className="social-links ml-auto">
              <div className="socialdiv">
                <i className="fa fa-phone headerIcons"></i>
                <Nav.Link href="tel:91-9790702005" className="p-0">
                  <span>91 - 9790702005 </span>
                </Nav.Link>
              </div>
              <Nav.Link
                href="mailto:sales@bloomlync.com"
                className="mailPadding p-0"
              >
                <i className="fa fa-envelope-o headerIcons"></i>
                <span> sales@bloomlync.com</span>
              </Nav.Link>
            </div>
          </div>
        </Container>
        <Container>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Brand className="p-0">
            <Nav.Link as={NavLink} to="/" className="p-0">
              <Image src={logo} alt={logo} className="logoheight" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Collapse id="navbarSupportedContent">
            {data.map((MenuItems: any, i: any) => (
              <Nav key={i} className="ml-auto" as="ul">
                {MenuItems.menu.map((items: any, i: any) => (
                  <Nav.Item
                    key={i}
                    as="li"
                    className={items.subItems ? "dropdown" : ""}
                  >
                    <Nav.Link as={NavLink} to={items.link}>
                      {items.label}
                    </Nav.Link>

                    {items.subItems && (
                      <>
                        <i className="fa fa-angle-down"></i>
                        <Nav
                          key={i}
                          className="dropdown-menu sub-menu flex-column"
                          as="ul"
                        >
                          {items.subItems.map((items: any, i: any) => (
                            <Nav.Item as="li" key={i}>
                              <Nav.Link
                                as={NavLink}
                                to={items.link}
                                className="p-0"
                              >
                                {items.label}
                              </Nav.Link>
                            </Nav.Item>
                          ))}
                        </Nav>
                      </>
                    )}
                  </Nav.Item>
                ))}
              </Nav>
            ))}
            <div className="demoBtn">
              <NavLink to="#" onClick={handleshowDemoModal}>
                Schedule a Demo
              </NavLink>
            </div>
          </Navbar.Collapse>

          <Nav
            as="ul"
            className="nav list-inline ml-auto mobileIcons"
            id="mobileMenu"
          >
            <Nav.Item as="li" className="nav-item list-inline-item dropdown">
              <Nav.Link
                className="fa fa-envelope-o"
                href="mailto:sales@bloomlync.com"
              ></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav-item list-inline-item dropdown">
              <Nav.Link
                className="fa fa-phone"
                href="tel:91-9790702005"
              ></Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <Modal
        centered
        show={demoModal}
        onHide={handleCloseDemoModal}
        className="modalRounded"
        size="lg"
      >
        <Modal.Body className="p-0">
          <Row>
            <Col md="12" lg="7" className="modalRounded">
              <Image src={demoImage} alt={demoImage} className="modalImg" />
            </Col>
            <Col md="12" lg="5" className="mobilewidth">
              <Button
                variant="default"
                className="close modalClose"
                onClick={handleCloseDemoModal}
              >
                &times;
              </Button>

              <Form onSubmit={handleSubmit(onSubmit)} className="modalForm">
                <div className="modalTitle">Schedule a Demo</div>

                <Form.Group>
                  <Form.Control
                    {...register("institute")}
                    placeholder="Name of Institute*"
                    className="input"
                    name="institute"
                  ></Form.Control>
                  <div className="line-box">
                    <div className="line"></div>
                  </div>
                  <span style={{ color: "red" }}>
                    {errors?.institute?.message}
                  </span>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    {...register("name")}
                    placeholder="Contact Person Name*"
                    className="input"
                  ></Form.Control>
                  <div className="line-box">
                    <div className="line"></div>
                  </div>
                  <span style={{ color: "red" }}>{errors?.name?.message}</span>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    {...register("contact")}
                    placeholder="Contact Number*"
                    className="input"
                  ></Form.Control>
                  <div className="line-box">
                    <div className="line"></div>
                  </div>
                  <span style={{ color: "red" }}>
                    {errors?.contact?.message}
                  </span>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    {...register("email")}
                    placeholder="Email ID*"
                    className="input"
                  ></Form.Control>
                  <div className="line-box">
                    <div className="line"></div>
                  </div>
                  <span style={{ color: "red" }}>{errors?.email?.message}</span>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    {...register("date")}
                    placeholder="Preferred Date*"
                    type="date"
                    name="date"
                    className="input"
                  ></Form.Control>
                  <div className="line-box">
                    <div className="line"></div>
                  </div>
                  <span style={{ color: "red" }}>{errors?.date?.message}</span>
                </Form.Group>
                <Row>
                  <Col xs={12} md={5}>
                    <Form.Group>
                      <Form.Control
                        {...register("captcha")}
                        placeholder="Captcha"
                        className="input"
                      ></Form.Control>
                      <div className="line-box">
                        <div className="line"></div>
                      </div>
                      <span style={{ color: "red" }}>
                        {errors?.captcha?.message}
                      </span>
                    </Form.Group>
                  </Col>
                  <Col xs={10} md={5}>
                    <Form.Group>
                      <Form.Control
                        placeholder="code"
                        className="input"
                      ></Form.Control>
                      <div className="line-box">
                        <div className="line"></div>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col xs={2} md={2}>
                    <Image src={reloadImage} className="reload" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} className="mgtop-25">
                    <Button
                      type="submit"
                      variant="default"
                      className="loadingBtn btn btn-lg custombtn btn-block txtwhite"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
