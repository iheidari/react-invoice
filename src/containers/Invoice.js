import React, { Component } from "react";
import InvoiceList from "./InvoiceList";
import InvoiceForm from "./InvoiceForm";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Invoice extends Component {
  componentWillMount() {}
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={InvoiceList} />
          <Route exact path="/Invoice/:id?" component={InvoiceForm} />
        </div>
      </Router>
    );
  }
}

export default Invoice;
