import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./styles/Experience.css";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getExp")
      .then((response) => response.json())
      .then((data) => setExperience(data))
      .catch((error) => console.error("Error fetching education data", error));
  }, []);

  return (
    <Container className="mt-5 p-5 pt-2 experience-container">
      <Row>
        <Col>
          <h2 className="mt-3 text-center">Experience</h2>
        </Col>
      </Row>

      {experience.length > 0 ? (
        experience.map((exp, index) => (
          <Row key={index} className="mt-4">
            <Col className="experience-section">
              <h3 className="company-name">{exp.company}</h3>
              <p className="position">
                <strong>Position:</strong> {exp.position}
              </p>
              <p className="years">
                <strong>Years:</strong> {exp.years}
              </p>

              <div className="experience-subsection">
                <h5>Responsibilities</h5>
                <ul>
                  {exp.responsibilities.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        ))
      ) : (
        <p className="text-center">Loading experience details.</p>
      )}
    </Container>
  );
};

export default Experience;
