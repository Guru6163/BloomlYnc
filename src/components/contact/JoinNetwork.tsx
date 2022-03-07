import React from "react";
import Container from "react-bootstrap/Container";
import { CardGroup, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

function JoinNetwork(props: any) {
  const data = props.data;
  return (
    <div>
      <div className="bgWhite">
        <Container className=" padding-70 paddingBottom40">
          <h3 className="header">{data.title}</h3>
          <Col md={12}>
            <Row>
              {data.content.map((item: any, i: any) => (
                <Col key={i} md={6} sm={6} xs={6} className=" customTowColumn">
                  <Card key={i} className=" border-0 mb-5">
                    <Image key={i} className="w-100" src={item.image} alt="..." />
                    <Card.Body   className=" rounded-bottom-10 bgBlue">
                      <Card.Title className=" text-center text-white">
                        {item.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default JoinNetwork;
