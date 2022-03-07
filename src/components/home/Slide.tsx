import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Col, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ArrowPrev from "../../assets/static/images/Arrow_2.svg";
import ArrowNext from "../../assets/static/images/Arrow_1.svg";

function Slide(props: any) {
  const data = props.data;
  console.log(data[0]);
  const SpildeOption = {
    rewind: false,
    perPage: 2,
    perMove: 1,

    type: "loop",
  };
  return (
    <div>
      <div className="bgGreey">
        <Container className=" paddingBottom30">
          <h2 className="txtblue">Mentor ERP - Key Features </h2>
          <Row className=" driveSlider">
            <Col className="col-md-12 mgbottom120">
              <Splide
                options={SpildeOption}
                renderControls={() => (
                  <div className="splide__arrows Sadhana">
                    <Button
                      variant="default"
                      className="splide__arrow splide__arrow--prev"
                    >
                      <Image src={ArrowPrev} />
                    </Button>
                    <Button
                      variant="default"
                      className="splide__arrow splide__arrow--next"
                    >
                      <Image src={ArrowNext} />
                    </Button>
                  </div>
                )}
              >
                {data.map((item: any, i: any) => (
                  <SplideSlide className="efficiencyDiv">
                    <Image
                      className="roundedtop"
                      src={item.image}
                      alt="Image"
                    />

                    <div className="driverSliderContent">
                      <div className="sliderSubTitle">
                        <a href="http://mentorerp.com/mentor.html#cctv">
                          {item.title}
                        </a>
                      </div>
                      <p>{item.content}</p>
                      <Button className=" btn txtwhite custombtn">
                        <a
                          href="http://mentorerp.com/mentor.html#cctv"
                          target="_blank"
                        >
                          Read More
                        </a>
                      </Button>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Slide;
