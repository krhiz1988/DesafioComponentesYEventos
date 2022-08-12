import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Inputs from "./components/Inputs";
import ButtonAction from "./components/ButtonAction";

function App() {
  const [password, _] = useState("252525");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="auto" className="mt-3">
          <h1>Desafío de los componentes y eventos</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={6}>
          <Inputs password={password} setIsPasswordValid={setIsPasswordValid} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={6}>{isPasswordValid ? <ButtonAction /> : null}</Col>
      </Row>
    </Container>
  );
}

export default App;
