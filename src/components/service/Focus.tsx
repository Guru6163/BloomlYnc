import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Focus(props: any) {
  const data = props.data;
  return (
    <div>
      <div className="bgWhite">
        <Container className=" padding-100">
          <Col md={12}>
            <Row>
              <Col md={5}>
                <Image className="LeftImage LeftImgHeight" src={data.image} />
              </Col>
              <Col md={7} className="col-md-7">
                <p className="paragraph">{data.descrip}</p>
                <ul className="ul">
                  {data.content.map((item: any, i: any) => (
                    <li>{item} </li>
                  ))}
                </ul>
                <p className="paragraph">{data.detail}</p>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default Focus;
