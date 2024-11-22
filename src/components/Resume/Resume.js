import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';

const Resume = () => {
  const pdfUrl = "/Ankita_Sinha.pdf";

  return (
    <section className="resume">
      <div className="resume-content">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfUrl}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <br />

        <iframe src={pdfUrl} title="Resume" width="100%" height="600px" style={{ border: "none", marginTop: "20px"}}></iframe>

        <br/>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfUrl}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        
      </div>
    </section>
  );
};

export default Resume;