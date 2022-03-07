import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Modal, Form } from "react-bootstrap";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function MentorERP(props: any) {
  const freeTrial = props.data.freeTrial;
  console.log(freeTrial);
  const [demoModal, setDemoModal] = useState(Boolean);
  const schema = yup.object().shape({
    institute: yup.string().required("Organization name is required"),
    name: yup.string().required("Name is required"),

    contact: yup
      .number()
      .required("Contact Number Required")
      .positive()
      .integer()
      .typeError("Contact Number Required"),
    email: yup.string().required("Email is required"),
    

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
      comment: e.target[5].value,
      captcha: e.target[6].value,
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

  const handleshowDemoModal = () => {
    setDemoModal(true);
  };

  const handleCloseDemoModal = () => {
    setDemoModal(false);
  };

  const data = props.data;
  return (
    <div>
      <div className="bgWhite">
        <Container className=" container_padding">
          <h2 className="txtblue paddingBottom30">{data.mentorErp.title}</h2>
          <div className="row">
            <div className="col-md-12">
              <div className="erpBanner">
                <h5>{data.mentorErp.content}</h5>
                <button
                  className="btn txtwhite custombtn mobileMargin-0 mRight-25"
                  data-toggle="modal"
                  data-target="#partnerModal"
                  onClick={handleshowDemoModal}
                >
                  {data.mentorErp.button}
                </button>
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
                              {item.title === "comment" ? (
                                <div>
                                  <Form.Label>Comment:</Form.Label>
                                  <Form.Control
                                    {...register(`${item.title}`)}
                                    className="form-control shadow-sm txtarea"
                                    as="textarea"
                                    rows={3}
                                  ></Form.Control>
                                </div>
                              ) : (
                                <Form.Control
                                  {...register(`${item.title}`)}
                                  placeholder={item.placeholder}
                                  className="input"
                                ></Form.Control>
                              )}

                              <div className="line-box">
                                <div className="line"></div>
                              </div>
                              <span style={{ color: "red" }}>
                                {errors[`${item.title}`]?.message}
                              </span>
                            </Form.Group>
                          ))}

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
              </div>
              <Image
                className="w-100 paddingBottom50 contctBannerHeight"
                src={data.mentorErp.image}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MentorERP;
