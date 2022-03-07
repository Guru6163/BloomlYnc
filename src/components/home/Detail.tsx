import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row,Image } from "react-bootstrap";
import { useEffect, useState } from "react";

function Detail(props: any) {
  const data = props.data;

  return (
    <div>
      <Container className="padding-100 paddingtop50">
        <Col md={12}>
          <Row>
            <Col md={5}>
              <Image className="LeftImage" src={data.image} />
              <p className="imageParagraph">{data.atBloomlync}</p>
              <p className="imageParagraph">{data.consistent}</p>
            </Col>
            <Col md={7}>
              <p className="paragraph customPadding">{data.weEmpower}</p>
              <div className="paragraphTitle">Our Promise</div>
              <ul className="ul">
                {data.ourPromise.map((item: any, i: any) => (
                  <li>{item}</li>
                ))}
              </ul>

              <div className="paragraphTitle">Our Implementation approach</div>
              <ul className="ul paddingBottom50">
                {data.implementation.map((item: any, i: any) => (
                  <li>{item}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default Detail;
