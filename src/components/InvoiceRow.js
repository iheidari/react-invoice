import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const InvoiceRow = ({ id, item, quantity, price, deleteInvoice }) => {
  return (
    <Row className="show-grid invoiceRow">
      <Link to={`invoice/${id}`}>
        <Col md={5}>{item}</Col>
        <Col md={2}>{quantity}</Col>
        <Col md={2}>{price}</Col>
        <Col md={2}>{quantity * price}</Col>
      </Link>
      <Col md={1}>
        <Button bsStyle="danger" bsSize="xsmall" onClick={deleteInvoice}>
          X
        </Button>
      </Col>
    </Row>
  );
};

export default InvoiceRow;
