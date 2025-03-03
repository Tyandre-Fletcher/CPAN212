import { Container } from "react-bootstrap";
import "./styles/Information.css";

const Information = () => {
  return (
    <Container>
      <h2 className="info">John Doe</h2>
      <h2 className="info">JohnDoe@gmail.com</h2>
      <h2 className="info">999-999-9999</h2>
      <h2 className="info">Seattle, WA</h2>
    </Container>
  );
};

export default Information;
