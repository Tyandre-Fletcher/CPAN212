import { Container } from "react-bootstrap";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Overview from "./components/Overview.jsx";
import Information from "./components/Information.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <Container>
      <Information />
      <Overview />
      <Education />
      <Experience />
    </Container>
  );
}

export default App;
