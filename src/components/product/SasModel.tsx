import React from "react";
import Image from "react-bootstrap/Image";
import { Container, ListGroupItem } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Modal, Form } from "react-bootstrap";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function SasModel(props: any) {
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
    note: yup.string().required("Note is required"),

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
      contact: e.target[2].value,
      email: e.target[3].value,
      note: e.target[4].value,
      captcha: e.target[5].value,
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
  const data = props.data.saasModel;
  const colOne = data.content.colOne;
  const colTwo = data.content.colTwo;
  const colThree = data.content.colThree;
  const [demoModal, setDemoModal] = useState(Boolean);

  const freeTrial = props.data.freeTrial;

  const handleshowDemoModal = () => {
    setDemoModal(true);
  };

  const handleCloseDemoModal = () => {
    setDemoModal(false);
  };

  return (
    <div>
      <div className="bgWhite">
        <Container className="container_padding">
          <h2 className="txtblue drivePadding mb-0">{data.title}</h2>
          <div className="drive">{data.subTitle}</div>
          <Row>
            <Col xs={12} sm={6} md={4} lg={4}>
              <ListGroup className="priceList">
                <li className="text-center bgBlue minHeight">
                  <div className="priceTitle">{colOne.title}</div>
                  <div className="priceSubTitle">{colOne.subTitle}</div>
                </li>
                <li className="mgtop-25">
                  <i
                    className="fa fa-long-arrow-right priceArrow"
                    aria-hidden="true"
                  ></i>
                  Admission - Online Application
                </li>

                {colOne.content.map((item: any, i: any) => (
                  <li>
                    <i
                      className="fa fa-long-arrow-right priceArrow"
                      aria-hidden="true"
                    ></i>
                    {item}
                  </li>
                ))}

                <li className="text-center">
                  <div className="priceFooterTitle">{colOne.price}</div>
                  <Button
                    type="submit"
                    data-toggle="modal"
                    data-target="#ServiceModel"
                    className="btn custombtn txtwhite mgbottom50"
                    onClick={handleshowDemoModal}
                  >
                    {colOne.button}
                  </Button>
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
                          <Image
                            src={freeTrial.image}
                            alt={""}
                            className="modalImg"
                          />
                        </Col>
                        <Col md="12" lg="5" className="mobilewidth">
                          <Button
                            variant="default"
                            className="close modalClose"
                            onClick={handleCloseDemoModal}
                          >
                            &times;
                          </Button>

                          <Form
                            onSubmit={handleSubmit(onSubmit)}
                            className="modalForm"
                          >
                            <div className="modalTitle">{freeTrial.title}</div>

                            {freeTrial.placeholder.map((item: any, i: any) => (
                              <Form.Group>
                                <Form.Control
                                  {...register(`${item.title}`)}
                                  placeholder={item.placeholder}
                                  className="input"
                                ></Form.Control>
                                <div className="line-box">
                                  <div className="line"></div>
                                </div>
                                <span style={{ color: "red" }}>
                                  {errors[`${item.title}`]?.message}
                                </span>
                              </Form.Group>
                            ))}
                            <select
                              name="serviceType"
                              id="serviceType"
                              required
                              className="input"
                              value="Product"
                            >
                              <option value="Product">Standard</option>
                              <option value="Professional">Professional</option>
                              <option value="Premium">Premium</option>
                            </select>
                            <div className="line-box">
                              <div className="line"></div>
                            </div>

                            <Row>
                              <Col xs={12} md={5}>
                                <Form.Group>
                                  <Form.Control
                                    placeholder="Captcha"
                                    className="input"
                                  ></Form.Control>
                                  <div className="line-box">
                                    <div className="line"></div>
                                  </div>
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
                                <Image src={""} className="reload" />
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
                </li>
              </ListGroup>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <ListGroup className=" priceList">
                <li className="text-center bgBlue minHeight">
                  <div className="priceTitle">{colTwo.title}</div>
                  <div className="priceSubTitle">{colTwo.subTitle}</div>
                </li>
                <li className="mgtop-25 priceliTitle">{colTwo.add}</li>
                {colTwo.content.map((item: any, i: any) => (
                  <li>
                    <i
                      className="fa fa-long-arrow-right priceArrow"
                      aria-hidden="true"
                    ></i>
                    {item}
                  </li>
                ))}

                <li className="text-center professionMt-20">
                  <div className="priceFooterTitle">{colTwo.price}</div>
                  <Button
                    type="submit"
                    data-toggle="modal"
                    data-target="#ServiceModel"
                    onClick={handleshowDemoModal}
                    className="btn custombtn txtwhite mgbottom50"
                  >
                    {colTwo.button}
                  </Button>
                </li>
              </ListGroup>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <ListGroup className="priceList">
                <ListGroup.Item className="text-center bgBlue minHeight">
                  <div className="priceTitle">{colThree.title}</div>
                  <div className="priceSubTitle">{colThree.subTitle}</div>
                </ListGroup.Item>
                <li className="mgtop-25 priceliTitle">{colThree.add}</li>
                {colThree.content.map((item: any, i: any) => (
                  <li>
                    <i
                      className="fa fa-long-arrow-right priceArrow"
                      aria-hidden="true"
                    ></i>
                    {item}
                  </li>
                ))}
                <li className=" text-center premiumMt-130 mgtop-105">
                  <div className="priceFooterTitle">{colThree.price}</div>
                  <button
                    type="submit"
                    data-toggle="modal"
                    data-target="#ServiceModel"
                    onClick={handleshowDemoModal}
                    className="btn custombtn txtwhite mgbottom50"
                  >
                    {colThree.button}
                  </button>
                </li>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SasModel;
