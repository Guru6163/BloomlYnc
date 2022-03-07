import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function CustomBanner(props: any) {
  const data = props.data;
  return (
    <div>
      <Col md={12} className=" no-padding" id="bannerdiv">
        <Image
          className="d-none d-md-block w-100 fixed-height"
          src={data.image}
        />
        <Image className="d-block d-md-none w-100" src={data.imageObj} />
        <div className="bannerdiv">
          <h5>{data.title}</h5>
          <Button className="btn txtwhite custombtn mobile-bottom mRight-25 ipadbtncss">
            <a target="_blank" href="contact.html#contactus">
              Contact us{" "}
            </a>
          </Button>
        </div>
      </Col>
    </div>
  );
}

export default CustomBanner;
