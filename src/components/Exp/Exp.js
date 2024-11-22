import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExpCards from "./ExpCards";
import internship from "../../Assets/Img/internship.jpg";
import volunteer from "../../Assets/Img/vol.jpeg";

function Exp() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          I have <strong className="purple">Experience </strong>on
        </h1>
        <p style={{ color: "white" }}>
          Here are a few role I've recently worked as.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExpCards
              imgPath={internship}
              isBlog={false}
              title="An intern in Jain Divya & CO."
              description="Worked as an auditor at Jain Divya & Co., gaining hands-on experience in financial auditing, compliance, and report analysis under the guidance of a Chartered Accountant."
            />
          </Col>

          <Col md={4} className="project-card">
            <ExpCards
              imgPath={volunteer}
              isBlog={false}
              title="Volunteer in Glad Bharat Foundation"
              description="Gained insights into the operations of non-profit organizations and the importance of community service in societal development."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Exp;
