import React from "react";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function HomeBottom() {
  return (
    <div>
      <div className="homeBottom">
        <Container fluid>
          <Row>
            <Col md={8}>
              <h2 className="footerh2">
                Mentor ERP for Educational Institutions Go Paperless and Drive
                Efficiency
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomeBottom;
