import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import "./Filter.css";

function Filter({ children }) {
  return (
    <Accordion defaultActiveKey="0">
      <Card bg="dark" text="secondary">
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Filtrera
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{children}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Filter;
