import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Button } from "react-bootstrap";
import InvoiceHeader from "../components/InvoiceHeader";
import InvoiceRow from "../components/InvoiceRow";
import NoInvoice from "../components/NoInvoice";
import InvoiceSummary from './InvoiceSummary';
import queryString from "query-string";
import { deleteInvoice } from "../actions";
import { Link } from "react-router-dom";

class InvoiceList extends Component {
  deleteInvoice = id => {
    this.props.dispatch(deleteInvoice(this.props.invoices, id));
  };
  render() {
    const p = this.props;
    const parsed = queryString.parse(p.location.search);

    let items = [];
    if (p.invoices && p.invoices.length > 0) {
      const order = parsed.order || "item";
      p.invoices.sort((a, b) => a[order] > b[order]);
      items = p.invoices.map(inv => {
        return (
          <InvoiceRow
            key={inv.id}
            {...inv}
            deleteInvoice={() => this.deleteInvoice(inv.id)}
          />
        );
      });
    } else {
      items.push(<NoInvoice />);
    }
    return (
      <Grid>
        <Row>
          <Col md={2} mdOffset={10}>
            <Link to={`invoice`}>
              <Button bsStyle="success">Add</Button>
            </Link>
          </Col>
        </Row>
        <InvoiceHeader />
        {items}
        <InvoiceSummary tax={5} />
      </Grid>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    invoices: state.invoices
  };
};
export default connect(mapStateToProps)(InvoiceList);
