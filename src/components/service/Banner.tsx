import React from "react";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Banner(props: any) {
  const data = props.data;
  return (
    <div>
      <Col md={12} className=" no-padding" id="bannerdiv">
        <Image className="d-block w-100 fixed-height" src={data.image} />
        <div className="bannerdiv">
          <h5>{data.title}</h5>
          <Button className="btn txtwhite custombtn mobileMargin-0 mRight-25 ipadbtncss">
            <a target="_blank" href="contact.html#contactus">
              {data.button}
            </a>
          </Button>
        </div>
      </Col>
    </div>
  );
}

export default Banner;
