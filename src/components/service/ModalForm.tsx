import React from "react";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Button, Image, Nav } from "react-bootstrap";

function ModalForm(props: any) {
  const freeTrial = props.data.freeTrial;
  const [demoModal, setDemoModal] = useState(Boolean);
  const handleshowDemoModal = () => {
    setDemoModal(true);
  };
  const handleCloseDemoModal = () => {
    setDemoModal(false);
  };
  return (
    <div>
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
              <Image src={freeTrial.image} alt={""} className="modalImg" />
            </Col>
            <Col md="12" lg="5" className="mobilewidth">
              <Button
                variant="default"
                className="close modalClose"
                onClick={handleCloseDemoModal}
              >
                &times;
              </Button>

              <Form className="modalForm">
                <div className="modalTitle">{freeTrial.title}</div>

                {freeTrial.placeholder.map((item: any, i: any) => (
                  <Form.Group>
                    <Form.Control
                      placeholder={item}
                      className="input"
                    ></Form.Control>
                    <div className="line-box">
                      <div className="line"></div>
                    </div>
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
  );
}

export default ModalForm;
