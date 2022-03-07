import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function DevMethod(props: any) {
  const data = props.data;
  const rowOne = data.rowOne;
  const rowTwo = data.rowTwo;
  console.log(data);

  return (
    <div id="appDev">
      <div className="bgGreey">
        <Container>
          <h2 className="txtblue paddingBottom30">{rowOne.title}</h2>
          <Row>
            <Col md={5}>
              <Image className="w-100" src={rowOne.image} />
            </Col>
            <Col md={7}>
              <h4 className="subtitle">{rowOne.subTitle}</h4>
              {rowOne.content.map((item: any, i: any) => (
                <p className="paragraph">{item}</p>
              ))}
            </Col>
          </Row>
          <hr className="linemargin" /> 
          <Row className=" qualityPaddingBottom">
            <Col md={7}>
              <h4 className="subtitle">{rowTwo.title}</h4>

              {rowTwo.content.map((item: any, i: any) => (
                <p className="paragraph">{item}</p>
              ))}
            </Col>
            <div className="col-md-5">
              <Image className="w-100" src={rowTwo.image} />
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default DevMethod;
