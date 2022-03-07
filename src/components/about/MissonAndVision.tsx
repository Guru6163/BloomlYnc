import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
function MissonAndVision(props: any) {
  const data = props.data;

  return (
    <div>
      <div className="bgGreey">
        <Container className="padding-70">
          <h3 className="header" id="mission">
            Mission and Vision
          </h3>
          <Col md={12}>
            <Row>
              <Col md={4}>
                <Image
                  className="w-100 rounded LeftImagePadding"
                  src={data.image}
                />
              </Col>
              <Col md={8} >
                <div className="justify-content-center mgtop-13">
                  <span className="aboutsubtitle">Mission</span>
                  <p className="aboutParagrph">{data.mission}</p>
                  <span className="aboutsubtitle">Vision</span>
                  <p className="aboutParagrph">{data.vision}</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default MissonAndVision;
