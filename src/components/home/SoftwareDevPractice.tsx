import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

function SoftwareDevPractice(props: any) {
  const [data, setData] = useState([]);
  const rowOne = props.dev.rowOne;
  const rowTwo = props.dev.rowTwo;

  return (
    <div>
      <div className="bgGreey">
        <Container className="paddingBottom30">
          <h2 className="txtblue paddingBottom30">
            Our Software Development Practice as a Service
          </h2>
          <Row className="paddingBottom50">
            {rowOne.map((item: any, i: any) => (
              <Col sm={4} md={4} lg={2} className="imghover">
                <div className="circle mx-auto">
                  <Image fluid roundedCircle={true} src={item.image} />
                </div>
                <div className="boxContent mx-auto">
                  <span>{item.title}</span>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="paddingBottom50">
            {rowTwo.map((item: any, i: any) => (
              <Col sm={4} md={4} lg={2} className="imghover">
                <div className="circle mx-auto">
                  <Image fluid roundedCircle={true} src={item.image} />
                </div>
                <div className="boxContent mx-auto">
                  <span>{item.title}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>{" "}
    </div>
  );
}

export default SoftwareDevPractice;
