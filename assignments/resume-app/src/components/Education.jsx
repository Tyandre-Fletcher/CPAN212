import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./styles/Education.css";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getEdu")
      .then((response) => response.json())
      .then((data) => setEducation(data))
      .catch((error) => console.error("Error fetching education data", error));
  }, []);

  return (
    <Container className=" mt-5 p-5 pt-2 education-container">
      <Row>
        <Col>
          <h2 className="mt-3 text-center">Education</h2>
        </Col>
      </Row>

      {education.length > 0 ? (
        education.map((edu, index) => (
          <Row key={index} className="mt-3 education-row">
            <Col className="education-section">
              <h3 className="school-name">{edu.school}</h3>
              <p className="degree">
                <strong>Degree:</strong> {edu.degree}
              </p>
              <p className="year">
                <strong>Years Attended:</strong> {edu.yearOfStudy}
              </p>
              <p className="gpa">
                <strong>GPA:</strong> {edu.gpa}
              </p>

              <div className="education-subsection">
                <h5>Relevant Courses</h5>
                <ul>
                  {edu.relevantCourses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>

              <div className="education-subsection">
                <h5>Extracurricular Activities</h5>
                <ul>
                  {edu.extracurriculars.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        ))
      ) : (
        <p className="text-center">Loading education details.</p>
      )}
    </Container>
  );
};

export default Education;
