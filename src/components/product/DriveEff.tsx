import React from "react";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function DriveEff(props: any) {
  const data = props.data;

  return (
    <div>
      <div className="bgWhite">
        <Container className="container_padding">
          <h2 className="txtblue paddingBottom30">{data.title}</h2>
          <div className="efficency">{data.quote}</div>
          <Col
            md={12}
            className="border-radius border efficencyBox mgbottom50 borderColor"
          >
            <Row className="flex-column-reverse flex-md-row ">
              <Col md={8}>
                <div className="efficencyTitle">{data.content.title}</div>
                <ul className="efficencyUl">
                  {data.content.content.map((item: any, i: any) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </Col>
              <Col
                md={4}
                className="border-radius padding-0 bgGreey col d-flex align-items-center justify-content-center"
              >
                <Image className="efficencyImg" src={data.image} />
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default DriveEff;
