import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function TechnologyPartners() {
  const data = [
    "/assets/images/Contact/Technology Partners1.png",
    "/assets/images/Contact/Technology Partners2.png",
    "/assets/images/Contact/Technology Partners3.png",
  ];
  return (
    <div>
      <div className="bgGreey">
        <Container className="padding-70">
          <h3 className="header">Partner</h3>

          <Container>
            <Row className="partnerSlider">
              {data.map((item: any, i: any) => (
                <Col key={i} className="col-md-4">
                  <Image className="w-100 mobileBottom" src={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
  const styles = {
    container: {
      width: "356.667px",
      marginright: "20px",
    },
  } as React.CSSProperties;
}

export default TechnologyPartners;
