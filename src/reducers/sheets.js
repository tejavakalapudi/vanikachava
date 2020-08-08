const defaultSheets = {
  orders: [],
  contacts: [],
};

export default (state = defaultSheets, action) => {
  switch (action.type) {
    case 'STORE_ORDERS':
      return { ...state, orders: action.payload };
    default:
      return state;
  }
};
