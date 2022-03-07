import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function ComponentOne(props: any) {
  console.log(props.data);
  const colOne = props.data.colOne;
  const colTwo = props.data.colTwo;

  return (
    <div>
      <div className="bgWhite">
        <Container className="padding-100">
          <Col md={12}>
            <Row className="vertical-divider">
              <Col md={4}>
                <Image className="LeftImage w-85" src={colOne.image} />
                <p className="italic-text">
                  {colOne.about}
                  <span className="font-weight-bold ">
                    {colOne.aboutContent}
                  </span>
                </p>
                <p className="directorName">
                  - <i className="italic-text">{colOne.name}</i>
                </p>
              </Col>
              <Col md={8} className=" paddingLeft">
                {colTwo.map((item: any, i: any) => (
                  <p className="paragraph">{item}</p>
                ))}
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default ComponentOne;
