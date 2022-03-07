import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";


function MentorErp(props: any) {
  const rowOne = props.data.rowOne;
  const rowTwo = props.data.rowTwo;

  
  return (
    <div>
      <div className="bgBlue">
        <Container className="paddingBottom30">
          <h2 className="txtwhite">What Makes Mentor ERP different?</h2>
          <Row className="boxMobile pr-lg-0">
            {rowOne.map((item: any, i: any) => (
              <Col md={6}>
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
          <Row className="boxMobile pr-lg-0">
            {rowTwo.map((item: any, i: any) => (
              <Col md={6} className="mgbottom50">
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

export default MentorErp;
