import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Ankita Sinha, </span>
            hailing from <span className="purple"> Bihar, India.</span>
            <br />
            I'm currently pursuing a <span className="purple"> Bachelor of Business Administration</span> at <span className="purple">Lovely Professional University.</span>
            <br/>
            <br/>
            Recently, I completed an enriching internship with <span className="purple">Jain Divya & Co.</span> where I gained hands-on experience in <span className="purple">financial auditing, compliance,</span> and 
            <span className="purple"> report analysis</span> under the mentorship of a Chartered Accountant. This role fueled my passion for finance, and I'm eager to explore more opportunities in the field to deepen my expertise and make an impact!"
            <br />
            <br />
            Apart from these, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
