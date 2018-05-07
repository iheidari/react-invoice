import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  InputGroup,
  Button
} from "react-bootstrap";
import { updateInvoice } from "../actions";
import { Link } from "react-router-dom";

class InvoiceForm extends Component {
  state = { quantity: 1, price: 100 };
  componentDidMount() {
    if (this.props.match.params.id) {
      this.setState({ ...this.props.invoice });
    }
  }
  textChanged = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitInvoice = () => {
    this.props.dispatch(updateInvoice(this.state));
    this.props.history.push("/");
  };
  render() {
    const s = this.state;
    return (
      <form>
        <FormGroup>
          <ControlLabel>Item</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter text"
            name="item"
            value={s.item}
            onChange={this.textChanged}
          />
          <ControlLabel>Quantity</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter text"
            name="quantity"
            value={s.quantity}
            onChange={this.textChanged}
          />
          <ControlLabel>Price</ControlLabel>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Enter text"
              name="price"
              value={s.price}
              onChange={this.textChanged}
            />
            <InputGroup.Addon>$</InputGroup.Addon>{" "}
          </InputGroup>
          <ControlLabel>Total</ControlLabel>
          <h6>{s.quantity * s.price}</h6>
        </FormGroup>
        <Button bsStyle="primary" onClick={this.submitInvoice}>
          Submit
        </Button>
        <Link to="/">
          <Button bsStyle="warning">Cancel</Button>
        </Link>
      </form>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    invoice:
      props.match.params.id && state.invoices
        ? state.invoices.find(e => e.id === parseInt(props.match.params.id, 10))
        : {}
  };
};
export default connect(mapStateToProps)(InvoiceForm);
