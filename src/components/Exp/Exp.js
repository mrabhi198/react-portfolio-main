import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ExpCards from "./ExpCards";
import Particle from "../Particle";
import ExpCards from "./ExpCards";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="An intern in Jain Divya & CO."
              description="Worked as an auditor at Jain Divya & Co., gaining hands-on experience in financial auditing, compliance, and report analysis under the guidance of a Chartered Accountant."
            />
          </Col>

          <Col md={4} className="project-card">
            <ExpCards
              imgPath={bitsOfCode}
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
