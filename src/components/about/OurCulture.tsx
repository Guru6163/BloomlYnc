import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function OurCulture(props: any) {
  const data = props.data;
  const rowOne = data.boxData.rowOne;
  const rowTwo = data.boxData.rowTwo;
  const rowThree = data.boxData.rowThree;
  console.log(rowOne);

  return (
    <div>
      <div className="bgWhite">
        <Container className="padding-70">
          <h3 className="header" id="culture">
            Our Culture
          </h3>
          <p className="txtCenter">{data.header} </p>
          <Container className=" customWidth">
            <Row>
              {rowOne.map((item: any, i: any) => (
                <Col md={6}>
                  <div className="aboutbox">
                    <Image className="w-100" src={item.image} />

                    <div className="culturetitle">{item.title}</div>
                    <p className="culturBoxContent">{item.content}</p>
                  </div>
                </Col>
              ))}
            </Row>

            <Row>
              {rowTwo.map((item: any, i: any) => (
                <Col md={6}>
                  <div className="aboutbox">
                    <Image className="w-100" src={item.image} />

                    <div className="culturetitle">{item.title}</div>
                    <p className="culturBoxContent">{item.content}</p>
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              {rowThree.map((item: any, i: any) => (
                <Col md={6}>
                  <div className="aboutbox">
                    <Image className="w-100" src={item.image} />

                    <div className="culturetitle">{item.title}</div>
                    <p className="culturBoxContent">{item.content}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
}

export default OurCulture;
