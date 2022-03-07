import React from "react";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function OurCloud(props: any) {
  const data = props.data;

  return (
    <div>
      <div className="bgGreey">
        <Container className=" paddingBottom40">
          <h2 className="txtblue paddingBottom30">{data.title}</h2>
          <div className=" mobile-scroll-img">
            <Image className="mgbottom-100" src={data.image} />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default OurCloud;
