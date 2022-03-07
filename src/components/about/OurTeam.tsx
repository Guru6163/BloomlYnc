import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function OurTeam(props: any) {
  const data = props.data;
  const rowOne = data.rowOne;
  const rowTwo = data.rowTwo;
  const rowThree = data.rowThree;
  return (
    <div>
      <div className="bgGreey">
        <Container className="padding-70">
          <h3 className="header" id="team">
            Our Core Team
          </h3>

          <Container className="customWidth container_padding">
            <Row className="vertical-divider profileBottom">
              {rowOne.map((item: any, i: any) => (
                <Col md={6}>
                  <div className="profile">
                    <Image
                      rounded={true}
                      className=" mx-auto d-block"
                      src={item.image}
                    />
                    <div className="profileName">{item.name}</div>
                    <div className="degree">{item.designation}</div>
                    <p className="profileContent">{item.about}</p>
                  </div>
                </Col>
              ))}
            </Row>

            <Row className="vertical-divider profileBottom">
              {rowTwo.map((item: any, i: any) => (
                <Col md={6}>
                  <div className="profile">
                    <Image
                      rounded={true}
                      className=" mx-auto d-block"
                      src={item.image}
                    />
                    <div className="profileName">{item.name}</div>
                    <div className="degree">{item.designation}</div>
                    <p className="profileContent">{item.about}</p>
                  </div>
                </Col>
              ))}
            </Row>
            <Row className="vertical-divider profileBottom">
              {rowThree.map((item: any, i: any) => (
                <Col md={6}>
                  <div className="profile">
                    <Image
                      rounded={true}
                      className=" mx-auto d-block"
                      src={item.image}
                    />
                    <div className="profileName">{item.name}</div>
                    <div className="degree">{item.designation}</div>
                    <p className="profileContent">{item.about}</p>
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

export default OurTeam;
