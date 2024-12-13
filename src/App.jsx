import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import { Container, Row } from "react-bootstrap";
import Player from "./components/player";

function App() {
  const [query, setQuery] = useState("");
  return (
    <Container fluid>
      <Row>
        <SideBar setQuery={setQuery} />
        <MainContent query={query} />
        <Player />
      </Row>
    </Container>
  );
}

export default App;
