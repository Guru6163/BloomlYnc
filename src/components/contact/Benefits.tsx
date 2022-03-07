import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Benefits(props: any) {
  const data = props.data;
  return (
    <div>
      <div className="bgGreey">
        <Container className="container paddingBottom40 mobilePadding-0">
          <h2 className="txtblue paddingBottom40">{data.title}</h2>
          <Col md={12}>
            <Row className=" paddingBottom40">
              <Col md={5} sm={12} xs={12} className="mobilePadding-0">
                <Image className="mobileImg" src={data.image} />
              </Col>
              <Col md={7} sm={12} xs={12} className="verticalAlign ">
                <ul className="ul bulletfontsize">
                  {data.content.map((item: any, i: any) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default Benefits;
