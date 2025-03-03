import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./styles/Overview.css";

const Overview = () => {
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getOverview")
      .then((response) => response.json())
      .then((data) => setOverview(data))
      .catch((error) => console.error("Error fetching education data", error));
  }, []);

  return (
    <Container className=" mt-5 p-5 pt-2 overview-container">
      <Row>
        <Col>
          <h2 className="mt-3 text-center">Overview</h2>
        </Col>
      </Row>

      {overview.length > 0 ? (
        overview.map((edu, index) => (
          <Row key={index} className="mt-3 overview-row">
            <Col className="overview-section">
              <h2 className="overview">{`${edu.overview.content}`}</h2>
            </Col>
          </Row>
        ))
      ) : (
        <p className="text-center">Loading overview details</p>
      )}
    </Container>
  );
};

export default Overview;
