import React from "react";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function WhatMakesERP(props: any) {
  const data = props.data;
  const rowOne = data.content.rowOne;
  const rowTwo = data.content.rowTwo;

  return (
    <div>
      <div className="bgBlue">
        <Container className="container_padding">
          <h2 className="txtwhite">{data.title}</h2>

          <Row className=" boxMobile pr-lg-0">
            {rowOne.map((item: any, i: any) => (
              <Col md={6} className="col-md-6">
                <div className="bigBox hovergrey">
                  <div className="erpcircle">
                    <Image src={item.image} />
                  </div>
                  <div className="erpSubtitle">{item.title} </div>
                  <p className="paragraph text-center">{item.content}</p>
                </div>
              </Col>
            ))}
            {rowTwo.map((item: any, i: any) => (
              <Col md={6} className="col-md-6 mgbottom50">
                <div className="bigBox hovergrey">
                  <div className="erpcircle">
                    <Image src={item.image} />
                  </div>
                  <div className="erpSubtitle">{item.title} </div>
                  <p className="paragraph text-center">{item.content}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default WhatMakesERP;
