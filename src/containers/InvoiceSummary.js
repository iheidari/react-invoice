import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

class InvoiceSummary extends Component {
  render() {
    const p = this.props;
    const sum = p.invoices.reduce((acc,cur)=>acc + (cur.price*cur.quantity),0);
    return [
      <Row key="Subtotal">
        <Col md={2} mdOffset={8}>
          Subtotal
        </Col>
        <Col md={2}>{sum}</Col>
      </Row>,
      <Row key="Tax">
        <Col md={2} mdOffset={8}>
          Tax ({p.tax}%)
        </Col>
        <Col md={2}>{Number.parseFloat(sum*0.05).toFixed(2)}</Col>
      </Row>,
      <Row key="Total">
        <Col md={2} mdOffset={8}>
          Total:
        </Col>
        <Col md={2}>{Number.parseFloat(sum*1.05).toFixed(2)}</Col>
        </Row>
    ];
  }
}

const mapStateToProps = (state, props) => {
  return {
    invoices: state.invoices
  };
};
export default connect(mapStateToProps)(InvoiceSummary);
