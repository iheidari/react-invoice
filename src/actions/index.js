import * as types from "../constants/actionTypes";

export const initApp = () => {
  return {
    type: types.INITIALIZE_APP,
    store: {
      invoices: [
        { id: 1, item: "item1", quantity: 4, price: 12 },
        { id: 2, item: "item2", quantity: 1, price: 44 }
      ]
    }
  };
};

export const updateInvoice = (invoice,state) => {
  return {
    type: types.UPDATE_INVOICE,
    invoice
  };
};

export const deleteInvoice = (invoices, id) => {
  const ret = invoices.filter(inv => inv.id !== id);
  return {
    type: types.DELETE_INVOICE,
    invoices: ret
  };
};
