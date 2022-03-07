import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function SoftwareTestPractice(props: any) {
  const rowOne = props.data.rowOne;
  const rowTwo = props.data.rowTwo;


  return (
    <div>
      <div className=" bgWhite">
        <Container className="container paddingBottom60">
          <h2 className="txtblue paddingBottom30 pb-0">
            Software Testing Practise as a Service
          </h2>
          <section className="testting-group d-none">
            <div className="hideline-testing-group"></div>
            <Row className="row">
              <Col md={3}>
                {rowOne.map((item: any, i: any) => (
                  <div className="testing-practice testing-practice-button">
                    <div className="testing-practice-shape content-panel">
                      <div className="testing-practice-shape-inner">
                        <div className="testing-practice-shape-inner-2"></div>
                      </div>
                    </div>
                    <div className="testing-practice-content">
                      <div className="content-title">Icon Add</div>
                      <div className="content-sub">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </section>
          <div className="btn btn-green btn-verybig d-none">
            <a>Testing Practice</a>
          </div>
          <section className="testting-group d-none">
            <div className="hideline-testing-group"></div>
          </section>
          <section className="testting-group testting-group-bottom d-none">
            <div className="hideline-testing-group"></div>
            <Row className="row">
              <Col md={3}>
                {rowTwo.map((item: any, i: any) => (
                  <div className="testing-practice testing-practice-button">
                    <div className="testing-practice-shape content-panel">
                      <div className="testing-practice-shape-inner">
                        <div className="testing-practice-shape-inner-2"></div>
                      </div>
                    </div>
                    <div className="testing-practice-content">
                      <div className="content-title">Icon Add</div>
                      <div className="content-sub">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </section>
          <Image
            className="w-75 center w-100-mobile"
            src="assets/images/Testing/Infographics1-01.svg"
          />
        </Container>
      </div>
    </div>
  );
}

export default SoftwareTestPractice;
