import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const InvoiceHeader = () => {
  return (
    <Row className="show-grid">
      <Link to={"/?order=item"}>
        <Col md={5}>Item</Col>
      </Link>
      <Link to={"/?order=quantity"}>
        <Col md={2}>Qty</Col>
      </Link>
      <Link to={"/?order=price"}>
        <Col md={2}>Price</Col>
      </Link>
      <Col md={2}>Total</Col>
    </Row>
  );
};

export default InvoiceHeader;
