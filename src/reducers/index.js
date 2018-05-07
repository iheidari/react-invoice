import * as types from "../constants/actionTypes";
export default (state = {}, action) => {
  switch (action.type) {
    case types.INITIALIZE_APP:
      return {
        ...state,
        ...action.store
      };
    case types.UPDATE_INVOICE:
      let invoices;
      if (action.invoice.id) {
        invoices = state.invoices.map(inv => {
          if (inv.id !== action.invoice.id) return inv;
          else return action.invoice;
        });
      } else {
        const id = state.invoices.reduce(
          (acc, cur) => (cur.id >= acc ? cur.id + 1 : acc),
          1
        );
        invoices = [...state.invoices, { ...action.invoice, id }];
      }
      return {
        ...state,
        invoices
      };
    case types.DELETE_INVOICE:
      return {
        ...state,
        invoices: action.invoices
      };
    default:
      return state;
  }
};
