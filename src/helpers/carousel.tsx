import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Button, Image, Nav } from "react-bootstrap";
import ArrowPrev from "../assets/static/images/Arrow_2.svg";
import ArrowNext from "../assets/static/images/Arrow_1.svg";

import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SpildeOption = {
  rewind: false,
  autoplay: true,
  type: "loop",
};

const SliderComponent = (props: any) => {
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

    captcha: yup.string().required("Please enter the Captcha").typeError("Contact Number Required"),
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
  const freeTrial = props.data.freeTrial;
  const Slider = props.data.Slider;

  const [demoModal, setDemoModal] = useState(Boolean);
  const handleshowDemoModal = () => {
    setDemoModal(true);
  };
  const handleCloseDemoModal = () => {
    setDemoModal(false);
  };

  return (
    <>
      {Slider ? (
        <Splide
          options={SpildeOption}
          id="mainSlider"
          renderControls={() => (
            <div className="splide__arrows Sadhana">
              <Button
                variant="default"
                className="splide__arrow splide__arrow--prev"
              >
                <Image src={ArrowPrev} />
              </Button>
              <Button
                variant="default"
                className="splide__arrow splide__arrow--next"
              >
                <Image src={ArrowNext} />
              </Button>
            </div>
          )}
        >
          {Slider.map((item: any, i: any) => (
            <SplideSlide key={i}>
              <Image
                src={item.image}
                className="w-100 img-responsive d-none d-xl-block d-xl-blcok"
              />
              <Image
                src={item.mobileImage}
                className="w-100 img-responsive d-xl-none d-xl-blcok"
              />
              <div className="sliderContent">
                <h5>{item.title}</h5>
                <p className="mgbottom50">{item.content}</p>
                <Button className="btn txtwhite custombtn">
                  <Nav.Link href="https://mentorerp.com/" target={"blank"}>
                    Explore Now
                  </Nav.Link>
                </Button>
                <Button
                  onClick={handleshowDemoModal}
                  className="btn txtwhite freeTrialBtn"
                >
                  Free Trail
                </Button>
              </div>
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
            </SplideSlide>
          ))}
        </Splide>
      ) : null}
    </>
  );
};

export { SliderComponent };
