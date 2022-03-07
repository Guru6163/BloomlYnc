import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function TestAutomation(props: any) {
  const data = props.data;
  return (
    <div id="testAutomation">
      <div className="bgGreey" id="automation">
        <Container className=" paddingBottom50">
          <h2 className="txtblue paddingBottom30">{data.title}</h2>
          <Row>
            {data.rowOne.map((item: any, i: any) => (
              <Col md={3} className=" customTowColumn">
                <div className="box">
                  <Col md={12}>
                    <Image src={item.image} />
                  </Col>
                  <span className="testingHeading">{item.title}</span>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            {data.rowTwo.map((item: any, i: any) => (
              <Col md={3} className=" customTowColumn">
                <div className="box">
                  <Col md={12}>
                    <Image src={item.image} />
                  </Col>
                  <span className="testingHeading">{item.title}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default TestAutomation;
