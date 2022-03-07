import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function TestingService(props: any) {
  const data = props.data;
  return (
    <div id="testingPractice">
      <div className="bgWhite">
        <Container className="container" id="headinghere">
          <h2 className="txtblue paddingBottom30">{data.title}</h2>
          <Col md={12}>
            <Row>
              <Col md={4}>
                <Image className="LeftImage" src={data.image} />
              </Col>
              <Col md={8}>
                {data.rowOne.map((item: any, i: any) => (
                  <p className="paragraph">{item}</p>
                ))}
              </Col>
            </Row>
            <Row className=" pt-4">
              <Col md={12} className="col-md-12">
                {data.rowTwo.map((item: any, i: any) => (
                  <p className="fullparagrap">{item}</p>
                ))}
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default TestingService;
