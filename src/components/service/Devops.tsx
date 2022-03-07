import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Devops(props: any) {
  const data = props.data;
  return (
    <div id="devops">
      <div className="col-md-12 no-padding" id="devops">
        <div className="process d-sm-block ">
          <h2>{data.title}</h2>
          <p>{data.descrip}</p>
        </div>
        <Image
          className="d-none d-sm-block w-100 processImgHeight"
          src={data.imageOne}
          alt="First slide"
        />
        <Image
          className="d-block d-sm-none w-100 processImgHeight"
          src={data.imageTwo}
          alt="First slide"
        />
      </div>
    </div>
  );
}

export default Devops;
