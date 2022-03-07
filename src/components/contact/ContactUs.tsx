import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function ContactUs(props: any) {
  const schema = yup.object().shape({
    institute: yup.string().required("Institute name is required"),
    name: yup.string().required("Name is required"),
    serviceType: yup.string().required("Select One Service Type"),
    service: yup.string().required("Select One Service"),
    email: yup.string().required("Email is required").email(),
    comment: yup.string().nullable(),

    contact: yup
      .number()
      .required("Contact Number Required")
      .positive()
      .integer()
      .typeError("Contact Number Required"),

    captcha: yup
      .string()
      .required("Please enter the Captcha")
      .typeError("Contact Number Required"),
  });

  const createUser = async (e: any) => {
    e.preventDefault();
    let formData = {
      institute: e.target[0].value,
      name: e.target[1].value,
      serviceType: e.target[2].value,
      service: e.target[3].value,
      email: e.target[4].value,
      contact: e.target[5].value,

      comment: e.target[6].value,
      captcha: e.target[7].value,
    };
    console.log(formData);
    const isValid = await schema.isValid(formData);
    console.log(isValid);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const india = props.data.india;
  const international = props.data.international;

  return (
    <div>
      <div className="bgWhite" id="contactus">
        <Container className="padding-70">
          <Container className="container_padding">
            <Row className="vertical-divider">
              <Col md={6}>
                <div className="addressPadding">
                  <h2 className="header addressTitle text-left">
                    {india.title}
                  </h2>
                  <div className="addressSubtitle">{india.subtitle}</div>
                  <div className="address">
                    <Row>
                      <Col md={1} sm={1} className="width10 width-mobile-45px">
                        <Image className="locationimg" src={india.image} />
                      </Col>
                      <Col
                        md={11}
                        sm={11}
                        className=" width-90 width-mobile-cal-45"
                      >
                        <ul>
                          {india.content.map((item: any, i: any) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </Col>
                    </Row>
                    <hr />
                    <h2 className="header addressTitle text-left">
                      {international.title}
                    </h2>

                    <div className="addressSubtitle">
                      {international.office.emea.subtitle}
                    </div>
                    <div className="address">
                      <Row>
                        <Col
                          md={1}
                          sm={1}
                          className="width10 width-mobile-45px"
                        >
                          <Image
                            className="locationimg"
                            src={international.office.emea.image}
                          />
                        </Col>
                        <Col
                          md={11}
                          sm={11}
                          className=" width-90 width-mobile-cal-45"
                        >
                          <ul>
                            {international.office.emea.content.map(
                              (item: any, i: any) => (
                                <li key={i}>{item}</li>
                              )
                            )}
                          </ul>
                        </Col>
                      </Row>
                    </div>
                    <div className="addressSubtitle subMargin">
                      {international.office.apac.subtitle}
                    </div>
                    <div className="address">
                      <Row className="row">
                        <Col
                          md={1}
                          sm={1}
                          className=" width10 width-mobile-45px"
                        >
                          <Image
                            className="locationimg"
                            src={international.office.emea.image}
                          />
                        </Col>
                        <Col
                          md={11}
                          sm={11}
                          className=" width-90 width-mobile-cal-45"
                        >
                          <ul>
                            {international.office.apac.content.map(
                              (item: any, i: any) => (
                                <li key={i}>{item}</li>
                              )
                            )}
                          </ul>
                        </Col>
                      </Row>
                    </div>
                    <hr />
                    <h2 className="header addressTitle text-left">
                      {international.emailTitle}
                    </h2>
                    <div className="address">
                      <ul className="emaillinks">
                        {international.email.map((item: any, i: any) => (
                          <li key={i}>
                            <a key={i} href={item.href}>
                              <Image className="iconimg" src={item.image} />
                              {item.email}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="addressPadding">
                  <Form
                    onSubmit={handleSubmit(onSubmit)}
                    className="contactForm"
                    id="contactForm"
                  >
                    <div className="header text-left">Contact us</div>

                    <Form.Group>
                      <Form.Control
                        {...register("institute")}
                        placeholder="Name of Institute*"
                        className="input"
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
                        placeholder="Your Name*"
                        type="text"
                        className="input"
                      ></Form.Control>
                      <div className="line-box">
                        <div className="line"></div>
                      </div>
                      <span style={{ color: "red" }}>
                        {errors?.name?.message}
                      </span>
                    </Form.Group>

                    <select
                      {...register("serviceType")}
                      name="serviceType"
                      id="serviceType"
                      placeholder="Select Service Type *"
                      className="input"
                    >
                      <option value="">Select Service Type *</option>
                      <option value="Product">Product</option>
                      <option value="Service">Service</option>
                    </select>

                    <div className="line-box">
                      <div className="line"></div>
                    </div>
                    <span style={{ color: "red" }}>
                      {errors?.serviceType?.message}
                    </span>
                    <select
                      {...register("service")}
                      name="service"
                      id="service"
                      placeholder="Select Service*"
                      className="input"
                    >
                      <option value="">Select Service *</option>
                      <option value="Mentor ERP">Mentor ERP</option>
                      <option value="Custom Development">
                        Custom Development
                      </option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="DevOps Implementation">
                        DevOps Implementation
                      </option>
                      <option value="Test Consulting">Test Consulting</option>
                      <option value="Test Automation">Test Automation</option>
                    </select>
                    <div className="line-box">
                      <div className="line"></div>
                    </div>
                    <span style={{ color: "red" }}>
                      {errors?.service?.message}
                    </span>
                    <Form.Group>
                      <Form.Control
                       {...register("email")}
                        type="email"
                        placeholder="Email ID.*"
                        className="input"
                      ></Form.Control>
                      <div className="line-box">
                        <div className="line"></div>
                      </div>
                      <span style={{ color: "red" }}>
                        {errors?.email?.message}
                      </span>
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                      {...register("contact")}
                        type="text"
                        placeholder="Contact No*"
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
                      <Form.Label>Comment:</Form.Label>
                      <Form.Control
                      {...register("comment")}
                        name="comment"
                        className="form-control shadow-sm txtarea"
                        as="textarea"
                        rows={5}
                      ></Form.Control>
                      <div className="line-box">
                        <div className="line"></div>
                      </div>
                      <span style={{ color: "red" }}>
                        {errors?.comment?.message}
                      </span>
                    </Form.Group>

                    <Row>
                      <Col md={5} className="col-12 ">
                        <Form.Group>
                          <Form.Control
                          {...register("captcha")}
                            type="text"
                            name="captcha"
                            className="input"
                            placeholder="Captcha"
                          ></Form.Control>
                          <div className="line-box">
                            <div className="line"></div>
                          </div>
                          <span style={{ color: "red" }}>
                            {errors?.captcha?.message}
                          </span>
                        </Form.Group>
                      </Col>

                      <Col
                        md={5}
                        className="col-10 width-90 width-mobile-cal-45 pdleft"
                      >
                        <input
                          type="text"
                          id="contactCaptcha"
                          name="mainCaptcha"
                          className="input"
                        />
                        <div className="line-box">
                          <div className="line"></div>
                        </div>
                      </Col>
                      <input type="hidden" name="subject" value="Contact Us" />
                      <Col md={2} className="col-2  width10 no-padding">
                        <img
                          className="reload"
                          src="/assets/images/Common/reload.png"
                        />
                      </Col>
                    </Row>
                    <Col md={12} className="col-md-12 text-center mgtop-25">
                      <button
                        type="submit"
                        className="loadingBtn btn btn-lg custombtn btn-block txtwhite"
                      >
                        Submit
                      </button>
                    </Col>
                  </Form>
                </div>
              </Col>

              <Col md={6}></Col>
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
}

export default ContactUs;
